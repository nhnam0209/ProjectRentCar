<template>
  <div
    class="py-4 px-8 fixed top-[90px] right-0 font-medium rounded-lg border-2 bg-white z-50 cursor-pointer"
  >
    <div class="">
      <div class="">
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
            class="text-lg w-full font-semibold cursor-pointer z-50 inline-flex rounded-full hover:bg-slate-200 p-2"
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
            class="text-lg my-auto font-semibold cursor-pointer z-50 rounded-full hover:bg-slate-200 p-2"
            :to="item.link"
            >{{ item.label }}</NuxtLink
          >
        </div>
        <div class="flex flex-col border-t border-gray-500 my-2 py-2">
          <NuxtLink
            class="text-lg w-full font-semibold cursor-pointer z-50 inline-flex rounded-full hover:bg-slate-200 p-2"
            to="/rentcar"
          >
            <icon-location-pin
              class="w-6 mr-2 flex self-center icon-fill"
            ></icon-location-pin>
            <span class="flex self-center">Rent Car</span>
          </NuxtLink>
          <NuxtLink
            class="text-lg w-full font-semibold cursor-pointer z-50 inline-flex rounded-full hover:bg-slate-200 p-2"
            to="/aboutus"
          >
            <icon-users class="w-6 mr-2 flex self-center icon-fill"></icon-users>
            <span class="flex self-center">About Us</span>
          </NuxtLink>
          <div
            class="text-lg w-full font-semibold cursor-pointer z-50 inline-flex rounded-full hover:bg-slate-200 p-2"
            @click="handleLogOut"
          >
            <icon-login class="w-6 mr-2 flex self-center icon-fill"></icon-login>
            <span class="flex self-center">Logout</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";
import { EMPTY } from "~/utils/constant";
@Component({
  name: "SubNavigation",
})
export default class extends Vue {
  @Prop() userInfo!: any;
  @Prop() walletInfo!: any;
  @Prop({ type: Boolean }) isAdmin!: Boolean;
  @Prop({ type: String }) classes!: String;
  @Prop({ type: Boolean, default: false }) isMobile!: Boolean;

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
  isHover: Boolean = false;
  username: String = EMPTY;

  mounted() {
    this.username = this.userInfo.username;
  }
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
      this.$router.push("/");
      setTimeout("location.reload(true)", 100);
    }
  }
}
</script>

<style scoped>
.nav-menu-content .container {
  position: relative;
}

.submenu-container {
  margin: 0 0 0 7px;
}
.nav-menu-content .container::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 80px;
}

.sub-navbar-items {
  line-height: 2rem;
}
</style>
