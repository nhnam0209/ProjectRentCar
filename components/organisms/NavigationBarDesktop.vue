<template>
  <nav class="navbar flex justify-between overflow-hidden">
    <div class="logo"></div>
    <div class="navbar-icon-list flex justify-center items-center">
      <icon-home class="navbar-icons">
        <NuxtLink class="navbar-items" to="/">Home</NuxtLink>
      </icon-home>
      <icon-car class="navbar-icons">
        <NuxtLink class="navbar-items" to="/rentcar">Rent Car</NuxtLink>
      </icon-car>
      <icon-login class="navbar-icons">
        <NuxtLink class="navbar-items" to="/login">Sign In</NuxtLink>
      </icon-login>
      <icon-register class="navbar-icons">
        <NuxtLink class="navbar-items" to="/register">Sign Up</NuxtLink>
      </icon-register>
    </div>
    <div class="navbar-list-items flex justify-center items-center">
      <div v-if="isAdmin">
        <div class="inline-flex">
          <NuxtLink class="navbar-items" to="/dashboardadmin"
            >Dashboard</NuxtLink
          >
          <NuxtLink class="navbar-items" to="/manageuser">Manage User</NuxtLink>
          <NuxtLink class="navbar-items" to="/managecar">Manage Car</NuxtLink>
        </div>
      </div>
      <div v-else>
        <div class="inline-flex">
          <NuxtLink class="navbar-items" to="/">Home</NuxtLink>
          <NuxtLink class="navbar-items" to="/aboutus">About Us</NuxtLink>
          <NuxtLink class="navbar-items" to="/rentcar">Rent Car</NuxtLink>
        </div>
      </div>
      <div v-if="!isLogin">
        <button class="buttons navbar-signin">
          <NuxtLink class="navbar-items" to="/login">Sign In</NuxtLink>
        </button>
        <button class="buttons">
          <NuxtLink class="navbar-items" to="/register">Sign Up</NuxtLink>
        </button>
      </div>
      <div v-else class="px-5">
        <sub-navigation :user-info="userInfo" :is-admin="isAdmin" />
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
        if (res.data.isAdmin == 1) {
          const resAdmin = await axios.get(
            "http://localhost:5000/api/auth/verifyloginAdmin",
            {
              headers: {
                Authorization: `${document.cookie}`,
              },
            }
          );
          this.userInfo = resAdmin.data.data;
          this.isAdmin = true;
          this.isLogin = true;
        } else {
          this.userInfo = res.data.data;
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
