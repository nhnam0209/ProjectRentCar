<template>
  <nav class="h-16 flex justify-between overflow-hidden">
    <div class="bg-no-repeat bg-cover bg-center w-24 h-full">
      <img src="../../static/img/logo.jpg" alt="" />
    </div>
    <div class="flex justify-center items-center">
      <icon-home class="h-7 w-7 mx-5 h-">
        <NuxtLink class="navbar-items" to="/">Home</NuxtLink>
      </icon-home>
      <icon-car class="h-7 w-7 mx-5">
        <NuxtLink class="navbar-items" to="/rentcar">Rent Car</NuxtLink>
      </icon-car>
      <icon-login class="h-7 w-7 mx-5">
        <NuxtLink class="navbar-items" to="/login">Sign In</NuxtLink>
      </icon-login>
      <icon-register class="h-7 w-7 mx-5">
        <NuxtLink class="navbar-items" to="/register">Sign Up</NuxtLink>
      </icon-register>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
@Component({
  name: "NavigationBarMobile",
})
export default class extends Vue {}
</script>
