import { Container, Grid2, TextField } from "@mui/material";
import { Control, Controller, FieldErrors, } from "react-hook-form";
import { IncomeData } from "../api/types";

export const DeductionItem: React.FC<{
    index: number,
    control: Control<IncomeData, any>
    errors: FieldErrors<IncomeData>,
    removeDeduction: (index: number) => void,
}> = ({
    index,
    control,
    errors,
    removeDeduction
}) => {
        return (
            <Container>
                <Grid2 container spacing={2}>
                    <Grid2 size={{
                        mobile: 12,
                        tablet: 6,
                    }} >
                        <Controller
                            name={`deductions.${index}.description`}
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    label="Description"
                                    variant="outlined"
                                    fullWidth
                                    error={!!errors.deductions?.[index]?.description}
                                    helperText={errors.deductions?.[index]?.description?.message}
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
                            name={`deductions.${index}.amount`}
                            control={control}
                            render={({ field: { onChange, ...restField } }) => (
                                <TextField
                                    label="Amount"
                                    variant="outlined"
                                    fullWidth
                                    type="number"
                                    error={!!errors.deductions?.[index]?.amount}
                                    helperText={errors.deductions?.[index]?.amount?.message}
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