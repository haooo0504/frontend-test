<script setup>
import CartItem from '../components/cart/cart-item.vue'
</script>
<template>
  <section class="tw-p-8">
    <!-- title -->
    <h1 class="tw-text-2xl tw-font-bold">購物車</h1>
    <!-- cart list -->
    <div class="tw-mt-4">
      <CartItem />
    </div>
    <!-- total -->
    <div class="tw-flex tw-flex-wrap tw-items-center tw-gap-4 tw-justify-end tw-mt-8 tw-px-8">
      <div>
        共3項
      </div>
      <div>
        訂單金額: $2000
      </div>
      <button class="tw-text-blue-500 tw-border tw-border-blue-500 tw-rounded tw-px-2 tw-py-1">成立訂單</button>
    </div>
  </section>
</template>