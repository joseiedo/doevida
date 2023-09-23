import {
  Contact,
  ContactInfo,
  ContactInfoType,
  Hemocenter,
  Region,
} from "@/@types/Hemocenter";
import axios from "axios";
import * as cheerio from "cheerio";

function formatHemocenterInfo(contact: string): Contact {
  const infoPattern = /(Endereço|CEP|Telefone|E-mail)/gi;
  const separator = "\n";
  const [address, postalCode, phone, email] = contact
    .replace(infoPattern, separator + "$1")
    .split(separator)
    .map((info) => info.trim())
    .filter((item) => item !== "")
    .map(cleanHemocenterContactInfo);

  return {
    address,
    postalCode,
    phone,
    email
  };
}

function cleanHemocenterContactInfo(content: string): ContactInfo {
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
    console.log("FOO", content);
    return {
      type: "ADDRESS",
      content: "TEST",
    };
  }

  return {
    type: contactsTypes[matchedType],
    content: content,
  };
}

async function getAll(): Promise<Region[]> {
  const { data } = await axios.get(
    "https://www.gov.br/saude/pt-br/acesso-a-informacao/acoes-e-programas/doacao-de-sangue/hemocentros-no-brasil",
  );
  const $ = cheerio.load(data);

  const result: Region[] = [];
  $("#parent-fieldname-text p:has(strong)")
    .get()
    .forEach((element) => {
      const regionName = $(element).text();
      const hemoElements = $(element).nextUntil("p:has(strong)");

      const hemocenters: Hemocenter[] = [];
      for (let i = 0; i < hemoElements.length; i += 2) {
        const hemocenterTitle = $(hemoElements[i]).text().replace(/(\n)/g, "");
        const hemocenterInfo = $(hemoElements[i + 1]).text();

        hemocenters.push({
          name: hemocenterTitle,
          contact: formatHemocenterInfo(hemocenterInfo),
        });
      }

      result.push({
        name: regionName,
        hemocenters,
      });
    });

  return result;
}

export default Object.freeze({
  getAll,
});
