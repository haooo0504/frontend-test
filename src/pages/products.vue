<script setup>
import ProductItem from '../components/products/product-item.vue'
import Tabs from '../components/tabs.vue'
</script>
<template>
  <section class="tw-p-8">
    <!-- title -->
		<h1 class="tw-text-2xl tw-font-bold">商品列表</h1>
    <!-- tabs -->
    <Tabs class="tw-py-4"/>
    <!-- products -->
    <div class="tw-mt-4 ">
     <ProductItem />
    </div>
  </section>
</template>