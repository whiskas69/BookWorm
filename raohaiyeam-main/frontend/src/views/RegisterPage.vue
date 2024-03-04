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
                <img class="image" src="@/assets/5294.jpg" alt="Login image" />
              </figure>
            </div>

            <div class="loginData">
              <label class="label">Welcome to the Land of Writing!</label>
              <label class="label">Sign up today and start your journey as a bookworm!</label>
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
              <!-- email -->
              <div class="field">
                <label class="label">Email</label>
                <div class="control has-icons-left">
                  <input type="text" class="input" />
                  <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
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
              <!-- Confirmed Password -->
              <div class="field">
                <label class="label">Confirmed Password</label>
                <div class="control has-icons-left">
                  <input type="password" class="input" />
                  <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                  </span>
                </div>
              </div>
              <!-- displayName -->
              <div class="field">
                <label class="label">Display Name</label>
                <div class="control has-icons-left">
                  <input type="text" class="input" />
                  <span class="icon is-small is-left">
                    <i class="fas fa-signature"></i>
                  </span>
                </div>
              </div>
              <button class="button is-primary is-fullwidth my-4">Create Account</button>

              <p class="text my-1">
                Already have an account?
                <!-- ใส่ให้ลิ้งหน้าด้วย -->
                <router-link to="/register"> Sign In</router-link>
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