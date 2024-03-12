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
        <div v-for="(book, index) in books" :key="book.id" class="">
          <!-- <BoxBook /> -->
          <div
            class="block rounded-lg bg-white w-[200px] mt-[306] shadow-md max-w-sm dark:bg-gray-800 dark:border-gray-700"
          >
            <div
              class="relative overflow-hidden bg-cover bg-no-repeat"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <img
                class="rounded-t-lg sm:m-h-64 md:h-64 w-full bg-cover"
                src="@/assets/book.jpg"
                alt=""
              />
            </div>

            <div class="p-2">
              <div class="flex justify-between">
                <h5
                  class="mb-2 text-[16px] font-semibold leading-tight text-neutral-800 dark:text-neutral-50"
                >
                  {{ book.bookname }}
                </h5>
                <h5
                  class="mb-2 text-sm font-bold leading-tight text-neutral-800 dark:text-neutral-50 flex"
                >
                  5.0
                  <i class="fa-solid fa-star ml-2"></i>
                </h5>
              </div>
              <p class="mb-1 text-[11] text-neutral-600 dark:text-neutral-200">
                {{ book.writer }}
              </p>

              <p class="mb-4 text-[9] text-neutral-600 dark:text-neutral-200">
                {{ book.cate }}
              </p>
              <div class="flex items-center justify-end">
                <router-link
                  class="text-black bg-yellow font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  :to="`/book/detail/${book.id}`"
                >
                  19 THB
                </router-link>
              </div>
            </div>
          </div>
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
import axios from "axios";

export default {
  // name: "pink-tabs",
  data() {
    return {
      openTab: 1,
      books: [],
      search: "",
    };
  },
  mounted() {
    this.getBook();
  },
  methods: {
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber;
    },
    getBook() {
      console.log("getbooks!");

      axios
        .get("http://52.86.167.253:3000/book", {
          params: {
            search: this.search,
          },
        })
        .then((response) => {
          this.books = response.data.data;
          console.log("book", response.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
