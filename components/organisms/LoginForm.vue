<template>
  <div class="border p-3 flex justify-center mx-auto w-fit">
    <div>
      <div class="flex space-x-1">
        <label for="">Username: </label>
        <input class="border border-gray-300" type="text" />
      </div>
      <div class="flex space-x-5">
        <label for="">Password: </label>
        <input class="border border-gray-300" type="password" />
      </div>
      <button class="bg-blue-400 text-white p-2 rounded-lg">Login</button>
      <a href="/register">Don't have account? Register for free</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
@Component({
  name: "SearchBar",
})
export default class extends Vue {

}
</script>
