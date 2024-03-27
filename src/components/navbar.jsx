export const Navbar = () => {
  return (
    <header>
      <div className="tw-px-10 tw-py-6 tw-bg-black tw-text-white tw-flex tw-justify-end tw-gap-4">
        <a href="/">商品列表</a>
        <a href="/cart" className="tw-relative">
          購物車
          <div className="tw-absolute tw-top-[-4px] tw-right-[-10px] tw-text-xs tw-w-4 tw-h-4 tw-rounded-full tw-bg-red-500 tw-flex tw-items-center tw-justify-center">
            <span>3</span>
          </div>
        </a>
      </div>
    </header>
  );
}; //
