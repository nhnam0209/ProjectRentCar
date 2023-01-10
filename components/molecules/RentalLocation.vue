<template>
  <div
    class="flex justify-center items-center py-4 my-1 bg-white border-solid border-b border-neutral-500"
  >
    <div class="flex border-solid border border-neutral-900 rounded-xl">
      <div class="flex w-96 border-r border-solid border-neutral-900">
        <div class="flex items-center justify-center px-1">
          <icon-location-pin class="icon-fill cursor-pointer h-5 w-5" />
        </div>
        <div class="h-full pb-1 w-full">
          <span class="text-gray-500 text-center text-xl"
            >Pick up location</span
          >
          <div class="h-6">
            <input
              type="text"
              class="w-full"
              placeholder="Pick up location"
              v-model="car.location"
              required
            />
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="w-full flex border-r border-solid border-neutral-900 h-full">
          <div class="flex items-center justify-center px-1">
            <IconDateTime class="icon-fill cursor-pointer h-5 w-5" />
          </div>
          <div class="h-full pb-1">
            <span class="text-gray-500 text-center text-xl">Pick up time</span>
            <div class="h-6">
              <input
                type="date"
                class="w-full"
                placeholder="Pick up time"
                v-model="car.pickupDate"
                required
              />
            </div>
          </div>
        </div>

        <div class="w-full flex">
          <div class="flex items-center justify-center h-full px-1">
            <IconDateTime class="icon-fill cursor-pointer h-5 w-5" />
          </div>
          <div class="h-full pb-1">
            <span class="text-gray-500 text-center text-xl">Return time</span>
            <div class="h-6">
              <input
                type="date"
                class="w-full"
                placeholder="Return Time"
                v-model="car.returnDate"
                required
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center items-center ml-5">
      <div class="button-search flex justify-center items-center">
        <RButton class="btn-search text-black" @click="handleSearchCar()"
          >Search</RButton
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
@Component({
  name: "RentalLocation",
})
export default class extends Vue {
  handleSearchCar() {
    try {
      this.$vxm.car.handleSearchCar(this.car);
    } catch (error) {
      alert("Please try again!!");
    }
  }

  get car() {
    return this.$vxm.car.searchingCar;
  }
}
</script>
