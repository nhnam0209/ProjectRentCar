<template>
  <div class="py-2 z-50 sub-navbar-items">
    <div @click="handleHover()" class="cursor-pointer">
      {{ username }}
    </div>
    <div
      v-if="isHover"
      class="bg-green-300 rounded-md h-fit absolute top-[50px] right-5"
    >
      <div class="py-2">
        <div class="flex flex-col" v-if="!isAdmin">
          <NuxtLink class="navbar-items cursor-pointer z-50" to="/dashboard"
            >My Profile</NuxtLink
          >
          <NuxtLink class="navbar-items cursor-pointer z-50" to="/wallet"
            >My Wallet</NuxtLink
          >
          <!-- <NuxtLink class="navbar-items cursor-pointer z-50" to="/wallet"
            >My Order</NuxtLink
          > -->
          <NuxtLink class="navbar-items cursor-pointer z-50" to="/mycar"
            >My Car</NuxtLink
          >
        </div>
        <!-- <NuxtLink class="navbar-items" to="/">Home</NuxtLink> -->
        <div class="mt-3 navbar-items cursor-pointer" @click="handleLogOut">
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
  @Prop({ type: Boolean }) isAdmin!: Boolean;
  isHover: Boolean = false;
  username: String = EMPTY;
  res: Object = {};

  mounted() {
    this.username = this.userInfo.username;
  }
  handleHover() {
    if (this.isHover === false) {
      this.isHover = true;
    } else {
      this.isHover = false;
    }
  }
  handleMouseLeave() {
    if (this.isHover) {
      this.isHover = false;
    }
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
  font-size: 1.5rem;
  line-height: 2rem;
}
</style>
