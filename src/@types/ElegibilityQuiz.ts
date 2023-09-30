export interface IQuestion {
  id: number,
  label: string,
  eligibleAnswer: "SIM" | "NÃO"
  moreInfo: string,
  moreInfoLink: string,
}
