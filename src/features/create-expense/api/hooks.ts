import { useMutation } from "@tanstack/react-query";
import { IncomeData } from "./types";
import { postIncome } from "./api";
// import { queryClient } from "../../../common/tanstack";

export const usePostIncome = () => {
    return useMutation<IncomeData | undefined, Error, IncomeData>({///<ResponseType, Error, DataTypeToBePassed>
        mutationFn: (data: IncomeData) => postIncome<IncomeData>(data),
        onSuccess: (newData: IncomeData | undefined) => {
            // queryClient.setQueryData(['IncomeData'], (oldData: clientModel[] | undefined) => {
            //     if (oldData) {
            //         return [...oldData, newData];
            //     } else {
            //         return [newData];
            //     }
            // });
        },
        onError: (error) => {
            console.error(error);
        }
    });
};
