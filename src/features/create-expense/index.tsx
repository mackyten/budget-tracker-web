import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Typography, Button, Container, Collapse, ListItem, IconButton, ListItemText } from '@mui/material';
import { AccountBalance, AccountBalanceWallet, RemoveCircleOutline } from '@mui/icons-material';
import { useAddIncomeStore } from './api/store';
import { IncomeDataSchema } from './api/schema';
import { IncomeData } from './api/types';
import { BankItem } from './components/bank-items';
import { SectionHead } from './components/section-head';
import { CashItems } from './components/cash-items';
import { DeductionItem } from './components/deduction-item';
import { TransitionGroup } from 'react-transition-group';
import { useForm } from 'react-hook-form';
import LoadingButton from '@mui/lab/LoadingButton';
import { usePostIncome } from './api/hooks';



const CreateIncomeForm: React.FC = () => {
    const { data, setIsAddingCash } = useAddIncomeStore();
    const { mutate, status } = usePostIncome();

    const {
        control,
        handleSubmit,
        formState: { errors },
        watch,
        setValue,
    } = useForm<IncomeData>({
        resolver: zodResolver(IncomeDataSchema),
        defaultValues: data,
    });

    const banks = watch('banks');
    const deductions = watch('deductions');
    const cash = watch('cash');


    const onSubmit = (formData: IncomeData) => {

        mutate(formData);
    };

    const addBank = () => {
        setValue('banks', [...banks, { name: '', balance: 0 }]);
    };

    const removeBank = (index: number) => {
        setValue('banks', banks.filter((_, i) => i !== index));
    };

    const addDeduction = () => {
        setValue('deductions', [...deductions, { description: '', amount: 0 }]);
    };

    const removeDeduction = (index: number) => {
        setValue('deductions', deductions.filter((_, i) => i !== index));
    };

    return (
        <>
            <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                sx={{
                    overflowY: 'auto',
                    overflowX: 'hidden',
                    maxHeight: '100%',
                    padding: '30px',
                }}
            >
                <Typography variant="h6">Add Income</Typography>

                <SectionHead label="Bank Accounts" icon={<AccountBalance />} onClick={addBank} />
                <TransitionGroup>
                    {banks.map((bank, i) => (
                        <Collapse key={i}>{
                            <ListItem
                                secondaryAction={
                                    <IconButton
                                        edge="end"
                                        aria-label="delete"
                                        title="Delete"
                                        onClick={() => removeBank(i)}
                                    >
                                        <RemoveCircleOutline />
                                    </IconButton>
                                }
                            >
                                <ListItemText primary={<BankItem index={i} control={control} errors={errors} remove={removeBank} />} />
                            </ListItem>
                        }</Collapse>
                    ))}
                </TransitionGroup>

                <SectionHead
                    label="Cash Count"
                    icon={<AccountBalanceWallet />}
                    onClick={() => setIsAddingCash(true)}
                />
                <Container>
                    {
                        cash.map((denom, i) => {
                            return (
                                <Box key={i} sx={{ mb: '20px', }}>
                                    <CashItems i={i} denom={denom} control={control} error={errors} />
                                </Box>
                            );
                        })
                    }
                </Container>



                <SectionHead label="Deductions and Expenses" icon={<AccountBalance />} onClick={addDeduction} />

                <TransitionGroup>
                    {deductions.map((deduction, i) => (
                        <Collapse key={i}>{
                            <ListItem
                                secondaryAction={
                                    <IconButton
                                        edge="end"
                                        aria-label="delete"
                                        title="Delete"
                                        onClick={() => removeDeduction(i)}
                                    >
                                        <RemoveCircleOutline />
                                    </IconButton>
                                }
                            >
                                <ListItemText primary={<DeductionItem index={i} control={control} errors={errors} removeDeduction={removeDeduction} />} />
                            </ListItem>
                        }</Collapse>
                    ))}
                </TransitionGroup>


                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', mb: '30px' }}>
                    <LoadingButton
                        loading={status === "pending"}
                        type="submit"
                        variant="contained"
                        color="secondary"
                        sx={{ mt: 3, borderRadius: '50px' }}>
                        Submit
                    </LoadingButton>
                </Box>
            </Box>
        </>
    );
};

export default CreateIncomeForm;