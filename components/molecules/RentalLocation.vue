<template>
  <div
    class="rentalLocation-container flex justify-center items-center py-4 my-1 bg-white"
  >
    <div class="dateime-pickup-car flex rental-location">
      <div class="station-input-return flex w-96">
        <div class="icon-pickup-input flex items-center justify-center">
          <icon-location-pin class="icon-pickup" />
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
      <div class="datetime-pickup-return flex">
        <div class="station-input-return w-full flex">
          <div class="icon-pickup-input flex items-center justify-center">
            <IconDateTime class="icon-pickup" />
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

        <div class="station-input-return w-full flex">
          <div class="icon-pickup-input flex items-center justify-center">
            <IconDateTime class="icon-pickup" />
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

<style>
.rentalLocation-container {
  border-bottom: 1px solid rgb(107 114 128);
}

.rental-location {
  border-radius: 10px;
  border: 1px solid;
}

.station-input-return {
  border-right: 1px solid rgb(107 114 128);
  height: 100%;
}

.station-input-return:last-child {
  border: none;
}
</style>
