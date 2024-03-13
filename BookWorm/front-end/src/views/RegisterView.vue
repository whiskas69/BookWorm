<template>
  <div class="flex min-h-full flex-1 flex-col px-6 lg:px-8">
    <div class="hero-body">
      <div class="columns is-centered">
        <div class="flex justify-center gap-x-6 py-2">
          <!-- login -->
          <!-- img -->
          <div class="flex min-w-0 gap-x-4">
            <img
              class="loginImg bg-cover"
              src="@/assets/5294.jpg"
              alt="Login image"
            />
          </div>

          <div class="loginData min-w-0">
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
                  v-model="username"
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
                  v-model="email"
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
                  v-model="password"
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
                  v-model="conpassword"
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
                  v-model="displayname"
                  required=""
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                @click="submit()"
                class="submit flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Create Account
              </button>
            </div>
            <p class="mt-5 text-center text-sm text-gray-500">
              Already have an account?
              {{ " " }}
              <router-link to="/login">
                <p
                  class="signUp font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                >
                  Sign In
                </p>
              </router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: "",
      password: "",
      conpassword: "",
      email: "",
      displayname: "",
    };
  },
  methods: {
    submit() {
      console.log("In regis")
      
      if (
        this.password === this.conpassword &&
        this.password != "" &&
        this.conpassword != "" &&
        this.email != "" &&
        this.username != "" &&
        this.displayname != ""
      ) {
        const data = {
          email: this.email,
          password: this.password,
          username: this.username,
          displayname: this.displayname,
        };

        axios
          .post("http://54.159.109.208:3000/register", data)
          .then((res) => {
            this.err = "";
            console.log(res);
            alert("You are already our member!");
            this.$router.push({ path: "/login" });
          })
          .catch((err) => {
            this.err = err.response.data.details.message;
            console.log(err);
            alert(err.response.data.details.message);
          });
      }
    },
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
  color: #b05044;
}
</style>
