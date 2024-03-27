import { useCartStore } from "../../../stores/cart";

interface ProductItem {
    id: number;
    name: string;
    price: number;
}

interface ItemProps {
    data: ProductItem;
}

export const Item = ({ data }: ItemProps) => {
    const handleItemAdd = (id: number) => {
        useCartStore.getState().addItem({
            id: id,
            quantity: 1,
        });
    }
    return (
        <div className="tw-shadow-xl tw-rounded-md tw-overflow-hidden tw-p-3">
            <img src="https://picsum.photos/id/557/500/500" />
            <div>
                <div className="tw-flex tw-justify-between tw-p-5">
                    <span>{data.name}</span>
                    <span className="tw-text-gray-500">NT {data.price}</span>
                </div>
                <div className="tw-flex tw-w-full tw-justify-center">
                    <button
                        className="tw-w-[80%] tw-py-2 tw-px-6 tw-border-solid tw-border-2 tw-border-violet-500 tw-text-violet-500 tw-rounded-md"
                        onClick={() => handleItemAdd(data.id)}
                    >
                        加入購物車
                    </button>
                </div>
            </div>
        </div>
    );
};
