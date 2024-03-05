<template>
  <div class="px-20 py-20">
    <div class="grid grid-cols-2 gap-4">
      <div class="grid w-full h-full place-items-center">
        <img
          alt="ecommerce"
          class="grid w-[350px] h-[502] bg-cover rounded-3xl"
          src="@/assets/book.jpg"
        />
      </div>
      <div class="mt-10">
        <h1 class="text-gray-900 text-[36px] title-font font-bold mb-1">
          ENCELADUS
        </h1>
        <div class="flex mb-4">
          <span class="flex items-center">
            <i class="fa-solid fa-star text-yellow"></i>
            <i class="fa-solid fa-star text-yellow"></i>
            <i class="fa-solid fa-star text-yellow"></i>
            <i class="fa-solid fa-star text-yellow"></i>
            <i class="fa-regular fa-star text-yellow"></i>
            <span class="text-gray-600 ml-3">4 Reviews</span>
          </span>
        </div>
        <div class="flex flex-row">
          <p class="text-[20px] font-medium mr-2">BY</p>
          <p class="text-[20px] font-normal text-navy">Brandon Q. Morris</p>
        </div>
        <div class="flex flex-row mt-1">
          <p class="text-[20px] font-medium mr-2">Publisher</p>
          <p class="text-[20px] font-normal text-navy">Brandon Q. Morris</p>
        </div>
        <div class="flex flex-row mt-1">
          <p class="text-[20px] font-medium mr-2">Category</p>
          <p class="text-[20px] font-normal text-navy">Fantasy</p>
        </div>

        <div class="flex">
          <button
            class="flex mt-5 bg-steelblue border-0 py-3 px-6 focus:outline-none hover:bg-spiritmountain rounded-full"
          >
            50 TBH
          </button>
          <button
            class="rounded-full mt-6 w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"
          >
            <i class="fa-solid fa-heart"></i>
          </button>
        </div>

        <div class="flex flex-row mt-5 w-[360px]">
          <p class="text-[20px] font-normal mr-2 text-gray-400">File Type</p>
          <p class="text-[20px] font-normal text-black text-right ml-20">PDF</p>
        </div>
        <div class="flex flex-row mt-1 w-[360px]">
          <p class="text-[20px] font-normal mr-2 text-gray-400">
            Published Date
          </p>
          <p class="text-[20px] font-normal ml-6 text-black">20 DEC 2025</p>
        </div>
        <div class="flex flex-row mt-1 w-[360px]">
          <p class="text-[20px] font-normal mr-2 text-gray-400">Length</p>
          <p class="text-[20px] font-normal ml-24 text-black">580 page</p>
        </div>
        <div class="flex flex-row mt-1 w-[360px]">
          <p class="text-[20px] font-normal mr-2 text-gray-400">Cover Prince</p>
          <p class="text-[20px] font-normal ml-12 text-black">300 THB</p>
        </div>
      </div>
    </div>
    <hr class="mt-10">
  </div>
</template>

<script>
export default {};
</script>

<style></style>
