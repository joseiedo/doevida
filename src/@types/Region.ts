import { IBloodCenter } from "./BloodCenter";

export interface IRegion {
  name: string;
  bloodCenters: IBloodCenter[];
}
