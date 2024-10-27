import { z } from "zod";
import { denominations } from "../../../common/enums/denominations";

const BankAccountSchema = z.object({
    name: z.string(),
    balance: z.number(),
});

export const CashOnHandSchema = z.object({
    denomination: z.nativeEnum(denominations),
    pieces: z.number(),
});

const DeductionSchema = z.object({
    description: z.string(),
    amount: z.number(),
});

const IncomeDataSchema = z.object({
    date: z.date(),
    banks: z.array(BankAccountSchema),
    cash: z.array(CashOnHandSchema),
    deductions: z.array(DeductionSchema),
});

export { IncomeDataSchema };