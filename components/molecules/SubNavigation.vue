<template>
  <div
    class="py-4 z-50 sub-navbar-items text-[12px] lg:text-xl"
    :class="!isMobile && 'hover:bg-gray-300/50'"
    @mouseleave="handleMouseBlur()"
    @mouseover="handleMouseEnter()"
  >
    <div
      @mouseover="handleMouseEnter()"
      class="cursor-pointer lg:p-6 flex text-center justify-center"
    >
      <div class="inline-flex self-center">
        <img
          v-if="!isAdmin"
          :src="userInfo.image"
          alt="avatar"
          class="rounded-full w-8 h-8 flex self-center mr-2"
        />
        <p class="text-xl">{{ username }}</p>
      </div>
    </div>
    <div
      v-if="isHover"
      @mouseover="handleMouseEnter()"
      class="bg-green-300 p-5 lg:w-[250px] rounded-md h-fit absolute z-50 top-[70px] mt-3 right-7 mr-[105px] lg:mr-0"
      :class="classes"
    >
      <div class="p-3 my-2" @mouseenter="handleMouseEnter()">
        <div v-if="!isAdmin" class="flex flex-col">
          <NuxtLink
            v-for="item in userSubNavigation"
            :key="item.id"
            class="lg:text-2xl text-xl my-1 w-full font-semibold cursor-pointer z-50 inline-flex"
            :to="item.link"
            ><component :is="item.icon" class="w-6 mr-2 flex self-center" />
            <span class="flex self-center">
              {{ item.label }}
            </span>
          </NuxtLink>
        </div>

        <div v-else class="flex-col hidden max-lg:flex">
          <NuxtLink
            v-for="item in adminSubNavigation"
            :key="item.id"
            class="lg:text-2xl text-xl my-auto font-semibold cursor-pointer z-50"
            :to="item.link"
            >{{ item.label }}</NuxtLink
          >
        </div>
        <hr class="my-4" />
        <div
          class="navbar-items my-2 cursor-pointer text-center mx-auto"
          @click="handleLogOut"
        >
          Logout
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
      link: "/managercar",
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
