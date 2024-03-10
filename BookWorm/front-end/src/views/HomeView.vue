<script setup>
import BoxBook from "../components/BoxBook.vue";
</script>

<template>
  <div class="">
    <div class="bg-[#D9D9D9] w-full h-[517px] flex items-center justify-center">
      <label class="text-[100px]">Welcome to BookWorm</label>
    </div>
    <div class="w-full flex flex-col mt-10 px-20">
      <div class="flex flex-row">
        <label class="text-[28px] font-bold">Featured Categories</label>
        <div class="flex items-end justify-end flex-auto">
          <a href="" class="text-[16px] font-bold justify-end"
            >All Categories ></a
          >
        </div>
      </div>

      <div class="flex flex-row mt-5 justify-between">
        <div class="px-10 py-7 rounded-lg bg-[#FF94C2]">Romance Shop now</div>
        <div class="px-10 py-7 rounded-lg bg-[#DEBBF3]">LGBTQ+ Shop now</div>
        <div class="px-10 py-7 rounded-lg bg-[#A2D8F2]">Fantasy Shop now</div>
        <div class="px-10 py-7 rounded-lg bg-[#E6DDB2]">
          Documentary Shop now
        </div>
        <div class="px-10 py-7 rounded-lg bg-[#01304A] text-white">
          Mystery Shop now
        </div>
      </div>
    </div>

    <div class="w-full flex flex-col mt-10 px-20">
      <div class="flex flex-row">
        <label class="text-[28px] font-bold">Bestselling Books</label>
        <div class="flex items-end justify-end flex-auto">
          <a href="" class="text-[16px] font-bold justify-end">All Books ></a>
        </div>
      </div>

      <div class="flex flex-row mt-5 justify-between">
        <div v-for="i in 6" :key="i" class="">
          <BoxBook />
        </div>
      </div>
    </div>

    <div class="flex flex-wrap mt-10 items-center justify-center px-20">
      <div class="w-full">
        <label class="flex items-center justify-center text-[28px] font-bold">
          Featured Books</label
        >
        <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
          <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <a
              class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
              v-on:click="toggleTabs(1)"
              v-bind:class="{
                'text-steelblue bg-white': openTab !== 1,
                'text-white bg-steelblue': openTab === 1,
              }"
            >
              Featured
            </a>
          </li>
          <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <a
              class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
              v-on:click="toggleTabs(2)"
              v-bind:class="{
                'text-steelblue bg-white': openTab !== 2,
                'text-white bg-steelblue': openTab === 2,
              }"
            >
              Free
            </a>
          </li>
          <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <a
              class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
              v-on:click="toggleTabs(3)"
              v-bind:class="{
                'text-steelblue bg-white': openTab !== 3,
                'text-white bg-steelblue': openTab === 3,
              }"
            >
              Most Viewed
            </a>
          </li>
        </ul>
        <div
          class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
        >
          <div class="px-4 py-5 flex-auto">
            <div class="tab-content tab-space">
              <div
                v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }"
                class="flex flex-row justify-between"
              >
                <div v-for="i in 6" :key="i" class="">
                  <BoxBook />
                </div>
              </div>
              <div
                v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }"
                class="flex flex-row justify-between"
              >
                <div v-for="i in 6" :key="i" class="">
                  <BoxBook />
                </div>
              </div>
              <div
                v-bind:class="{ hidden: openTab !== 3, block: openTab === 3 }"
                class="flex flex-row justify-between"
              >
                <div v-for="i in 6" :key="i" class="">
                  <BoxBook />
                </div>
              </div>
            </div>
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
