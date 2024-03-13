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
          <router-link
                  class="text-[16px] font-bold justify-end"
                  to="/catrgory"
                >
                  All Categories >
                </router-link>
        </div>
      </div>

      <div class="flex flex-row mt-5 justify-between">
        <div class="px-10 py-7 rounded-lg bg-[#FF94C2]">
          <router-link
                  class="text-[16px] font-bold justify-end"
                  to="/romance"
                >
          Romance Shop now
          </router-link>
          </div>
          
        <div class="px-10 py-7 rounded-lg bg-[#DEBBF3]">
          <router-link
                  class="text-[16px] font-bold justify-end"
                  to="/lgbtq"
                >
          LGBTQ+ Shop now
          </router-link>
          </div>
        <div class="px-10 py-7 rounded-lg bg-[#A2D8F2]">
          <router-link
                  class="text-[16px] font-bold justify-end"
                  to="/fantasy"
                >
          Fantasy Shop now
          </router-link>
          </div>
        <div class="px-10 py-7 rounded-lg bg-[#E6DDB2]">
          <router-link
                  class="text-[16px] font-bold justify-end"
                  to="/doc"
                >
          Documentary Shop now
          </router-link>
          
        </div>
        <div class="px-10 py-7 rounded-lg bg-[#01304A] text-white">
          <router-link
                  class="text-[16px] font-bold justify-end"
                  to="/mys"
                >
          Mystery Shop now
          </router-link>
          
        </div>
      </div>
    </div>

    <div class="w-full flex flex-col mt-10 px-20">
      <div class="flex flex-row">
        <label class="text-[28px] font-bold">Books</label>
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
                :src="book.bookimg"
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
                  Detail
                </router-link>
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
        .get("http://54.159.109.208:3000/book", {
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
