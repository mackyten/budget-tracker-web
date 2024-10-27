import { create } from "zustand";


interface IDrawerState {
    drawerOpen: boolean;
    toggleDrawer: () => void;
}

const useDrawerStore = create<IDrawerState>((
    set: (partial: Partial<IDrawerState> | ((state: IDrawerState) => Partial<IDrawerState>
    )) => void) => ({
        drawerOpen: false,
        toggleDrawer: () => set((state) => ({ drawerOpen: !state.drawerOpen })),
    }));

export default useDrawerStore;