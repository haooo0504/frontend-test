
import { create } from "zustand";

export interface TabFilterState {
    selectedTab?: number;
}

interface TabFilterActions {
    selectTab: (tab: number) => void;
}

export const useTabFilterStore = create<TabFilterState & TabFilterActions>(
    (set) => ({
        selectedTab: undefined,
        selectTab: (tab) => set((state) => {
            if (state.selectedTab === tab) {
                return { selectedTab: undefined };
            }
            return { selectedTab: tab };
        }),
    })
);
