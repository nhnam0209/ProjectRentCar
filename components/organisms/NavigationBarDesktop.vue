<template>
  <nav class="h-16 lg:h-24 flex justify-between overflow-hidden fixed bg-white w-full z-10 top-0 border-b border-solid border-gray-200">
    <div
      class="bg-no-repeat bg-cover bg-center w-32 h-full mx-5 my-auto flex justify-center"
    >
      <NuxtLink to="/" class="flex justify-center">
        <img
          src="../../static/img/logo.png"
          alt="company_logo"
          class="flex self-center"
        />
      </NuxtLink>
    </div>
    <div class="navbar-list-items flex justify-center items-center">
      <div v-if="isAdmin">
        <div class="inline-flex">
          <NuxtLink
            class="navbar-items mx-4 p-4 text-xl rounded-full hover:bg-slate-100"
            to="/dashboardadmin"
            >Dashboard</NuxtLink
          >
          <NuxtLink
            class="navbar-items mx-4 p-4 text-xl rounded-full hover:bg-slate-100"
            to="/manageuser"
            >Manage User</NuxtLink
          >
          <NuxtLink class="navbar-items mx-4 p-4 text-xl" to="/managecar"
            >Manage Car</NuxtLink
          >
        </div>
      </div>
      <div v-else>
        <div class="inline-flex">
          <NuxtLink
            class="navbar-items mx-4 p-4 text-xl rounded-full hover:bg-slate-100"
            to="/"
            >Home</NuxtLink
          >
          <NuxtLink
            class="navbar-items mx-4 p-4 text-xl rounded-full hover:bg-slate-100"
            to="/aboutus"
            >About Us</NuxtLink
          >
          <NuxtLink
            class="navbar-items mx-4 p-4 text-xl rounded-full hover:bg-slate-100"
            to="/rentcar"
            >Rent Car</NuxtLink
          >
        </div>
      </div>
    </div>
    <div class="flex justify-center items-center">
      <div v-if="!isLogin">
        <button class="buttons split-bar relative">
          <NuxtLink
            class="navbar-items text-xl mx-4 rounded-full hover:bg-slate-100 p-4"
            to="/login"
            >Sign In</NuxtLink
          >
        </button>
        <button class="buttons">
          <NuxtLink
            class="navbar-items text-xl mx-4 rounded-full hover:bg-slate-100 p-4"
            to="/register"
            >Sign Up</NuxtLink
          >
        </button>
      </div>
      <div v-else class="px-5 flex justify-center items-center">
        <span class="relative px-5 split-bar cursor-pointer" @click="handleRentCarPage()">
          <icon-search class="w-6 h-6 "></icon-search>
        </span>
        <span class="px-5 navigation-subnav" @mouseover="handleMouseHover()" @mouseout="handleMouseOut()">
          <icon-user class="w-6 h-6 cursor-pointer"></icon-user>
          <sub-navigation class="fixed top-24 right-0 z-[99] hidden" :user-info="userInfo" :is-admin="isAdmin" :class="{'!block' : isHover}" />
        </span>
      </div>
    </div>
  </nav>
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import axios from "../../utils/myAxios";

@Component({
  name: "NavigationBarDesktop",
})
export default class extends Vue {
  isLogin: Boolean = false;
  userInfo: any = {};
  walletInfo: any = {};
  isHover: any = false

  handleMouseHover() {
    !this.isHover && (this.isHover = true);
  }
  handleMouseOut() {
    this.isHover && (this.isHover = false);
  }

  handleRentCarPage() {
    this.$router.push("/rentcar");
  }

  get user() {
    return this.$vxm.user.userInfo;
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

  async created() {
    try {
      if (document.cookie) {
        const res = await axios.get(
          "http://localhost:5000/api/auth/verify_login",
          {
            headers: {
              Authorization: `${document.cookie}`,
            },
          }
        );
        // const resWallet = await axios.post(
        //   "http://localhost:5000/api/wallet/find",
        //   {
        //     user_id: this.userInfo.id,
        //   },
        //   {
        //     headers: {
        //       Authorization: `${document.cookie}`,
        //     },
        //   }
        // );
        // this.walletInfo = resWallet.data.wallet;
        // console.log(this.walletInfo);
        if (res.data[0].is_admin == 1) {
          const resAdmin = await axios.get(
            "http://localhost:5000/api/auth/verify_login_admin",
            {
              headers: {
                Authorization: `${document.cookie}`,
              },
            }
          );
          this.userInfo = resAdmin.data[0];
          this.isAdmin = true;
          this.isLogin = true;
        } else {
          this.userInfo = res.data[0];
          this.isLogin = true;
        }
      }
    } catch (error) {
      this.isLogin = false;
    }
  }
}
</script>

<style>
.navbar-icon-list {
  display: none;
}

.split-bar::before {
  content: "";
  position: absolute;
  border-right: 2px solid black;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  z-index: -1;
}

.navigation-subnav{
  position: relative;
}

.navigation-subnav::before {
  content: "";
  position: absolute;
  top: 25px;
  width: 100px;
  right: 0;
  height: 30px;
}

.navbar-items:hover::before {
  width: 100%;
}

@media (max-width: 1024px) {
  .navbar-list-items {
    display: none;
  }
}
</style>
