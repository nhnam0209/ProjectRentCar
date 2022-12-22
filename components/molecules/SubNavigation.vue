<template>
  <div class="nav-menu-content">
    <div @mouseenter="handleHover()" @mouseleave="" class="cursor-pointer">
      {{ username }}
    </div>
    <div v-if="isHover" class="bg-green-300 container">
      <div class="sub-menu-container">
        <NuxtLink class="navbar-items" to="/">Profile</NuxtLink>
        <!-- <NuxtLink class="navbar-items" to="/">Home</NuxtLink> -->
        <div class="navbar-items cursor-pointer" @click="handleLogOut">
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
  @Prop({ type: Object }) userInfo!: any;
  isHover: Boolean = false;
  username: String = EMPTY;

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
  handleLogOut() {
    this.$vxm.user.handleLogOut();
    window.location.reload()
    this.$router.push("/");
  }
}
</script>

<style scoped>
.nav-menu-content .container {
  position: relative;
}

div.submenu-container {
  margin: 0 0 0 7px;
}
.nav-menu-content .container::after {
  content: "";
  position: absolute;
  top: -40px;
  right: 0;
  left: 0;
  height: 80px;
}
</style>
