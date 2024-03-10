<template>
  <div class="flex flex-col font-Comfortaa bg-white">
    <TopNavigation />
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import TopNavigation from "./components/TopNavigation.vue";
</script>

<style lang="scss" scoped></style>
