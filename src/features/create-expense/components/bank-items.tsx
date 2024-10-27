import {  Container, Grid2, TextField } from "@mui/material";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { IncomeData } from "../api/types";

export const BankItem: React.FC<{
    index: number,
    control: Control<IncomeData, any>
    errors: FieldErrors<IncomeData>,
    remove: (index: number) => void,
}> = ({
    index,
    control,
    errors,
    remove
}) => {
        return (

            <Container >
                <Grid2 container spacing={2}>
                    <Grid2 size={{
                        mobile: 12,
                        tablet: 6,
                    }} >
                        <Controller
                            name={`banks.${index}.name`}
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    label="Bank Name"
                                    variant="outlined"
                                    fullWidth
                                    error={!!errors.banks?.[index]?.name}
                                    helperText={errors.banks?.[index]?.name?.message}
                                    {...field}
                                />
                            )}
                        />
                    </Grid2>
                    <Grid2 size={{
                        mobile: 11,
                        tablet: 5,
                    }}>
                        <Controller
                            name={`banks.${index}.balance`}
                            control={control}
                            render={({ field: { onChange, ...restField } }) => (
                                <TextField
                                    label="Balance"
                                    variant="outlined"
                                    fullWidth
                                    type="number"
                                    error={!!errors.banks?.[index]?.balance}
                                    helperText={errors.banks?.[index]?.balance?.message}
                                    {...restField}
                                    onChange={(e) => {
                                        onChange(Number(e.target.value));
                                    }}
                                />
                            )}
                        />
                    </Grid2>


                </Grid2>
            </Container>



        );
    }