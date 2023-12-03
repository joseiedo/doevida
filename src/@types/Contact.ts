export interface IContact {
  address: IContactInfo;
  postalCode: IContactInfo;
  phone: IContactInfo;
  email: IContactInfo;
}

export interface IContactInfo {
  type: IContactInfoType;
  content: string;
}

export type IContactInfoType = "ADDRESS" | "POSTALCODE" | "PHONE" | "EMAIL";
