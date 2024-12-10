import { api } from "../../../../common/base-api";
import { Paginated } from "../../../../common/types/paginated";
import { IncomeData } from "../../../create-expense/api/types";

export const getIncomeList = async <
  T extends { pageNumber: number; pageSize: number }
>(
  data: T
): Promise<Paginated<IncomeData[]>> => {
  const response = await api.get(
    `/api/income/get-list?PageNumber=${data.pageNumber}&PageSize=${data.pageSize}`
  );
  console.log(response.data); // Make sure the response structure is correct
  return response.data; // Return the actual data
};
