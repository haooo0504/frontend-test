import { Item } from "./item";
import { Tab } from "./tab";

export default function Product() {
  return (
    <>
      <div class="tw-p-4">
        <Tab />
      </div>
      <section class="tw-p-4">
        <div>
          <Item />
          <Item />
          <Item />
        </div>
      </section>
    </>
  );
}
