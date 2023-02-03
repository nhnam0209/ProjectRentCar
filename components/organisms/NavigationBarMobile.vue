<template>
  <nav class="h-16 flex justify-between overflow-hidden items-center">
    <div class="bg-no-repeat bg-cover bg-center w-24 h-full">
      <NuxtLink class="" to="/">
        <img src="../../static/img/logo.jpg" alt="" />
      </NuxtLink>
    </div>
    <div class="px-4 cursor-pointer icon-hover relative right-0 z-50 " :class="{'hidden':isLogin}">
      <IconBar class="w-6 h-6"></IconBar>
    </div>
    <div
      class="text-xl absolute top-12 right-0 w-36 font-medium bg-white z-50 subnav-icon hover:block cursor-pointer"
      v-if="!isLogin"
    >
      <div class="p-4 hover:bg-gray-300/50 w-full h-full">
        <NuxtLink class="" to="/rentcar"> Rent Car </NuxtLink>
      </div>
      <div class="p-4 hover:bg-gray-300/50 w-full h-full">
        <NuxtLink class="" to="/aboutus"> About Us </NuxtLink>
      </div>
      <div class="p-4 hover:bg-gray-300/50 w-full h-full">
        <NuxtLink class="" to="/login"> Sign In </NuxtLink>
      </div>
      <div class="p-4 hover:bg-gray-300/50 w-full h-full">
        <NuxtLink class="" to="/register"> Sign Up </NuxtLink>
      </div>
    </div>

    <div v-else class="px-5">
      <sub-navigation :user-info="userInfo" :is-admin="isAdmin" />
    </div>

  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import axios from "../../utils/myAxios";

@Component({
  name: "NavigationBarMobile",
})
export default class extends Vue {
  isLogin: Boolean = false;
  userInfo: any = {};

  handleLogOut() {
    try {
      this.$vxm.user.handleLogOut();
      this.$router.push("/");
      setTimeout("location.reload(true)", 100);
    } catch (error) {
      this.$router.push("/");
      setTimeout("location.reload(true)", 100);
    }
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
          "http://localhost:5000/api/auth/verifylogin",
          {
            headers: {
              Authorization: `${document.cookie}`,
            },
          }
        );
        if (res.data[0].is_admin == 1) {
          const resAdmin = await axios.get(
            "http://localhost:5000/api/auth/verifyloginAdmin",
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
.icon-hover:hover ~ .subnav-icon {
  display: block;
}

.subnav-icon {
  display: none;
}

.subnav-icon::before {
  content: "";
  width: 144px;
  height: 40px;
  position: absolute;
  top: -10px;
  right: 0;
  background: transparent;
}
</style>
