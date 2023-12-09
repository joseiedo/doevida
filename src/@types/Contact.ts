export interface IContact {
  address: string;
  postalCode: string;
  phone: string;
  email: string;
}

export type IContactInfoType = "address" | "postalCode" | "phone" | "email";
