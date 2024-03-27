import { Item } from "./item";
import { Tab } from "./tab";

export default function Product() {
  return (
    <>
      <div className="tw-p-4">
        <Tab />
      </div>
      <section className="tw-p-4">
        <div>
          <Item />
          <Item />
          <Item />
        </div>
      </section>
    </>
  );
}
