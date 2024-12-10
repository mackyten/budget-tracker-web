import { denominations } from "../../../common/enums/denominations";

export type IncomeData = {
  id?: number;
  date: Date;
  banks: BankAccount[];
  cash: CashOnHand[];
  deductions: Deduction[];
};

export type BankAccount = {
  name: string;
  balance: number;
};

export type CashOnHand = {
  denomination: denominations;
  pieces: number;
};

export type Deduction = {
  description: string;
  amount: number;
};

////Initial data
export const cashOnHandInit: CashOnHand[] = [
  {
    denomination: denominations.ONE_THOUSAND,
    pieces: 0,
  },
  {
    denomination: denominations.FIVE_HUNDRED,
    pieces: 0,
  },
  {
    denomination: denominations.TWO_HUNDRED,
    pieces: 0,
  },
  {
    denomination: denominations.ONE_HUNDRED,
    pieces: 0,
  },
  {
    denomination: denominations.FIFTY,
    pieces: 0,
  },
  {
    denomination: denominations.TWENTY,
    pieces: 0,
  },
  {
    denomination: denominations.TEN,
    pieces: 0,
  },
  {
    denomination: denominations.FIVE,
    pieces: 0,
  },
  {
    denomination: denominations.ONE,
    pieces: 0,
  },
];
