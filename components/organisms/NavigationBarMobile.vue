<template>
  <nav class="h-16 flex justify-between overflow-hidden items-center">
    <div
      class="bg-no-repeat bg-cover bg-center w-24 h-full flex justify-center mx-3"
    >
      <NuxtLink class="flex self-center" to="/">
        <img src="../../static/img/logo.png" alt="company_logo" />
      </NuxtLink>
    </div>
    <div class="p-4 cursor-pointer icon-hover relative right-0 z-50">
      <IconBar class="w-6 h-6" />
    </div>
    <div
      class="text-xl py-4 absolute top-[54px] right-0 w-40 font-medium rounded-md border-2 bg-white z-50 subnav-icon hover:block cursor-pointer"
      v-if="!isLogin"
    >
      <div
        v-for="item in navigationBarData"
        :key="item.id"
        class="p-4 hover:bg-gray-300/50 w-full h-full"
      >
        <NuxtLink :key="item.id" :to="item.link">
          {{ item.label }}
        </NuxtLink>
      </div>
    </div>

    <div
      v-else
      class="px-5 py-4 top-[52px] absolute right-0 w-44 font-medium rounded-md border-2 bg-white z-50 subnav-icon hover:block cursor-pointer"
    >
      <sub-navigation
        :user-info="userInfo"
        :is-admin="isAdmin"
        class="flex justify-center self-center"
      />
      <div class="p-4 hover:bg-gray-300/50 w-full h-full">
        <NuxtLink class="" to="/rentcar"> Rent Car </NuxtLink>
      </div>
      <div class="p-4 hover:bg-gray-300/50 w-full h-full">
        <NuxtLink class="" to="/aboutus"> About Us </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import axios from "../../utils/myAxios";
import { API } from "~/utils/constant";

@Component({
  name: "NavigationBarMobile",
})
export default class extends Vue {
  isLogin: Boolean = false;
  userInfo: any = {};
  navigationBarData: any = [
    {
      id: 1,
      label: "Rent Car",
      link: "/rentcar",
    },
    {
      id: 2,
      label: "About Us",
      link: "/aboutus",
    },
    {
      id: 3,
      label: "Sign In",
      link: "/login",
    },
    {
      id: 4,
      label: "Sign Up",
      link: "/register",
    },
  ];

  handleLogOut() {
    try {
      this.$vxm.user.handleLogOut();
      this.$router.push("/");
      setTimeout("location.reload(true)", 100);
    } catch (error) {
      // Must do: Error handle for logout
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
          `${process.env.baseURL + API.auth.verify_login}`,
          {
            headers: {
              Authorization: `${document.cookie}`,
            },
          }
        );
        if (res.data[0].is_admin == 1) {
          const resAdmin = await axios.get(
            `${process.env.baseURL + API.auth.verify_login_admin}`,
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
