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
            <tr class="bg-[#379683] text-xl text-white">
              <th class="py-2 px-4 max-lg:px-2">ID</th>
              <th class="py-2 px-4 max-lg:px-2">Model</th>
              <th class="py-2 px-4 max-lg:px-2">Seat</th>
              <th class="py-2 px-4 max-lg:px-2">Transmission</th>
              <th class="py-2 px-4 max-lg:px-2">Types of fuels</th>
              <th class="py-2 px-4 max-lg:px-2">Number plate</th>
              <th class="py-2 px-4 max-lg:px-2">Status</th>
            </tr>
            <div v-if="myCars.length > 0">
              <tr class="text-lg" v-for="myCar in myCars" :key="myCar.id">
                <td class="py-2 px-4 max-lg:px-2">{{ myCar.id }}</td>
                <td class="py-2 px-4 max-lg:px-2">{{ myCar.name }}</td>
                <td class="py-2 px-4 max-lg:px-2">{{ myCar.seat }}</td>
                <td class="py-2 px-4 max-lg:px-2">{{ myCar.transmission }}</td>
                <td class="py-2 px-4 max-lg:px-2">{{ myCar.fuel_type }}</td>
                <td class="py-2 px-4 max-lg:px-2">{{ myCar.plate_number }}</td>
                <td class="py-2 px-4 max-lg:px-2">{{ myCar.status }}</td>
              </tr>
            </div>
            <div v-else class="w-full">
              <span class="text-center flex w-full self-center">
                There is no car available!!
              </span>
            </div>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({
  name: "ListCars",
})
export default class extends Vue {
  @Prop({}) myCars: any;
}
</script>
