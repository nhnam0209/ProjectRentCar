<template>
  <div class="flex p-10 max-xl:block overflow-auto bg-white">
    <div class="w-1/4 max-xl:w-full">
      <div class="bg-white p-10 w-2/3">
        <div class="font-medium text-xl">Status</div>
        <div class="">
          <select
            class="border border-solid border-black rounded-xl text-center cursor-pointer text-lg mt-2"
          >
            <option value="All">All</option>
            <option value="Active">Active</option>
            <option value="Outages">Outages</option>
            <option value="WaitingForApproval">Waiting for approval</option>
            <option value="Declined">Declined</option>
          </select>
        </div>
      </div>
    </div>
    <div class="w-3/4 max-xl:w-full">
      <div class="bg-white">
        <div class="">
          <table class="w-full border border-solid text-center">
            <tr class="bg-green-500 text-xl text-white">
              <th class="py-2 px-4 max-lg:px-2">ID</th>
              <th class="py-2 px-4 max-lg:px-2">Model</th>
              <th class="py-2 px-4 max-lg:px-2">Seat</th>
              <th class="py-2 px-4 max-lg:px-2">Transition</th>
              <th class="py-2 px-4 max-lg:px-2">Types of fuels</th>
              <th class="py-2 px-4 max-lg:px-2">Number plate</th>
              <th class="py-2 px-4 max-lg:px-2">Status</th>
            </tr>
            <tr class="text-lg">
              <td class="py-2 px-4 max-lg:px-2">1</td>
              <td class="py-2 px-4 max-lg:px-2">Toyota Vios</td>
              <td class="py-2 px-4 max-lg:px-2">4</td>
              <td class="py-2 px-4 max-lg:px-2">Manual</td>
              <td class="py-2 px-4 max-lg:px-2">Diesel</td>
              <td class="py-2 px-4 max-lg:px-2">51F73912</td>
              <td class="py-2 px-4 max-lg:px-2">Available</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  name: "ListCar",
})
export default class extends Vue {}
</script>
