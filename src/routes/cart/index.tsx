import { useCartStore } from "../../stores/cart";
import { Item } from "./item";
import { Overview } from "./overview";
import JsonData from "../../../context/product.json";
import { memo } from "react";

export default function Cart() {
    const products = JsonData.products;
    const cartItems = useCartStore((state) => state.items);

    const CartItems = memo(() => {
        return cartItems.map((item) => {
            const product = products.find((p) => p.id === item.id);
            if (!product) return null;
            const itemData = {
                id: item.id,
                quantity: item.quantity,
                price: product.price,
                name: product.name,
            };
            return <Item key={item.id} data={itemData} />;
        }).filter(Boolean);
    });

    return (
        <>
            <div className="tw-p-8">
                <h1 className="tw-text-2xl tw-font-bold">購物車</h1>
                <div className="tw-mt-4 tw-space-y-4">
                    <CartItems />
                </div>
                <div className="tw-flex tw-flex-wrap tw-items-center tw-gap-4 tw-justify-end tw-mt-8 tw-px-8">
                    <Overview />
                </div>
            </div>
        </>
    );
}
