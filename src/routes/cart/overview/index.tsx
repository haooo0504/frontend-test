"use client";

import { useCartStore } from "../../../stores/cart";

export const Overview = () => {
    const overview = useCartStore().overview();
    const handleShowOverview = () => {
        console.log({
            params: overview,
        });
    }
    return (
        <>
            <div>共{useCartStore().count()}項</div>
            <div>訂單金額: ${useCartStore().total()}</div>
            <button
                className="tw-text-blue-500 tw-border tw-border-blue-500 tw-rounded tw-px-2 tw-py-1"
                onClick={handleShowOverview}
            >
                成立訂單
            </button>
        </>
    );
};
