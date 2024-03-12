<script setup>
import BoxBook from "../components/BoxBook.vue";
</script>

<template>
  <div>
    <div class="flex flex-wrap mt-20 items-center justify-center px-20">
      <div class="w-full">
        <label class="flex items-center justify-center text-[36px] font-bold">
          Best Selling</label
        >
        <h2 class="text-[24px] font-bold mb-2">Top Paid</h2>
        <hr />
        <div class="flex flex-row mt-5 justify-between">
          <div v-for="i in 6" :key="i" class="">
            <BoxBook />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // name: "pink-tabs",
  data() {
    return {
      openTab: 1,
    };
  },
  methods: {
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber;
    },
  },
};
</script>
