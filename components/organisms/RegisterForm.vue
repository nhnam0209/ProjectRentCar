<template>
  <div class="border p-3 flex justify-center mx-auto w-fit">
    <div>
      <div class="flex space-x-1">
        <label for="">Fisrt Name:</label>
        <input class="border border-gray-300" type="text" />
      </div>
      <div class="flex space-x-5">
        <label for="">Last Name</label>
        <input class="border border-gray-300" type="text" />
      </div>
      <div>
        <label for="">Gender</label>
        <select  class="border border-gray-300" name="" id="">
            <option value="">Male</option>
            <option value="">Female</option>
            <option value="">Others</option>
        </select>
      </div>
      <div class="flex space-x-7">
        <label for="">Birth of Date</label>
        <input class="border border-gray-300" type="date" />
      </div>
      <div class="flex space-x-5">
        <label for="">Email</label>
        <input class="border border-gray-300" type="email" />
      </div>
      <div class="flex space-x-5">
        <label for="">Username</label>
        <input class="border border-gray-300" type="text" />
      </div>
      <div class="flex space-x-5">
        <label for="">Password</label>
        <input class="border border-gray-300" type="password" />
      </div>
      <div class="flex space-x-5">
        <label for="">ID Card Number</label>
        <input class="border border-gray-300" type="text" />
      </div>
      <div class="flex space-x-5">
        <label for="">Driven Car License</label>
        <input class="border border-gray-300" type="text" />
      </div>
      <div class="flex space-x-5">
        <label for="">Phone Number</label>
        <input class="border border-gray-300" type="number" />
      </div>

      <button class="bg-blue-400 text-white p-2 rounded-lg">Submit</button>
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
