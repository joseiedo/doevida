import { IBloodCenter } from "@/@types/BloodCenter";
import { IRegion } from "@/@types/Region";
import { IContact, IContactInfo, IContactInfoType } from "@/@types/Contact";
import axios from "axios";
import * as cheerio from "cheerio";

const infoPattern = /(Endereço|CEP|Telefone|E-mail):?/gi;
const BLOODCENTER_WEBSITE_URL = process.env.BLOODCENTER_WEBSITE_URL;

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
    throw Error;
  }

  return {
    type: contactsTypes[matchedType],
    content: content.replace(infoPattern, "").trim(),
  };
}

async function getAll(): Promise<IRegion[]> {
  if (BLOODCENTER_WEBSITE_URL === undefined) {
    throw Error("Environment variable BLOODCENTER_WEBSITE_URL is empty");
  }
  const { data } = await axios.get(BLOODCENTER_WEBSITE_URL);
  const $ = cheerio.load(data);

  const result: IRegion[] = [];
  $("#parent-fieldname-text p:has(strong)")
    .get()
    .forEach((element) => {
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

  return result;
}

export default Object.freeze({
  getAll,
});
