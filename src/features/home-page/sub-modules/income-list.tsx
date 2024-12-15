import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { useGetIncomeList } from "./api/hooks";
import { incomeListStore } from "./api/store";
import { IncomeData } from "../../create-expense/api/types";
import {
  getDenominationValue,
} from "../../../common/enums/denominations";
import { formatDate } from "../../../common/helpers/date";
import { formatMoney } from "../../../common/helpers/currency";
import { useEffect } from "react";

export const IncomeList: React.FC = () => {
  const state = incomeListStore();
  const { data, status, refetch } = useGetIncomeList(state.data);

  const getTotal = (val: number[]) => {
    const sum = val.reduce((acc, currentValue) => acc + currentValue, 0);
    return sum;
  };

  useEffect(() => {
    if (data && data !== state.data) {
      state.setData(data); // Only update if data has changed
    }
  }, [data, state]);

  return (
    <Box
      sx={{
        padding: "30px",
      }}
    >
      <Typography variant="h6">Your Income</Typography>

      {status}

      {status === "success" && (
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {state.columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={"center"}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.data.map((income: IncomeData) => {
                  const totalCash = getTotal(
                    income.cash.map((x) => {
                      const denominationValue: string = `${x.denomination}`;
                      return x.pieces * getDenominationValue(denominationValue);
                    })
                  );
                  const totalBankAccounts = getTotal(
                    income.banks.map((bank) => {
                      return bank.balance;
                    })
                  );
                  const totalDeductions = getTotal(
                    income.deductions.map((deduction) => deduction.amount)
                  );

                  const totalEarnings =
                    totalCash + totalBankAccounts - totalDeductions;
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={income.id}
                    >
                      <TableCell align={"center"}>
                        {formatDate(income.date)}
                      </TableCell>
                      <TableCell align={"center"}>{`${formatMoney(
                        totalCash
                      )}`}</TableCell>
                      <TableCell align={"center"}>{`${formatMoney(
                        totalBankAccounts
                      )}`}</TableCell>
                      <TableCell align={"center"}>{`${formatMoney(
                        totalDeductions
                      )}`}</TableCell>
                      <TableCell align={"center"}>{`${formatMoney(
                        totalEarnings
                      )}`}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[2, 10, 25, 100]}
            component="div"
            count={data.totalCount} // Total number of items (to calculate pages)
            rowsPerPage={data.pageSize} // Current page size
            page={data.pageNumber - 1} // Current page
            onPageChange={(_, page) => {
              console.log(page);
              state.setPage(page);
              refetch();
            }} // Function to handle page changes
            onRowsPerPageChange={() => {}} // Function to handle row per page changes
          />
        </Paper>
      )}
    </Box>
  );
};
