<template>
  <div class="p-20">
    <label class="text-[24px] font-bold"> My Shelf ({{ number }})</label>
    <hr class="mt-5 mb-5" />
    <div>
      
      <div class="flex flex-row mt-5 justify-start">
        <div v-for="(book, index) in books" :key="book.id" class="">
          <!-- <BoxBook /> -->
          <div v-if="book.userId === this.userid"
            class="block rounded-lg bg-white w-[200px] mt-[306] mr-2 shadow-md max-w-sm dark:bg-gray-800 dark:border-gray-700"
          >
            <div
              class="relative overflow-hidden bg-cover bg-no-repeat"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <img
                class="rounded-t-lg sm:m-h-64 md:h-64 w-full bg-cover"
                :src="book.img"
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
      books: [],
      userid: "",
      number: 0
    };
  },
  mounted() {
    this.getBook();
  },
  methods: {
    getBook() {
      console.log("getbooks!");
      
      let userId = localStorage.getItem('userId');
      
      this.userid = userId

      axios
        .get("http://54.159.109.208:3000/shelf", {
          params: {
            search: this.search,
          },
        })
        .then((response) => {
        this.books = response.data.data;
        console.log("book", response.data.data);
        if(this.books.length !== 0){
          let count = 0;
          for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].userId === this.userid){
              count++;
            }
          }
          this.number = count;
          console.log("number", this.number);
        }
      })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>
