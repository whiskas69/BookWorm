<template>
  <div class="editProfile p-20 grid gap-y-5">
    <div class="PersonalInformation">
      <p class="title text-2xl">Personal Information</p>
    </div>

    <div
      class="edit flex flex-row box-content w-full p-3 mt-5 border-solid border-2 border-neutral-100 rounded-[30px] drop-shadow-lg"
    >

    <div class="left p-5 ">
        <div class="flex flex-row">
            <p class="text-xl">Username :</p>
            <p class="ml-[70px] text-xl">Username w</p>
        </div>
        <div class="flex flex-row mt-5">
            <p class="text-xl">Displayname :</p>
            <input
        id="Displayname"
        name="Displayname"
        type="Displayname"
        autocomplete="Displayname"
        required=""
        class="block border-solid border-2 border-neutral-300 w-[300px] ml-[40px] p-2 ps-2 text-sm text-camelcoat rounded-full"
      />
        </div>
        <div class="flex flex-row mt-5">
            <p class="text-xl">Email :</p>
            <input
        id="Email"
        name="Email"
        type="Email"
        autocomplete="Email"
        required=""
        class="block border-solid border-2 border-neutral-300 w-[300px] ml-[110px] p-2 ps-2 text-sm text-camelcoat rounded-full"
      />
        </div>
        <div class="flex flex-row mt-5">
            <p class="text-xl">Password :</p>
            <a href="#" class="ml-[70px] text-xl text-[#4942E4]">Change Password</a>
        </div>
    </div>

    <div class="right p-5 ml-[350px]">
        <div class="flex flex-row">
            <p class="text-xl">Firstname :</p>
            <input
        id="Firstname"
        name="Firstname"
        type="Firstname"
        autocomplete="Firstname"
        required=""
        class="block border-solid border-2 border-neutral-300 w-[300px] ml-[40px] p-2 ps-2 text-sm text-camelcoat rounded-full"
      />
        </div>
        <div class="flex flex-row mt-5">
            <p class="text-xl">Lastname :</p>
            <input
        id="Lastname"
        name="Lastname"
        type="Lastname"
        autocomplete="Lastname"
        required=""
        class="block border-solid border-2 border-neutral-300 w-[300px] ml-[40px] p-2 ps-2 text-sm text-camelcoat rounded-full"
      />
        </div>
        <div class="flex flex-row mt-5">
            <p class="text-xl">Phone :</p>
            <input
        id="Phone"
        name="Phone"
        type="Phone"
        autocomplete="Phone"
        required=""
        class="block border-solid border-2 border-neutral-300 w-[300px] ml-[70px] p-2 ps-2 text-sm text-camelcoat rounded-full"
      />
        </div>
    </div>
    </div>
    <div class="">
        <div class="flex justify-end ">
            <button type="submit" 
            class="flex justify-center w-full px-6 py-3 mt-4 text-red-600 border border-red-500 rounded-lg md:mt-0 md:w-auto md:mx-2 ">Cancel</button>
            <button type="submit" class="flex justify-center w-full px-6 py-3 mt-4 text-knitsweater  bg-steelblue rounded-lg md:mt-0 md:w-auto md:mx-2">Confirm</button>
        </div>
    </div>
    
  </div>
</template>

<script setup>
import BoxHistory from "../components/BoxHistory.vue";
</script>