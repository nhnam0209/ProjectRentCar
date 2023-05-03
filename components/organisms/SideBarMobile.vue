<template>
  <nav class="h-16 flex justify-between overflow-hidden items-center">
    <div
      class="bg-no-repeat bg-cover bg-center w-24 h-full flex justify-center mx-3"
    >
      <NuxtLink class="flex self-center" to="/">
        <img src="../../static/img/logo.png" alt="company_logo" />
      </NuxtLink>
    </div>
    <div
      class="p-4 cursor-pointer icon-hover relative right-0 z-30"
      @click="handleMouseEnter()"
    >
      <IconBar class="w-6 h-6" />
    </div>
    <div
      v-if="isHover"
      class="bg-gray-600/50 fixed top-0 w-screen h-screen z-40"
    >
      <div
        class="text-xl py-4 fixed top-0 right-0 w-[50vw] font-medium rounded-md border-2 bg-white z- cursor-pointer h-screen"
        v-if="!isLogin"
      >
        <div class="p-4" @click="handleMouseBlur()">
          <icon-x class="w-6 h-6 block mb-2"></icon-x>
        </div>
        <div
          v-for="item in navigationBarData"
          :key="item.id"
          class="p-4 hover:bg-gray-300/50 w-full"
        >
          <NuxtLink :key="item.id" :to="item.link">
            {{ item.label }}
          </NuxtLink>
        </div>
      </div>

      <div
        v-else
        class="px-5 py-4 fixed top-0 right-0 w-[50vw] font-medium rounded-md border-2 bg-white z-50 cursor-pointer h-screen"
      >
        <div class="" @click="handleMouseBlur()">
          <icon-x class="w-6 h-6 block mb-2"></icon-x>
        </div>
        <div class="">
          <div class="my-5">
            <div class="inline-flex self-center">
              <img
                v-if="!isAdmin"
                :src="userInfo.image"
                alt="avatar"
                class="rounded-full w-9 h-9 flex self-center mr-2"
              />
              <p class="text-2xl">{{ userInfo.username }}</p>
            </div>
            <div
              v-if="!isAdmin"
              class="flex flex-col border-t border-gray-500 my-2 py-2"
            >
              <NuxtLink
                v-for="item in userSubNavigation"
                :key="item.id"
                class="lg:text-2xl text-xl my-2 w-full font-semibold cursor-pointer z-50 inline-flex"
                :to="item.link"
                ><component :is="item.icon" class="w-6 mr-2 flex self-center icon-fill" />
                <span class="flex self-center">
                  {{ item.label }}
                </span>
              </NuxtLink>
            </div>
            <div
              v-else
              class="flex-col hidden max-lg:flex border-t border-gray-500 my-2 py-2"
            >
              <NuxtLink
                v-for="item in adminSubNavigation"
                :key="item.id"
                class="lg:text-2xl text-xl my-auto font-semibold cursor-pointer z-50"
                :to="item.link"
                >{{ item.label }}</NuxtLink
              >
            </div>
            <div class="flex flex-col border-t border-gray-500 my-2 py-2">
              <NuxtLink
                class="lg:text-2xl text-xl my-2 w-full font-semibold cursor-pointer z-50 inline-flex"
                to="/rentcar"
              >
                <icon-location-pin
                  class="w-6 mr-2 flex self-center icon-fill"
                ></icon-location-pin>
                <span class="flex self-center">Rent Car</span>
              </NuxtLink>
              <NuxtLink
                class="lg:text-2xl text-xl my-2 w-full font-semibold cursor-pointer z-50 inline-flex"
                to="/aboutus"
              >
                <icon-users class="w-6 mr-2 flex self-center icon-fill"></icon-users>
                <span class="flex self-center">About Us</span>
              </NuxtLink>
              <div
                class="lg:text-2xl text-xl my-2 w-full font-semibold cursor-pointer z-50 inline-flex"
                @click="handleLogOut"
              >
                <icon-login class="w-6 mr-2 flex self-center icon-fill"></icon-login>
                <span class="flex self-center">Logout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import axios from "../../utils/myAxios";

@Component({
  name: "SideBarMobile",
})
export default class extends Vue {
  isLogin: Boolean = false;
  userInfo: any = {};
  isHover: Boolean = false;
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

  userSubNavigation = [
    {
      id: 1,
      label: "My Profile",
      link: "/dashboard/" + this.userInfo.id + "_" + this.userInfo.username,
      icon: "icon-person",
    },
    {
      id: 2,
      label: "My Wallet",
      link: "/wallet/" + this.userInfo.id + "_" + this.userInfo.username,
      icon: "icon-wallet",
    },
    {
      id: 3,
      label: "My Car",
      link: "/mycar/" + this.userInfo.id + "_" + this.userInfo.username,
      icon: "icon-car",
    },
  ];

  adminSubNavigation = [
    {
      id: 1,
      label: "Dashboard",
      link: "/dashboardadmin",
    },
    {
      id: 2,
      label: "Manage User",
      link: "/manageuser",
    },
    {
      id: 3,
      label: "Manage Car",
      link: "/managecar",
    },
  ];

  handleMouseEnter() {
    !this.isHover && (this.isHover = true);
  }
  handleMouseBlur() {
    this.isHover && (this.isHover = false);
  }

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
          "http://localhost:5000/api/auth/verify_login",
          {
            headers: {
              Authorization: `${document.cookie}`,
            },
          }
        );
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
