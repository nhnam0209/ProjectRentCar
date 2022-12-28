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
          <input
            type="text"
            v-model="user.username"
            class="login-input w-full px-1.5 h-10 text-lg border-none outline-none bg-none"
            required
          />
          <label class="label-input top-2/4 absolute text-lg">Username:</label>
        </div>

        <div class="relative border-bottom my-7">
          <input
            type="password"
            v-model="user.password"
            class="login-input w-full px-1.5 h-10 text-lg border-none outline-none bg-none"
            required
          />
          <label class="label-input top-2/4 absolute text-lg">Password:</label>
        </div>

        <div class="forget-pass text-gray-400 cursor-pointer my-3">
          Forgot Password?
        </div>
        <RButton type="submit" class="w-full btn-assent" nameBtn="Sign In">
        </RButton>
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
  isLogin: Boolean = false;

  async submitLogin() {
    try {
      this.$vxm.user.handleLogin();
      setTimeout("location.reload(true)", 100);
      if (this.isAdmin || this.user.username == "admin") {
        this.$router.push("/dashboardadmin");
        setTimeout("location.reload(true)", 100);
      } else {
        this.$router.push("/");
        setTimeout("location.reload(true)", 100);
      }
    } catch (error: any) {
      this.msg = error;
      console.log(this.msg);
    }
  }

  get user() {
    return this.$vxm.user.userLogin;
  }

  set user(value: any) {
    this.$vxm.user.setUserLogin(value);
  }

  get isAdmin() {
    // console.log(this.$vxm.user.isAdmin);
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

.login-input:focus ~ .label-input,
.login-input:valid ~ .label-input {
  top: -20px;
  color: #00a550;
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
