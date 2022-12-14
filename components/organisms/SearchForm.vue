<template>
  <div class="border p-3 flex justify-center mx-auto w-fit">
    <div>
      <div class="flex space-x-1">
        <label for="">Destination</label>
        <input class="border border-gray-300" type="text" />
      </div>
      <div class="flex space-x-5">
        <label for="">Pick Up Date</label>
        <input class="border border-gray-300" type="date" />
      </div>
      <div class="flex space-x-7">
        <label for="">Return Date</label>
        <input class="border border-gray-300" type="date" />
      </div>
      <button class="bg-blue-400 text-white p-2 rounded-lg">Search The Car</button>
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
