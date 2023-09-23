export interface Contact {
  address: IContactInfo;
  postalCode: IContactInfo;
  phone: IContactInfo;
  email: IContactInfo;
}

export interface IContactInfo {
  type: ContactInfoType;
  content: string;
}

export type ContactInfoType = "ADDRESS" | "POSTALCODE" | "PHONE" | "EMAIL";

export interface IRegion {
  name: string;
  hemocenters: IHemocenter[];
}

export interface IHemocenter {
  name: string;
  contact: Contact;
}
