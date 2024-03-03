<template>
  <header class="sticky top-0 bg-cranberry shadow-lg rounded-bl-full">
    <nav
      class="flex flex-col items-center gap-4 pl-5 text-knitsweater py-6"
    >
      <!-- nav top -->
      <div class="flex flex-row w-full gap-4">
        <!-- logo -->
        <RouterLink :to="{ name: 'home' }">
          <div class="flex items-center gap-3 flex-1">
            <img src="@/assets/logo.png" alt="logo" />
          </div>
        </RouterLink>

        <!-- search -->
        <div class="flex gap-3 w-full">
          <div class="relative w-full">
            <div
              class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
            >
              <i class="fa-solid fa-magnifying-glass text-camelcoat"></i>
            </div>
            <input
              type="search"
              id="default-search"
              class="block bg-search w-full p-3 ps-10 text-sm text-camelcoat rounded-full f"
              placeholder="Search"
              required
            />
            <button
              type="submit"
              class="text-white absolute end-2.5 bottom-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </div>

        <!-- button -->
        <div class="flex flex-row items-center">
          <button
            type="button"
            class="text-knitsweater bg-midnight font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >
            SignIn
          </button>
          <label class="text-knitsweater font-medium text-lg px-2 pr-4"
            >or</label
          >
          <button
            type="button"
            class="text-knitsweater bg-midnight font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >
            SignUp
          </button>
        </div>
      </div>

      <!-- navbottom -->
      <div class="flex flex-row w-full gap-4">
        <!-- logo -->
        <RouterLink :to="{ name: 'home' }">
          <div class="flex items-center gap-3 flex-1">
            <img src="@/assets/logo.png" alt="logo" />
          </div>
        </RouterLink>

        <!-- search -->
        <div class="flex gap-3 w-full">
          <div class="relative w-full">
            <div
              class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
            >
              <i class="fa-solid fa-magnifying-glass text-camelcoat"></i>
            </div>
            <input
              type="search"
              id="default-search"
              class="block bg-search w-full p-3 ps-10 text-sm text-camelcoat rounded-full f"
              placeholder="Search"
              required
            />
            <button
              type="submit"
              class="text-white absolute end-2.5 bottom-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </div>

        <!-- button -->
        <div class="flex flex-row items-center">
          <button
            type="button"
            class="text-knitsweater bg-midnight font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >
            SignIn
          </button>
          <label class="text-knitsweater font-medium text-lg px-2 pr-4"
            >or</label
          >
          <button
            type="button"
            class="text-knitsweater bg-midnight font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >
            SignUp
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { RouterView } from "vue-router";
</script>

<style lang="scss" scoped></style>
