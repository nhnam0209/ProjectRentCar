<template>
  <div
    class="register fixed w-full min-h-screen flex justify-center items-center bg-gray-500/[0.6]"
  >
    <div
      class="register-container width-form rounded-xl overflow-hidden relative flex"
    >
      <div v-if="isRegister">
        <h1>The account was created!!!</h1>
      </div>
      <div class="signup-content text-3xl font-bold text-white text-center">
        <span class="content-register absolute"
          >You have already signed up?
          <a href="/login" class="register-item"><br />Sign In Now</a>
        </span>
      </div>
      <form
        class="signup-form justify-center items-center flex bg-white"
        @submit.prevent="signupHandle()"
      >
        <div class="">
          <header class="title-signup text-3xl font-bold mt-7">
            <span>Register Here!</span>
          </header>
          <div class="relative border-bottom my-7">
            <input
              type="text"
              v-model="user.first_name"
              class="login-input w-full px-1.5 h-10 text-lg border-none outline-none bg-none"
              required
            />
            <label class="label-input top-2/4 absolute text-lg"
              >First name:</label
            >
          </div>
          <div class="relative border-bottom my-7">
            <input
              type="text"
              v-model="user.last_name"
              class="login-input w-full px-1.5 h-10 text-lg border-none outline-none bg-none"
              required
            />
            <label class="label-input top-2/4 absolute text-lg"
              >Last name:</label
            >
          </div>
          <div class="relative border-bottom my-7">
            <input
              type="email"
              v-model="user.email"
              class="login-input w-full px-1.5 h-10 text-lg border-none outline-none bg-none"
              required
            />
            <label class="label-input top-2/4 absolute text-lg">Email:</label>
          </div>
          <div class="relative border-bottom my-7">
            <input
              type="text"
              v-model="user.username"
              class="login-input w-full px-1.5 h-10 text-lg border-none outline-none bg-none"
              required
            />
            <label class="label-input top-2/4 absolute text-lg"
              >Username:</label
            >
          </div>
          <div class="relative border-bottom my-7">
            <input
              type="password"
              v-model="user.password"
              class="login-input w-full px-1.5 h-10 text-lg border-none outline-none bg-none"
              required
            />
            <label class="label-input top-2/4 absolute text-lg"
              >Password:</label
            >
          </div>
          <button
            type="submit"
            class="w-full btn text-lg text-white font-bold my-7"
          >
            Get Start
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
@Component({
  name: "RegisterForm",
})
export default class extends Vue {
  isRegister: Boolean = false;
  msg = "";

  get user() {
    return this.$vxm.user.userInfo;
  }

  set user(value: any) {
    this.$vxm.user.setUserInfo(value);
  }

  // mounted(){
  //   console.log(this.user)
  // }

  async signupHandle() {
    try {
      this.$vxm.user.handleRegister();
      this.$router.push("/login");
    } catch (error: any) {
      this.msg = error;
    }
  }
}
</script>

<style>
.width-form {
  width: 1000px;
}

.register-container {
  animation: slideleft-right 2s;
}

.signup-content {
  background: url(../../static/img/signup-cover1.jpg);
  width: 500px;
  z-index: 1;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
}

.signup-content::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(54, 84, 99, 0.5);
  z-index: -1;
  display: block;
  top: 0;
  left: 0;
}

.content-register {
  top: 0;
  left: 0;
  padding: 20px;
}

.signup-form {
  width: 500px;
}

@keyframes slideleft-right {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }

  to {
    opacity: 1;
    transform: translateX(0%);
  }
}

@media (max-width: 730px) {
  .signup-content {
    display: none;
  }

  .signup-form {
    width: 70%;
  }
  .register-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media (max-width: 820px) {
  .register-container {
    width: 80%;
  }
}
</style>
