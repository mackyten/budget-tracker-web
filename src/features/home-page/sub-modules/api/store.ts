import { create } from "zustand";
import { Paginated } from "../../../../common/types/paginated";
import { IncomeData } from "../../../create-expense/api/types";
import { IColumn } from "./types";

interface IIncomeListStore {
  data: Paginated<IncomeData[]>;
  columns: readonly IColumn[];
  setPage: (page: number) => void;
  setData: (data: Paginated<IncomeData[]>) => void;
  // isAddingCash: boolean;
  // setIsAddingCash: (isAddingCash: boolean) => void;
}

export const incomeListStore = create<IIncomeListStore>((set) => ({
  data: {
    data: [],
    pageNumber: 1,
    pageSize: 2,
    totalCount: 0,
    totalPages: 0,
  },
  columns: [
    { id: "date", label: "Month", minWidth: 170 },
    { id: "cash", label: "Total Cash", minWidth: 100 },
    {
      id: "bank",
      label: "Total Bank Account",
      minWidth: 170,
      align: "right",
      format: (value: number) => value.toLocaleString("en-US"),
    },
    {
      id: "deduction",
      label: "Total Deductions",
      minWidth: 170,
      align: "right",
      format: (value: number) => value.toLocaleString("en-US"),
    },
    {
      id: "income",
      label: "Income Earned",
      minWidth: 170,
      align: "right",
      format: (value: number) => value.toFixed(2),
    },
  ],
  setPage: (page: number) => {
    page = page + 1;
    set((state) => {
      if (page <= state.data.totalCount) {
        console.log("Page incremented");
        return {
          data: {
            ...state.data,
            pageNumber: page,
          },
        };
      }

      console.log("Page not incremented", page);

      // Optionally, handle case where the next page is out of range
      // For example, resetting to the first page
      return {
        data: {
          ...state.data,
          pageNumber: 1, // Or leave it as is if you want to prevent further increment
        },
      };
    });
  },
  setData: (data: Paginated<IncomeData[]>) => {
    set((state) => {
      return {
        ...state,
        data: data,
      };
    });
  },
}));
