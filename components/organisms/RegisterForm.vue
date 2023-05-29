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
      <div
        class="signup-content text-3xl font-bold text-white text-center bg-cover bg-no-repeat bg-center relative z-10"
      >
        <span class="top-0 left-0 p-5 absolute"
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
            <r-input
              type-input="text"
              :v-model="user.first_name"
              class="input-focus"
              required
            />
            <!-- <input
              type="text"
              v-model="user.first_name"
              class="input-focus w-full px-1.5 h-10 text-lg border-none outline-none bg-none"
              required
            /> -->
            <span></span>
            <RLabel nameLabel="First name:"></RLabel>
          </div>
          <div class="relative border-bottom my-7">
            <!-- <r-input
              typeInput="text"
              :VModel="user.last_name"
              class="input-focus"
              required
            /> -->
            <input
              type="text"
              v-model="user.last_name"
              class="input-focus w-full px-1.5 h-10 text-lg border-none outline-none bg-none"
              required
            />
            <RLabel nameLabel="Last name:"></RLabel>
          </div>
          <div class="relative border-bottom my-7">
            <!-- <r-input
              typeInput="email"
              :VModel="user.email"
              class="input-focus"
              required
            /> -->
            <input
              type="text"
              v-model="user.email"
              class="input-focus w-full px-1.5 h-10 text-lg border-none outline-none bg-none"
              required
            />
            <RLabel nameLabel="Email:"></RLabel>
          </div>
          <div class="relative border-bottom my-7">
            <!-- <r-input
              typeInput="text"
              :VModel="user.username"
              class="input-focus"
              required
            /> -->
            <input
              type="text"
              v-model="user.username"
              class="input-focus w-full px-1.5 h-10 text-lg border-none outline-none bg-none"
              required
            />
            <RLabel nameLabel="Username:"></RLabel>
          </div>
          <div class="relative border-bottom my-7">
            <!-- <r-input
              typeInput="password"
              :VModel="user.password"
              class="input-focus"
              required
            /> -->
            <input
              type="password"
              v-model="user.password"
              class="input-focus w-full px-1.5 h-10 text-lg border-none outline-none bg-none"
              required
            />
            <RLabel nameLabel="Password:"></RLabel>
          </div>
          <button
            type="submit"
            class="w-full btn-success text-white text-lg font-bold my-7 rounded-xl p-3 text-center"
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

  async signupHandle() {
    try {
      this.$vxm.user.handleRegister();
    } catch (error: any) {
      this.msg = error;
      this.$toasted
        .error(this.msg, {
          icon: "error_outline",
        })
        .goAway(3000);
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
  background-size: cover;
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

.input-focus:focus ~ .label-input,
.input-focus:valid ~ .label-input {
  top: -20px;
  color: #5cdb95;
}

.station-input-pickup:first-child {
  margin-right: 20px;
}

.station-input-pickup:last-child {
  margin-left: 20px;
}
</style>
