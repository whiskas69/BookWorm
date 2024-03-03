// import { RouterLink, RouterView } from 'vue-router' // import HelloWorld from
'./components/HelloWorld.vue'

<script setup></script>

<template>
  <nav
    class="sticky top-0 z-20 flex item-center flex-col justify-between rounded-bl-navbar bg-navbar p-5"
  >
    <div class="flex flex-row w-full ">
      <div>
        <a href="#" class="mr-9">
          <img src="./assets/logo.png" alt="Logo BookWorm" />
        </a>
      </div>
      <div class="">
        <div class="">
          <input
            class="w-full rounded-full py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            type="text"
            v-model="search"
            placeholder="Search"
          />
        </div>
        <div class="column is-1">
          <!-- <button @click="getPhones" class="button is-warning">Search</button> -->
        </div>
      </div>
      <div>03</div>
      <!-- <a href="#" class="mr-9">
        <img src="./assets/logo.png" alt="Logo BookWorm" />
      </a> -->

      <!-- <div class="rounded-full"> -->
      <!-- <div> -->
      <!-- <div class="relative mt-2 rounded-full"> -->
      <!-- <div class="relative mt-2 rounded-full"> -->

      <!-- class="w-full rounded-full py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" -->
      <!-- <input
            type="text"
            name="search"
            id="search"
            class="w-full"
            placeholder="search"
          />
        </div>
      </div> -->
    </div>

    <div class="flex flex-row">
      <div>01</div>
      <div>02</div>
      <div>03</div>
      <!-- <a href="#">
        <img src="./assets/logo.png" alt="Logo BookWorm" />
      </a> -->
    </div>
  </nav>
  <!-- <header>
    <a href="#">
      <img src="./assets/logo.png" alt="Logo BookWorm">
    </a>
  </header> -->
</template>
