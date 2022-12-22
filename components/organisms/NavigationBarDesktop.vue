<template>
  <nav class="navbar flex justify-between overflow-hidden">
    <div class="logo"></div>
    <div class="navbar-icon-list flex justify-center items-center">
      <fa class="navbar-icons" icon="fa-solid fa-house">
        <NuxtLink class="navbar-items" to="/">Home</NuxtLink>
      </fa>
      <fa class="navbar-icons" icon="fa-solid fa-right-to-bracket">
        <NuxtLink class="navbar-items" to="/login">Sign In</NuxtLink>
      </fa>
      <fa class="navbar-icons" icon="fa-regular fa-registered">
        <NuxtLink class="navbar-items" to="/register">Sign Up</NuxtLink>
      </fa>
    </div>
    <div class="navbar-list-items flex justify-center items-center">
      <div class="">
        <NuxtLink class="navbar-items" to="/">Home</NuxtLink>
      </div>
      <div class="">
        <NuxtLink class="navbar-items" to="/aboutus">About Us</NuxtLink>
      </div>
      <div v-if="!isLogin">
        <button class="buttons navbar-signin">
          <NuxtLink class="navbar-items" to="/login">Sign In</NuxtLink>
        </button>
        <button class="buttons">
          <NuxtLink class="navbar-items" to="/register">Sign Up</NuxtLink>
        </button>
      </div>
      <div v-else class="px-5 relative">
        <sub-navigation class="" :user-info="userInfo" />
      </div>
    </div>
  </nav>
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { EMPTY } from "~/utils/constant";
import axios from "../../utils/myAxios";

@Component({
  name: "NavigationBarDesktop",
})
export default class extends Vue {
  isLogin: Boolean = false;
  userInfo: any = {}

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
        this.isLogin = true;
        this.userInfo = res.data.data;
        console.log(res.data);
      }
    } catch (error) {
      this.isLogin = false;
    }
  }
}
</script>

<style>
.navbar {
  height: 60px;
}

.navbar-icon-list {
  display: none;
}

.logo {
  background: url(../../static/img/logo.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100px;
}

.navbar-signin {
  position: relative;
}

.navbar-signin::before {
  content: "";
  position: absolute;
  border-right: 2px solid black;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
}

.navbar-items {
  margin-left: 26px;
  margin-right: 26px;
  font-size: 1.5rem;
  line-height: 2rem;
  position: relative;
}

.navbar-items::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  width: 0%;
  background: #00a550;
  border-radius: 12px;
  transition: all 0.6s ease;
}

.navbar-items:hover::before {
  width: 100%;
}

.navbar-icons {
  height: 30px;
  width: 30px;
  margin: 0 20px;
}

@media (max-width: 820px) {
  .navbar-list-items {
    display: none;
  }

  .navbar-icon-list {
    display: flex;
  }
}
</style>
