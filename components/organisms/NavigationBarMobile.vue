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
    </nav>
</template>


<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
@Component({
  name: "NavigationBarMobile",
})
export default class extends Vue {}
</script>