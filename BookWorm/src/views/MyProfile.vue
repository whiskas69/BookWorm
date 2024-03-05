<template>
  <div class="editProfile p-20">
    <!-- displaname -->
    <div
      class="profile flex flex-row md:grid-cols-4 p-7 box-content items-center border-solid border-2 border-neutral-100 rounded-[30px] drop-shadow-lg"
    >
      <div class="flex flex-row items-center justify-start">
        <img
          class="loginImg w-[100px] h-[100px] bg-cover rounded-full ml-8"
          src="https://cdn.discordapp.com/attachments/979676845228318740/1018546182768836648/Imagenes_de_Coco_-_Imector.jpeg?ex=65f70e8d&is=65e4998d&hm=780f2ffa8091385150b6dcd4ddf8b7b8ee535ea47fafde74d6cb7cab6e30a859&"
          alt="coverBook"
        />
        <label class="coin text-xl ml-5">My Name IS</label>
      </div>

      <div class="flex flex-row justify-end flex-auto items-center">
        <div class="flex flex-col">
          <label class="coin text-xl ml-10 text-[#FFB743]">1000</label>
          <label class="coin text-xl ml-10 text-[#FFCF81]">เหรียญ</label>
        </div>

        <div class="flex flex-col">
          <label class="work text-xl ml-10 text-[#3A3A3A]">1000</label>
          <label class="work text-xl ml-10 text-[#B2ACAC]">งานเขียน</label>
        </div>
      </div>
    </div>
    <!-- Edit Profile  -->
    <div class="flex justify-end mt-10">
      <button
        type="submit"
        class="flex justify-center w-full px-6 py-3 mt-4 text-[#4C3FB6] border border-[#4C3FB6] rounded-full md:mt-0 md:w-auto md:mx-2"
      >
        Edit Profile
      </button>
    </div>
    <!-- Data user -->
    <div
      class="data flex flex-row box-content p-3 mt-5 border-solid border-2 border-neutral-100 rounded-[30px] drop-shadow-lg"
    >
      <div class="left p-7 ml-[40px]">
        <div class="flex flex-row">
          <p class="text-xl">Username :</p>
          <p class="ml-[70px] text-xl">UsernameWa</p>
        </div>
        <div class="flex flex-row mt-5">
          <p class="text-xl">Email :</p>
          <p class="ml-[110px] text-xl">email@gmail.com</p>
        </div>
        <div class="flex flex-row mt-5">
          <p class="text-xl">Password :</p>
          <p class="ml-[80px] text-xl">********</p>
        </div>
      </div>

      <div class="right p-7 ml-[400px]">
        <div class="flex flex-row">
          <p class="text-xl">Firstname :</p>
          <p class="ml-[70px] text-xl">Firstname</p>
        </div>
        <div class="flex flex-row mt-5">
          <p class="text-xl">Lastname :</p>
          <p class="ml-[70px] text-xl">Lastname</p>
        </div>
        <div class="flex flex-row mt-5">
          <p class="text-xl">Phone :</p>
          <p class="ml-[100px] text-xl">0987654321</p>
        </div>
      </div>
    </div>
    <!-- button -->
    <div class="grid grid-cols-2 mt-10 gap-x-8 gap-y-8">
      <div class="">
        <button
        type="submit"
        class="flex justify-center w-full px-6 py-5 mt-4  border-2 border-[#B77855] rounded-[20px]"
      >
      Upload Your Book
      </button>
      <button
        type="submit"
        class="flex justify-center w-full px-6 py-5 mt-9 border-2 border-[#4C3FB6] rounded-[20px] "
      >
      My Favorite
      </button>
      <button
        type="submit"
        class="flex justify-center w-full px-6 py-5 mt-9 border-2 border-[#4C3FB6] rounded-[20px] "
      >
      Order History
      </button>
      </div>

      <div class="">
        <button
        type="submit"
        class="flex justify-center w-full px-6 py-5 mt-4 border-2 border-[#B77855] rounded-[20px] "
      >
      My Writing
      </button>
      <button
        type="submit"
        class="flex justify-center w-full px-6 py-5 mt-9 border-2 border-[#4C3FB6] rounded-[20px] "
      >
      My Shelf
      </button>
      <button
        type="submit"
        class="flex justify-center w-full px-6 py-5 mt-9 border-2 border-[#4C3FB6] rounded-[20px] "
      >
      To-up Coin
      </button>
      </div>
    </div>
  </div>
</template>

<style></style>
