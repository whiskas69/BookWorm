<script setup>
import BoxBook from "../components/BoxBook.vue";
</script>

<template>
  <div>
    <div class="flex flex-wrap mt-20 items-center justify-center px-20">
      <div class="w-full">
        <label class="flex items-center justify-center text-[36px] font-bold">
          Fantasy</label
        >
        <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">

          <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <a
              class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
              v-on:click="toggleTabs(2)"
              v-bind:class="{
                'text-steelblue bg-white': openTab !== 2,
                'text-white bg-steelblue': openTab === 2,
              }"
            >
              New
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
              Free
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
