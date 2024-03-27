export const Tab = () => {
  const selectedClass =
    "tw-py-4 tw-px-6 tw-bg-violet-500 tw-text-white tw-rounded-md";
  const unselectedClass =
    "tw-py-4 tw-px-6 tw-border-solid tw-border-2 tw-border-violet-500 tw-text-violet-500 tw-rounded-md";

  return (
    <div className="tw-p-4">
      <div className="tw-flex tw-flex-wrap tw-gap-4">
        <div className={selectedClass} role="button">
          單人房
        </div>
        <div className={unselectedClass} role="button">
          雙人房
        </div>
      </div>
    </div>
  );
};
