<template>
	<!-- header -->
  <header>
    <div class="tw-px-10 tw-py-6 tw-bg-black tw-text-white tw-flex tw-justify-end tw-gap-4">
      <router-link :to="{ name: 'products'}">商品列表</router-link>
      <router-link :to="{ name: 'cart'}" class="tw-relative">
        購物車
        <div class="tw-absolute tw-top-[-4px] tw-right-[-10px] tw-text-xs tw-w-4 tw-h-4 tw-rounded-full tw-bg-red-500 tw-flex tw-items-center tw-justify-center">
          <span>3</span>
        </div>
      </router-link>
    </div>
	</header>
</template>