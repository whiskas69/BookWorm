<template>
  <div class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="row is-half">
            <!-- login -->
            <!-- img -->
            <div class="loginImg">
              <figure class="logimage">
                <img class="image" src="@/assets/6263.jpg" alt="Login image" />
              </figure>
            </div>

            <div class="loginData">
              <label class="label">Welcome to the Land of Writing!</label>
              <label class="label">Bookworms, are you ready to enter the Land of Writing?</label>
              <!-- user -->
              <div class="field">
                <label class="label">Username</label>
                <div class="control has-icons-left">
                  <input type="text" class="input" />
                  <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                  </span>
                </div>
              </div>
              <!-- password -->
              <div class="field">
                <label class="label">Password</label>
                <div class="control has-icons-left">
                  <input type="password" class="input" />
                  <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                  </span>
                </div>
              </div>
              <button class="button is-primary is-fullwidth my-4">Sign In</button>

              <p class="text my-1">
                Don't have an account yet?
                <!-- ใส่ให้ลิ้งหน้าด้วย -->
                <router-link to="/register"> Sign Up</router-link>
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
</style>