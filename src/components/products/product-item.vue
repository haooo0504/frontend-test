<script setup>
import { defineProps } from "vue";

const props = defineProps({
  name: String,
  price: Number,
  type: Array,
});
</script>

<template>
  <div class="tw-shadow-xl tw-rounded-md tw-overflow-hidden">
    <img src="https://picsum.photos/500/500" />
    <div class="tw-p-2">
      <div class="tw-flex tw-justify-between">
        <span>{{ name }}</span>
        <span>NT {{ price }}</span>
      </div>
      <button
        class="tw-w-full tw-mt-3 tw-py-2 tw-px-6 tw-border-solid tw-border-2 tw-border-violet-500 tw-text-violet-500 tw-rounded-md"
      >
        加入購物車
      </button>
    </div>
  </div>
</template>
