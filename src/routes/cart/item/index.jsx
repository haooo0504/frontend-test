export const Item = () => {
  return (
    <div className="tw-flex tw-flex-wrap tw-items-center tw-justify-around tw-gap-4 tw-border tw-rounded tw-p-8 tw-relative">
      <div className="tw-text-lg">商品1</div>
      <div>1</div>
      <div>$500</div>
      <button className="tw-absolute tw-right-0 tw-top-0 tw-px-3 tw-py-2 tw-text-gray-500">
        X
      </button>
    </div>
  );
};
