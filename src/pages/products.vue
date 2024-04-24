<script setup>
import { onMounted } from "vue";
import ProductItem from "../components/products/product-item.vue";
import Tabs from "../components/tabs.vue";
import { useMainStore } from "../store/index";

const store = useMainStore();
console.log(store.productList);
const productList = store.productList;

const changeRoom = (changeRoomType) => {
  console.log(changeRoomType);
};
</script>
<template>
  <section class="tw-p-8">
    <!-- title -->
    <h1 class="tw-text-2xl tw-font-bold">商品列表</h1>
    <!-- tabs -->
    <Tabs class="tw-py-4" @change="changeRoom" />
    <!-- products grid -->
    <div class="tw-mt-4 tw-grid tw-grid-cols-5 tw-gap-4">
      <div v-for="item in productList.products" :key="item.id">
        <ProductItem :name="item.name" :price="item.price" />
      </div>
    </div>
  </section>
</template>
