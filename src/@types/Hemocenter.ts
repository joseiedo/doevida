export interface Contact {
  address: ContactInfo;
  postalCode: ContactInfo;
  phone: ContactInfo;
  email: ContactInfo;
}

export interface ContactInfo {
  type: ContactInfoType;
  content: string;
}

export type ContactInfoType = "ADDRESS" | "POSTALCODE" | "PHONE" | "EMAIL";

export interface Region {
  name: string;
  hemocenters: Hemocenter[];
}

export interface Hemocenter {
  name: string;
  contact: Contact;
}
