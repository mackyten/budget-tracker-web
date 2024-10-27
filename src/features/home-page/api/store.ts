import { create } from "zustand";

interface IHomePageState {
    isCreating: boolean;
    setIsCreating: (isCreating: boolean) => void;
}

const useHomePageStore = create<IHomePageState>((
    set: (partial: Partial<IHomePageState> | ((state: IHomePageState) => Partial<IHomePageState>
    )) => void) => ({
        isCreating: false,
        setIsCreating: (isCreating: boolean) => set({ isCreating }),
    })
);

export default useHomePageStore;
