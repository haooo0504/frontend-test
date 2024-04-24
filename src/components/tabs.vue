<script setup>
import { defineEmits } from "vue";

const emits = defineEmits(["change"]);

const changeRoom = (newRoom) => {
  emits("change", newRoom);
};
</script>

<template>
  <div class="tw-flex tw-flex-wrap tw-gap-4">
    <div
      class="tw-py-4 tw-px-6 tw-bg-violet-500 tw-text-white tw-rounded-md"
      role="button"
      @click="changeRoom(1)"
    >
      單人房
    </div>
    <div
      class="tw-py-4 tw-px-6 tw-border-solid tw-border-2 tw-border-violet-500 tw-text-violet-500 tw-rounded-md"
      role="button"
      @click="() => emit('change', 2)"
    >
      雙人房
    </div>
    <div
      class="tw-py-4 tw-px-6 tw-border-solid tw-border-2 tw-border-violet-500 tw-text-violet-500 tw-rounded-md"
      role="button"
      @click="() => emit('change', 3)"
    >
      四人房
    </div>
    <div
      class="tw-py-4 tw-px-6 tw-border-solid tw-border-2 tw-border-violet-500 tw-text-violet-500 tw-rounded-md"
      role="button"
      @click="() => emit('change', 4)"
    >
      海景房
    </div>
    <div
      class="tw-py-4 tw-px-6 tw-border-solid tw-border-2 tw-border-violet-500 tw-text-violet-500 tw-rounded-md"
      role="button"
      @click="() => emit('change', 5)"
    >
      山景房
    </div>
    <div
      class="tw-py-4 tw-px-6 tw-border-solid tw-border-2 tw-border-violet-500 tw-text-violet-500 tw-rounded-md"
      @click="() => emit('change', 6)"
      role="button"
    >
      市景房
    </div>
  </div>
</template>
