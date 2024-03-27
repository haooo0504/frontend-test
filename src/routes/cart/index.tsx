import { Item } from "./item";
import { Overview } from "./overview";

export default function Cart() {
    return (
        <>
            <div className="tw-p-8">
                <h1 className="tw-text-2xl tw-font-bold">購物車</h1>
                <div className="tw-mt-4 tw-space-y-4">
                    <Item />
                    <Item />
                </div>
                <div className="tw-flex tw-flex-wrap tw-items-center tw-gap-4 tw-justify-end tw-mt-8 tw-px-8">
                    <Overview />
                </div>
            </div>
        </>
    );
}
