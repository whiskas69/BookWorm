<template>
  <div class="w-full flex flex-col mt-10 px-20">
    <div class="flex flex-row">
      <label class="text-[28px] font-bold">Categories</label>
    </div>

    <div class="flex flex-row mt-5 justify-center gap-5">
      <div class="px-10 py-7 rounded-lg bg-[#FF94C2]"><router-link
                  class="text-[16px] font-bold justify-end"
                  to="/romance"
                >
          Romance Shop now
          </router-link></div>
      <div class="px-10 py-7 rounded-lg bg-[#DEBBF3]"><router-link
                  class="text-[16px] font-bold justify-end"
                  to="/lgbtq"
                >
          LGBTQ+ Shop now
          </router-link></div>
      <div class="px-10 py-7 rounded-lg bg-[#A2D8F2]"><router-link
                  class="text-[16px] font-bold justify-end"
                  to="/fantasy"
                >
          Fantasy Shop now
          </router-link></div>
      <div class="px-10 py-7 rounded-lg bg-[#E6DDB2]"><router-link
                  class="text-[16px] font-bold justify-end"
                  to="/doc"
                >
          Documentary Shop now
          </router-link></div>
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
</template>

<script setup></script>

<style lang="scss" scoped></style>
