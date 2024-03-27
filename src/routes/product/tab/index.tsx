"use client";

import { memo } from "react";
import { useTabFilterStore } from "../../../stores/tab-filter";

export const tabs = new Map([
    [1, "單人房"],
    [2, "雙人房"],
    [3, "四人房"],
    [4, "海景房"],
    [5, "山景房"],
    [6, "市景房"],
]);

export const Tab = () => {
    const selectedTab = useTabFilterStore((state) => state.selectedTab);

    const selectedClass =
        "tw-py-4 tw-px-6 tw-bg-violet-500 tw-text-white tw-rounded-md";
    const unselectedClass =
        "tw-py-4 tw-px-6 tw-border-solid tw-border-2 tw-border-violet-500 tw-text-violet-500 tw-rounded-md";

    const handleTabSelect = (key: number) => {
        useTabFilterStore.getState().selectTab(key);
    }

    const Tabs = memo(() => Array.from(tabs).map(([key, value]) => {
        const isSelected = selectedTab === key;
        return (
            <div
                key={key}
                className={isSelected ? selectedClass : unselectedClass}
                role="button"
                onClick={() => handleTabSelect(key)}
            >
                {value}
            </div>
        );
    }));

    return (
        <div className="tw-p-4">
            <div className="tw-flex tw-flex-wrap tw-gap-4">
                <Tabs />
            </div>
        </div>
    );
};
