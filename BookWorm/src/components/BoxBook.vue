<template>
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
          ENCELADUS
        </h5>
        <h5
          class="mb-2 text-sm font-bold leading-tight text-neutral-800 dark:text-neutral-50 flex"
        >
          5.0
          <i class="fa-solid fa-star ml-2"></i>
        </h5>
      </div>
      <p class="mb-1 text-[11] text-neutral-600 dark:text-neutral-200">
        Brandon Q. Morris
      </p>

      <p class="mb-4 text-[9] text-neutral-600 dark:text-neutral-200">
        นิยายผจญภัย
      </p>
      <div class="flex items-center justify-end">
        <a
          href="#"
          class="text-black bg-yellow font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >19 THB</a
        >
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
