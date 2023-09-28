import {
  Contact,
  IContactInfo,
  ContactInfoType,
  IBloodCenter,
  IRegion,
} from "@/@types/BloodCenter";
import axios from "axios";
import * as cheerio from "cheerio";

const infoPattern = /(Endereço|CEP|Telefone|E-mail):?/gi;
function formatBloodCenterInfo(contact: string): Contact {
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
  const contactsTypes: { [key: string]: ContactInfoType } = {
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
  const { data } = await axios.get(
    "https://www.gov.br/saude/pt-br/acesso-a-informacao/acoes-e-programas/doacao-de-sangue/hemocentros-no-brasil",
  );
  const $ = cheerio.load(data);

  const result: IRegion[] = [];
  $("#parent-fieldname-text p:has(strong)")
    .get()
    .forEach((element) => {
      const regionName = $(element).text();
      const bloodCenterElements = $(element).nextUntil("p:has(strong)");

      const bloodCenters: IBloodCenter[] = [];
      for (let i = 0; i < bloodCenterElements.length; i += 2) {
        const bloodCenterTitle = $(bloodCenterElements[i]).text().replace(/(\n)/g, "");
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
