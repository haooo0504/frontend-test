import { defineStore } from "pinia";
import product from "../../product.json";

export const useMainStore = defineStore("main", {
  state: () => {
    return {
      count: 0,
      productList: product,
    };
  },
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
  getters: {
    doubleCount: (state) => state.count * 2,
  },
});
