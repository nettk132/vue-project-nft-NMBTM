<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <br>
            <h2 class="card-title text-center mb-4">Login</h2>
            <br>
            <div class="input-group">
              <label for="username" class="input-label">Username</label>
              <div class="underlined-input-container">
                <input id="username" v-model="username" class="underlined-input" placeholder=" " />
              </div>
            </div>
            <br>
            <div class="input-group">
              <label for="password" class="input-label">Password</label>
              <div class="underlined-input-container">
                <input id="password" v-model="password" :type="inputType" class="underlined-input" placeholder=" " />
              </div>
              <i :class="eyeIconClass" class="fa position-absolute top-50 end-0 translate-middle-y eye-icon"
                  @click="togglePasswordVisibility"></i>
            </div>
            <div class="mb-3 d-flex align-items-center">
              <input type="checkbox" class="form-check-input" v-model="rememberMe" />
              <label class="form-check-label">Remember me</label>
              <router-link to="/forget-password" class="ms-auto">Forgot password?</router-link>
            </div>
            <router-link to="/Userinfo">
            <button @click="login" class="btn btn-primary w-100 mt-4">Login</button>
           </router-link>
            <p class="text-center mt-3" style="margin-bottom: 40px">Sign in with </p>
            <div class="d-flex justify-content-center mt-2">
              <i class="fa-brands fa-facebook fa-2xl" alt="Facebook"></i>
              <i class="fa-brands fa-x-twitter fa-2xl" alt="Twitter"></i>
              <i class="fa-brands fa-google-plus fa-2xl" alt="Google"></i>
            </div>
            <br><br><br>
            <div class="text-center mt-4">
              <router-link to="/register" class="register-link">Register</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      rememberMe: false,
      showPassword: false // Initially hide the password
    };
  },
  computed: {
    inputType() {
      return this.showPassword ? 'text' : 'password';
    },
    eyeIconClass() {
      return this.showPassword ? 'fa-eye' : 'fa-eye-slash';
    }
  },
  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    login() {
      if (this.username && this.password) {
        this.$router.push("/");
      }
    }
  }
};
</script>

<style scoped>
.password-input {
  position: relative;
}

.eye-icon {
  cursor: pointer;
}

.password-input i {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}

input[type="password"]::-ms-reveal,
input[type="password"]::-webkit-contacts-auto-fill-button,
input[type="password"]::-webkit-credentials-auto-fill-button {
  display: none;
}

.input-group {
  position: relative;
  margin-bottom: 20px;
  /* Add spacing between input groups */
}

.input-label {
  position: absolute;
  top: -20px;
  left: 0;
  font-size: 14px;
  color: #777;
}

.underlined-input-container {
  width: 100%;
  border-bottom: 1px solid #ccc;
}

.underlined-input {
  border: none;
  width: 100%;
  font-size: 16px;
  padding: 10px 0;
  background-color: transparent;
  outline: none;
}

.underlined-input:focus {
  border-bottom: 2px solid #007bff;
}
</style>