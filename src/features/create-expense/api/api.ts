import { api } from "../../../common/base-api";
import { IncomeData } from "./types";

export const postIncome = async <T>(
  newData: IncomeData
): Promise<T | undefined> => {
  api.post("/api/income/create", newData).then((res) => {
    console.log(res);
    return res.data;
  });

  return;
};


