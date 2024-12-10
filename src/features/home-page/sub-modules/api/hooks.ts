import { useQuery } from "@tanstack/react-query";
import { Paginated } from "../../../../common/types/paginated";
import { IncomeData } from "../../../create-expense/api/types";
import { getIncomeList } from "./api";

export const useGetIncomeList = (data: Paginated<IncomeData[]>) => {
  return useQuery<Paginated<IncomeData[]>>({
    queryFn: () => getIncomeList<Paginated<IncomeData[]>>(data),
    queryKey: ["income-list", data.pageNumber, data.pageSize], // Include page details for cache invalidation
    staleTime: 0, // Force data to be considered stale immediately
    refetchOnWindowFocus: true, // Optionally refetch when the window is focused
    refetchOnReconnect: true, // Refetch when the connection is re-established
  });
};
