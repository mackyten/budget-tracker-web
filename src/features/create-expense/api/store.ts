import { create } from 'zustand';
import { cashOnHandInit, IncomeData } from './types';

interface ICreteIncomeStore {
    data: IncomeData;
    setIncomeData: (data: IncomeData) => void;
    isAddingCash: boolean;
    setIsAddingCash: (isAddingCash: boolean) => void;
}

export const useAddIncomeStore = create<ICreteIncomeStore>((set) => ({
    data: {
        date: new Date(),
        banks: [],
        cash: cashOnHandInit,
        deductions: []
    },
    isAddingCash: false,
    setIncomeData: (data) => set({ data }),
    setIsAddingCash: (isAddingCash) => set({ isAddingCash })
}));