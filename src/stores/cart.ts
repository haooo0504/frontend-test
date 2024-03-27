import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'
import JsonData from "../../context/product.json";

export interface CartItem {
    id: number;
    quantity: number;
}

interface CartState {
    items: CartItem[];
}

interface Overview {
    id: number;
    price: number;
    qty: number;
}

interface CartActions {
    addItem: (item: CartItem) => void;
    removeItem: (id: number) => void;
    count(): number;
    total(): number;
    overview(): Overview[];
}

const products = JsonData.products;

export const useCartStore = create(
    persist<CartState & CartActions>(
        (set, get) => ({
            items: [],
            addItem: (item) => set((state) => {
                const existingItem = state.items.find((i) => i.id === item.id);
                if (existingItem) {
                    existingItem.quantity += item.quantity;
                    return { items: state.items };
                }
                return { items: [...state.items, item] };
            }),
            removeItem: (id) =>
                set((state) => ({
                    items: state.items.filter((i) => i.id !== id),
                })),
            count: () => {
                return get().items.reduce(
                    (acc, item) => acc + item.quantity,
                    0
                );
            },
            total: () => {
                return get().items.reduce(
                    (acc, item) => {
                        const product = products.find((p) => p.id === item.id);
                        return acc + (product ? product.price * item.quantity : 0);
                    }
                    , 0
                );
            },
            overview: () => {
                return get().items.map((item) => {
                    const product = products.find((p) => p.id === item.id);
                    return {
                        id: item.id,
                        price: product ? product.price : 0,
                        qty: item.quantity,
                    };
                });
            }
        })
        , {
            name: 'cart-storage',
            storage: createJSONStorage(() => sessionStorage)
        }
    )
);
