<template>
  <nav class="flex justify-between px-5 mt-2">
    <NuxtLink to="/">Home.</NuxtLink>
    <div class="flex items-center space-x-10 text-2xl font-medium">
      <div class=""><NuxtLink to="/aboutus">About Us</NuxtLink></div>
      <div class=""><NuxtLink to="/rentcar">Rent Car</NuxtLink></div>
      <div class=""><NuxtLink to="/login">Login</NuxtLink></div>
    </div>
  </nav>
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
@Component({
  name: "NavigationBarDesktop",
})
export default class extends Vue {}
</script>
