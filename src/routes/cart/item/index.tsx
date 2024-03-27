"use client";

import { useCartStore } from "../../../stores/cart";

export interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

export interface ItemProps {
    data: CartItem;
}

export const Item = ({ data }: ItemProps) => {
    const handleItemRemove = (id: number) => {
        useCartStore.getState().removeItem(id);
    }
    return (
        <div className="tw-flex tw-flex-wrap tw-items-center tw-justify-around tw-gap-4 tw-border tw-rounded tw-p-8 tw-relative">
            <div className="tw-text-lg">{data.name}</div>
            <div>{data.quantity}</div>
            <div>${data.price}</div>
            <button className="tw-absolute tw-right-0 tw-top-0 tw-px-3 tw-py-2 tw-text-gray-500" onClick={() => handleItemRemove(data.id)}>
                X
            </button>
        </div>
    );
};
