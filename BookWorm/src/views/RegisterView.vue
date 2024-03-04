<template>
  <div class="flex min-h-full flex-1 flex-col px-6 py-12 lg:px-8">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="flex justify-between gap-x-6 py-5">
            <!-- login -->
            <!-- img -->
            <div class="flex min-w-0 gap-x-4">
              <img class="loginImg" src="@/assets/5294.jpg" alt="Login image" />
            </div>

            <div class="loginData min-w-0 flex-auto">
              <div class="mt-20">
                <label class="title">Welcome to the Land of Writing!</label>
              </div>

              <div class="mt-4">
                <label class="subtitle"
                  >Sign up today and start your journey as a bookworm!</label
                >
              </div>

              <!-- user -->
              <div class="field mt-8">
                <label class="label">Username</label>
                <div class="mt-2">
                  <input
                    id="Username"
                    name="Username"
                    type="Username"
                    autocomplete="Username"
                    required=""
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <!-- email -->
              <div class="field">
                <label class="label">Email</label>
                <div class="mt-2">
                  <input
                    id="Email"
                    name="Email"
                    type="Email"
                    autocomplete="Email"
                    required=""
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <!-- password -->
              <div class="field">
                <label class="label">Password</label>
                <div class="mt-2">
                  <input
                    id="Password"
                    name="Password"
                    type="Password"
                    autocomplete="Password"
                    required=""
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <!-- password -->
              <div class="field">
                <label class="label">Confirmed Password</label>
                <div class="mt-2">
                  <input
                    id="Password"
                    name="Password"
                    type="Password"
                    autocomplete="Password"
                    required=""
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <!-- Display Name -->
              <div class="field">
                <label class="label">Display Name</label>
                <div class="mt-2">
                  <input
                    id="Display Name"
                    name="Display Name"
                    type="Display Name"
                    autocomplete="Display Name"
                    required=""
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  class="submit flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Create Account
                </button>
              </div>
              <p class="mt-5 text-center text-sm text-gray-500">
                Already have an account?
                {{ " " }}
                <a
                  href="#"
                  class="signUp font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                  >Sign In</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
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

<style scoped>
.textmain {
  text-align: center;
  font-size: 40px;
}

.text {
  text-align: center;
}
.loginImg {
  height: 700px;
  width: 900px;
  margin-top: 10%;
  margin-left: -10%;
  background: #86a5a8;
}
.loginData {
margin-left: -10%;
}
.title {
  color: #2f4842;
  font-size: 150%;
}
.subtitle {
  color: #b77855;
}
.submit {
  background-color: #86a5a8;
  color: #f0e4d8;
  margin-top: 5%;
}
.signUp {
  color: #B05044;
}
</style>