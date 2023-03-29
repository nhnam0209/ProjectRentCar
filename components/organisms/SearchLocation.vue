<template>
  <div
    class="flex justify-center items-center py-4 my-1 bg-white border-solid border-b border-neutral-500 max-lg:block max-lg:mx-4"
  >
    <div
      class="flex border-solid border border-neutral-900 rounded-xl w-1/2 max-lg:w-full max-sm:block max-sm:border-none"
    >
      <div
        class="flex w-1/2 max-lg:w-3/4 border-r border-solid border-neutral-900 max-sm:border max-sm:border-solid max-sm:border-neutral-900 max-sm:w-full max-sm:rounded-xl max-sm:mb-3"
      >
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
              class="w-full outline-none"
              placeholder="Pick up location"
              v-model="car.location"
              required
            />
          </div>
        </div>
      </div>
      <div
        class="flex w-1/2 max-sm:border max-sm:border-solid max-sm:border-neutral-900 max-sm:w-full max-sm:rounded-xl"
      >
        <div
          class="w-full flex justify-center border-r border-solid border-neutral-900 h-full"
        >
          <div class="h-full flex flex-col justify-center">
            <div class="flex items-center justify-center px-1">
              <IconDateTime class="icon-fill h-5 w-5 mr-2" />
              <span class="text-gray-500 text-center text-base lg:text-lg"
                >Pick up time</span
              >
            </div>
            <div class="h-6 flex items-center">
              <input
                type="date"
                class="w-full outline-none items-center"
                placeholder="Pick up time"
                v-model="car.pickupDate"
                required
              />
            </div>
          </div>
        </div>
        <div class="w-full flex justify-center">
          <div class="h-full pb-1 flex flex-col justify-center">
            <div class="flex items-center justify-center h-full px-1">
              <IconDateTime class="icon-fill h-5 w-5 mr-2" />
              <span class="text-gray-500 text-center text-base lg:text-lg"
                >Return time</span
              >
            </div>
            <div class="h-6">
              <input
                type="date"
                class="w-full outline-none"
                placeholder="Return Time"
                v-model="car.returnDate"
                required
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-around items-center ml-5 max-lg:mt-4">
      <div class="hidden max-sm:block">
        <IconFilter
          class="w-6 h-6 cursor-pointer"
          @icon-filter-click="toogleIsActive()"
        ></IconFilter>
      </div>
      <div class="button-search flex justify-center items-center">
        <RButton class="btn-size text-black" @click="handleSearchCar()"
          >Search</RButton
        >
      </div>
    </div>
    <RentCarSideBar
      :class="{ block: isActive }"
      v-if="isActive"
    ></RentCarSideBar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
@Component({
  name: "RentalLocation",
})
export default class extends Vue {
  isActive: boolean = false;

  handleSearchCar() {
    try {
      this.$vxm.car.handleSearchCar(this.car);
    } catch (error) {
      alert("Please try again!!");
    }
  }

  toogleIsActive() {
    if (this.isActive == true) {
      this.isActive = false;
    } else {
      this.isActive = true;
    }
  }

  get car() {
    return this.$vxm.car.searchingCar;
  }
}
</script>
