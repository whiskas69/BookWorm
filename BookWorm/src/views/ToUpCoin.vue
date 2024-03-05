<template>
  <div class="toUpCoin p-20 grid gap-y-5">
    <div class="toUp">
      <p class="title text-2xl">To-up Coin</p>
    </div>

    <div class="inputCoin">
      <label class="coin text-xl">กรอกจำนวนเหรียญที่ต้องการเติม</label>
    </div>

    <div class="mt-2">
      <input
        id="Coin"
        name="Username"
        type="Username"
        autocomplete="Username"
        required=""
        class="block border-solid border-2 border-neutral-400 w-full p-2 ps-3 text-sm text-camelcoat rounded-full"
      />
    </div>

<div class="grid justify-items-end ">
    <button type="submit" class="submit bg-steelblue rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-1/12">Confirm</button>
</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
