import { IBloodCenter } from "@/@types/BloodCenter";
import { IBloodCenterRegion } from "@/@types/Region";
import { IContact, IContactInfo, IContactInfoType } from "@/@types/Contact";
import axios from "axios";
import * as cheerio from "cheerio";
import { getDBClient } from "@/infra/database";

const infoPattern = /(Endereço|CEP|Telefone|E-mail):?/gi;
const BLOODCENTER_WEBSITE_URL = process.env.BLOODCENTER_WEBSITE_URL;

/**
 * Caches the data of blood centers in the database.
 * @param regions - An array of regions containing blood center data.
 * @returns A Promise that resolves when the data is successfully cached.
 */
async function cacheData(regions: IBloodCenterRegion[]) {
  const db = await getDBClient();
  db?.collection("bloodcenters").insertMany(regions);
}

/**
 * Retrieves cached data of blood centers from the database.
 * @returns {Promise<IBloodCenterRegion[]>} A promise that resolves to an array of blood center data grouped by region.
 */
async function getCachedData(): Promise<IBloodCenterRegion[]> {
  const db = await getDBClient();
  const bloodcenters = await db?.collection("bloodcenters").find({}).toArray();

  return JSON.parse(JSON.stringify(bloodcenters)) as IBloodCenterRegion[];
}

/**
 * Map all info of bloodcenter by type of information.
 * @param contact - The contact information of the blood center returned in the scraping fase.
 * @returns The formatted contact information as an object.
 */
function formatBloodCenterInfo(contact: string): IContact {
  const separator = "\n";
  const [address, postalCode, phone, email] = contact
    .replace(infoPattern, separator + "$1")
    .split(separator)
    .map((info) => info.trim())
    .filter((item) => item !== "")
    .map(cleanBloodCenterContactInfo);

  return {
    address,
    postalCode,
    phone,
    email,
  };
}

/**
 * Cleans the contact information of a blood center.
 * @param content - The contact information to be cleaned.
 * @returns The cleaned contact information.
 * @throws Error if the contact information does not match any known type.
 */
function cleanBloodCenterContactInfo(content: string): IContactInfo {
  const contactsTypes: { [key: string]: IContactInfoType } = {
    Endereço: "ADDRESS",
    Rua: "ADDRESS",
    Av: "ADDRESS",
    CEP: "POSTALCODE",
    Telefone: "PHONE",
    "E-mail": "EMAIL",
  };

  const matchedType = Object.keys(contactsTypes).find((key) =>
    new RegExp(key, "gi").test(content),
  );

  if (!matchedType) {
    throw Error(`No matched type for information "${content}"`);
  }

  return {
    type: contactsTypes[matchedType],
    content: content.replace(infoPattern, "").trim(),
  };
}

/**
 * Retrieves all blood centers.
 * If there is cached data available, it returns the cached data.
 * Otherwise, it scrapes the data and returns it.
 * @returns {Promise<IBloodCenterRegion[]>} A promise that resolves to an array of blood centers grouped by region.
 */
async function getAll(): Promise<IBloodCenterRegion[]> {
  const cachedData = await getCachedData();

  if (cachedData.length > 0) {
    return cachedData;
  } else {
    return scrapData();
  }
}

/**
 * Scrapes data from government bloodcenters locations website.
 * @returns {Promise<IBloodCenterRegion[]>} A promise of the scraped data containing regions and blood centers.
 * @throws {Error} If the BLOODCENTER_WEBSITE_URL environment variable is empty.
 */
async function scrapData(): Promise<IBloodCenterRegion[]> {
  if (BLOODCENTER_WEBSITE_URL === undefined) {
    throw Error("Environment variable BLOODCENTER_WEBSITE_URL is empty");
  }
  const { data } = await axios.get(BLOODCENTER_WEBSITE_URL);
  const $ = cheerio.load(data);
  const result: IBloodCenterRegion[] = [];

  $("#parent-fieldname-text p:has(strong)").each((_, element) => {
    const regionName = $(element).text();
    const bloodCenterElements = $(element).nextUntil("p:has(strong)");
    const bloodCenters: IBloodCenter[] = [];

    for (let i = 0; i < bloodCenterElements.length; i += 2) {
      const bloodCenterTitle = $(bloodCenterElements[i])
        .text()
        .replace(/(\n)/g, "");
      const bloodCenterInfo = $(bloodCenterElements[i + 1]).text();
      bloodCenters.push({
        name: bloodCenterTitle,
        contact: formatBloodCenterInfo(bloodCenterInfo),
      });
    }
    result.push({
      name: regionName,
      bloodCenters: bloodCenters,
    });
  });

  cacheData(result);
  return result;
}

export default Object.freeze({
  getAll,
});
