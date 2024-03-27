"use client";

import { Item } from "./item";
import { Tab } from "./tab";
import JsonData from "../../../context/product.json";
import { useTabFilterStore } from "../../stores/tab-filter";

export default function Product() {
    const products = JsonData.products;
    const selectedTab = useTabFilterStore((state) => state.selectedTab);
    return (
        <>
            <div className="tw-p-4">
                <Tab />
            </div>
            <section className="tw-p-4">
                <div className="tw-grid tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-5 tw-gap-4">
                    {
                        products.filter((product) => !selectedTab || product.type.includes(selectedTab))
                            .map((product) => (
                                <Item key={product.id} data={product} />
                            ))}
                </div>
            </section>
        </>
    );
}
