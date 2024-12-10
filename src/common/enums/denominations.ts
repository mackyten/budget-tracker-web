export enum denominations {
  NONE = 0,
  ONE = 1,
  FIVE = 5,
  TEN = 10,
  TWENTY = 20,
  FIFTY = 50,
  ONE_HUNDRED = 100,
  TWO_HUNDRED = 200,
  FIVE_HUNDRED = 500,
  ONE_THOUSAND = 1000,
}

export function getDenominationValue(denom: string): number {
  switch (denom) {
    case "NONE":
      return 0;
    case "ONE":
      return 1;
    case "FIVE":
      return 5;
    case "TEN":
      return 10;
    case "TWENTY":
      return 20;
    case "FIFTY":
      return 50;
    case "ONE_HUNDRED":
      return 100;
    case "TWO_HUNDRED":
      return 200;
    case "FIVE_HUNDRED":
      return 500;
    case "ONE_THOUSAND":
      return 1000;
    default:
      throw new Error("Invalid denomination");
  }
}
