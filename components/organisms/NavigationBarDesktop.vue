<template>
  <nav class="navbar flex justify-between items-center px-4">
      <div class="logo">
      </div>
      <div class="navbar-route flex justify-center items-center">
        <div class="navbar-list">
          <NuxtLink class="navbar-items" to="/">Home</NuxtLink>
        </div>
        <div class="navbar-list">
          <NuxtLink class="navbar-items" to="/aboutus">About Us</NuxtLink>
        </div>
        <div class="navbar-list navbar-signin">
          <NuxtLink class="navbar-items" to="/login">Sign In</NuxtLink>
        </div>
        <div class="navbar-list">
          <NuxtLink class="navbar-items" to="/register">Sign Up</NuxtLink>
        </div>
      </div>
      <div class="navbar-list-icons flex items-center justify-center">
        <icon-home class="navbar-icons"></icon-home>
        <icon-login class="navbar-icons"></icon-login>
        <icon-register class="navbar-icons"></icon-register>
      </div>
    </nav>
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import iconHome from "../logos/iconHome.vue";
import IconLogin from "../logos/iconLogin.vue";
import IconRegister from "../logos/iconRegister.vue";
@Component({
  components: { iconHome, IconLogin, IconRegister },
  name: "NavigationBarDesktop",
})
export default class extends Vue {}
</script>

<style>
.navbar{
  height: 60px;
}

.logo{
  width: 100px;
  height: 60px;
  background: url(../../static/img/logo.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.navbar-signin{
  position: relative;
}

.navbar-signin::before{
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  border-right: 2px solid black;
}

.navbar-items{
  font-size: 1.5rem;
  line-height: 2rem;  
  position: relative;
  padding-bottom: 4px;
  margin: 0 30px;
}

.navbar-items::before{
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  width: 0%;
  background: #00a550;
  border-radius: 12px;
  transition: all 0.5s ease;
}

.navbar-items:hover::before{
  width: 100%;
}

.navbar-list-icons{
  display: none;
}

.navbar-icons{
  height: 30px;
  width: 30px;
  margin: 0 20px;
}

@media(max-width: 820px){
.navbar-route{
  display: none ;
}

.navbar-list-icons{
  display: flex;
}

}

</style>
