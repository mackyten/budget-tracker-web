import { Grid2, styled, TextField, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { IncomeData } from "../api/types";

const CashValue = styled(Typography)(({ theme }) => ({
    color: grey[700],
    fontWeight: 'normal',
    alignItems: 'center',
}));


export const CashItems: React.FC<{
    i: number;
    denom: { denomination: number, pieces: number };
    control: Control<IncomeData, any>
    error: FieldErrors<IncomeData>;
}> = ({
    i,
    denom,
    control,
    error
}) => {
    return (
        <Grid2 container spacing={2} sx={{ alignItems: 'center' }}>
            <Grid2 size={1}>
                <CashValue>{denom.denomination}</CashValue>
            </Grid2>

            <Grid2 size={1}>
                <CashValue>x</CashValue>
            </Grid2>

            <Grid2 size='grow'>
                <Controller
                    name={`cash.${i}.pieces`}
                    control={control}
                    render={({ field: { onChange, ...restField } }) => (
                        <TextField
                            label="Pieces"
                            variant="outlined"
                            fullWidth
                            type="number"
                            error={!!error.cash?.[i]?.pieces}
                            helperText={error.cash?.[i]?.pieces?.message}
                            {...restField}
                            value={restField.value || 0}
                            onChange={(e) => {
                                onChange(Number(e.target.value));
                            }}
                        />
                    )}
                />
            </Grid2>

            <Grid2 size={2} sx={{ display: 'flex', justifyContent: 'center' }} >
                <CashValue>=</CashValue>
            </Grid2>

            <Grid2 size={2} sx={{ display: 'flex', justifyContent: 'flex-end' }} >
                <CashValue>{denom.denomination * denom.pieces}</CashValue>
            </Grid2>
        </Grid2>
    );
}