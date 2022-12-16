<template>
  <nav class="flex justify-between px-5 pt-0.5 h-16 bg-black text-white">
    <div class="text-2xl items-center space-x-10 font-medium flex">
      <NuxtLink class="" to="/">Home</NuxtLink>
    </div>
    <div class="flex items-center space-x-10 text-2xl font-medium">
      <div class=""><NuxtLink to="/aboutus">About Us</NuxtLink></div>
      <button class= "nav-btn-login p-2"><NuxtLink class="" to="/login">Login</NuxtLink></button>
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

<style>
.nav-btn-login{
  border: 1px solid white;  
}

</style>
