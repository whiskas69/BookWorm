<template>
  <div class="bg-[#D9D9D9]">
    <header
      class="sticky top-0 bg-cranberry shadow-lg rounded-bl-full font-Comfortaa z-20"
    >
      <nav class="flex flex-col items-center gap-4 pl-5 text-knitsweater py-2">
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
                class="block bg-search w-full p-3 ps-10 text-sm text-camelcoat rounded-full"
                placeholder="Search"
                required
              />
              <button
                type="submit"
                class="text-white absolute end-2.5 bottom-2 bg-steelblue hover:bg-spiritmountain focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </div>

          <!-- button -->
          <div class="navbar-item has-dropdown is-hoverable" v-if="loggedInUser">
              <a class="navbar-link">
                <figure class="image is-24x24 my-auto">
                  <img
                    class="is-rounded"
                    src="https://bulma.io/images/placeholders/128x128.png"
                  />
                </figure>
                <!-- <span class="pl-3"
                >{{ user.first_name }} {{ user.last_name }}</span
              > -->
                <span class="pl-3"
                  >{{ user.username }}</span
                >
              </a>
              <div class="navbar-dropdown">
                <router-link to="/profile">
                  <a class="navbar-item">Profile</a>
                </router-link>
                <!--  <a class="navbar-item" @click="logout">Log out</a>-->
                <a class="navbar-item" @click="logout">Log out</a>
              </div>
            </div>
          
          <div class="flex flex-row items-center" v-if="!loggedInUser">
            <button
              type="button"
              class="text-knitsweater bg-midnight font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
              <router-link to="/login"> SignIn </router-link>
            </button>
            <label class="text-knitsweater font-medium text-lg px-2 pr-4"
              >or</label
            >
            <button
              type="button"
              class="text-knitsweater bg-midnight font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
              <router-link to="/register"> SignUp </router-link>
            </button>
          </div>
        </div>

        <!-- navbottom -->
        <div class="container flex flex-row w-full gap-4">
          <!-- Categories -->
          <div class="flex flex-row items-center">
            <RouterLink :to="{ name: 'catrgory' }">
              <label class="text-knitsweater font-medium text-lg px-10 pr-10"
                >Categories</label
              >
            </RouterLink>
            <RouterLink :to="{ name: 'shelf' }">
              <label class="text-knitsweater font-medium text-lg px-10 pr-10"
                >My Shelf</label
              >
            </RouterLink>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('user', ['loggedInUser', 'loggedInUserId']),
  },
  logout() {
    window.location.reload();
      // this.$router.push({ name: 'HomePage' });
    },
};
</script>

<script setup>
import { RouterView } from "vue-router";
</script>

<style lang="scss" scoped></style>
