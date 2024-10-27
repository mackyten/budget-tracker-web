import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid2, MenuItem, TextField } from '@mui/material';
import { Control, Controller, useForm } from 'react-hook-form';
import { CashOnHand } from '../api/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { CashOnHandSchema } from '../api/schema';
import { denominations } from '../../../common/enums/denominations';
import { useAddIncomeStore } from '../api/store';

export const AddCashModal: React.FC<{
    onSubmitted: (cash: CashOnHand) => void,
}> = ({ onSubmitted }) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<CashOnHand>({
        resolver: zodResolver(CashOnHandSchema),
        defaultValues: {
            denomination: 0,
            pieces: 0,
        }
    });

    const { isAddingCash, setIsAddingCash } = useAddIncomeStore();

    const onSubmit = (formData: CashOnHand) => {
        console.log('formData', formData);
        setIsAddingCash(false);
        onSubmitted(formData);
        reset(); // Reset the form fields after submission
    };

    return (
        <Dialog
            open={isAddingCash}
            onClose={() => setIsAddingCash(false)}
            component="form" onSubmit={handleSubmit(onSubmit)}
        >
            <DialogTitle>Add Denomination</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Please indicate the denomination you would like to add, and the number of pieces.
                </DialogContentText>
                <Grid2 container spacing={2} sx={{ pt: '60px' }}>
                    <Grid2 size={{ mobile: 12, tablet: 6 }}>
                        <Controller
                            name="denomination"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    select
                                    required
                                    label="Denomination"
                                    variant="outlined"
                                    fullWidth
                                    error={!!errors.denomination}
                                    helperText={errors.denomination?.message}
                                    {...field}
                                >
                                    {Object.values(denominations).filter(denom => typeof denom === 'number' && denom !== denominations.NONE).map((denom) => (
                                        <MenuItem key={denom} value={denom}>
                                            {denom}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            )}
                        />
                    </Grid2>

                    <Grid2 size={{ mobile: 12, tablet: 6 }}>
                        <Controller
                            name="pieces"
                            control={control}
                            render={({ field: { onChange, ...restField } }) => (
                                <TextField
                                    label="Pieces"
                                    variant="outlined"
                                    fullWidth
                                    type="number"
                                    error={!!errors.pieces}
                                    helperText={errors.pieces?.message}
                                    {...restField}
                                    onChange={(e) => {
                                        // Parse the value to a number before updating the state
                                        onChange(Number(e.target.value));
                                    }}
                                />
                            )}
                        />

                    </Grid2>
                </Grid2>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setIsAddingCash(false)}>Cancel</Button>
                <Button type="submit">Add Cash</Button>
            </DialogActions>
        </Dialog>
    );
};
