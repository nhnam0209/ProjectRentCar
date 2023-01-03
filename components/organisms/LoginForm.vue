<template>
  <div
    class="modal w-full min-h-screen flex justify-center items-center bg-gray-500/[0.6]"
  >
    <div class="modal-container bg-white rounded-xl overflow-hidden relative">
      <header
        class="modal-header bg-header-login bg-center bg-cover bg-no-repeat relative text-white flex items-center justify-center text-2xl"
      >
        <span class="title-header-modal ppercase text-3xl font-bold"
          >Sign In</span
        >
      </header>
      <form class="login-form px-10 box-border" @submit.prevent="submitLogin()">
        <div class="relative border-bottom my-7">
          <RInput
            typeInput="text"
            v-model="user.username"
            class="input-focus"
            required
          />
          <RLabel nameLabel="Username:"></RLabel>
        </div>

        <div class="relative border-bottom my-7">
          <RInput
            typeInput="password"
            v-model="user.password"
            class="input-focus"
            required
          />
          <RLabel nameLabel="Password:"></RLabel>
        </div>
        <!-- 
        <div class="forget-pass text-gray-400 cursor-pointer my-3">
          Forgot Password?
        </div> -->
        <RButton nameBtn="Sign In" class="btn-assent w-full"></RButton>
        <div class="register-link my-5 text-lg text-gray-500">
          No account yet?
          <a href="/register" class="register-item text-black">Sign Up</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
@Component({
  name: "LoginForm",
})
export default class extends Vue {
  msg = "";

  async submitLogin() {
    try {
      this.$vxm.user.handleLogin();
      //setTimeout("location.reload(true)", 100);
    } catch (error: any) {
      this.msg = error;
      alert(this.msg);
    }
  }

  get user() {
    return this.$vxm.user.userLogin;
  }

  set user(value: any) {
    this.$vxm.user.setUserLogin(value);
  }

  get isAdmin() {
    return this.$vxm.user.isAdmin;
  }

  set isAdmin(value: any) {
    this.$vxm.user.setIsAdmin(value);
  }
}
</script>

<style>
.modal {
  position: fixed;
}

.modal.open {
  display: flex;
}

.modal-container {
  width: 900px;
  animation: slidein 1s ease;
}
.modal-header {
  z-index: 1;
}

.bg-header-login {
  background-image: url(../../static/img/login-cover.jpg);
  height: 200px;
}

.modal-header::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(54, 84, 99, 0.7);
  z-index: -1;
  display: block;
  top: 0;
  left: 0;
}

.modal-body {
  padding: 16px;
}

.border-bottom {
  border-bottom: 1px solid #b2b2b2;
}

.label-input {
  top: 0px;
  left: 0px;
  color: #b2b2b2;
}

.forget-pass {
  width: 130px;
}

.forget-pass:hover {
  text-decoration: underline;
}

.register-item:hover {
  text-decoration: underline;
  color: #00a550;
}

@keyframes slidein {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }

  to {
    opacity: 1;
    transform: translateY(0%);
  }
}

@media (max-width: 820px) {
  .modal-container {
    width: 70%;
  }
}

@media (max-width: 430px) {
  .modal-container {
    height: 70%;
  }

  .bg-header-login {
    background-color: #000;
    background: none;
  }

  .title-header-modal {
    font-size: 26px;
  }

  .label-input {
    font-size: 18px;
  }

  .register-link {
    font-size: 18px;
  }
}
</style>
