<template>
  <div
    class="flex-col justify-center py-10 my-1 bg-white border-solid border-b border-neutral-500 max-lg:block max-lg:mx-4"
  >
    <div
      class="flex self-center border-solid border border-neutral-900 rounded-xl max-lg:w-full max-lg:block max-lg:border-none lg:mx-20 lg:my-5"
    >
      <div
        class="flex w-1/2 max-2xl:w-2/3 border-r border-solid border-neutral-900 max-lg:border max-lg:border-solid max-lg:border-neutral-900 max-lg:w-full max-lg:rounded-xl max-lg:mb-3 lg:py-2"
      >
        <div class="flex items-center justify-center px-1">
          <icon-location-pin class="icon-fill h-5 w-5" />
        </div>
        <div class="h-full pb-1 w-full">
          <span class="text-gray-500 text-center text-xl"
            >Pick up Location</span
          >
          <div class="h-6" @onFocus="" @onBlur="">
            <input
              type="text"
              class="w-full outline-none"
              ref="searchLocation"
              :placeholder="isFocus ? '' : 'Search Location'"
              v-model="car.location"
              required
            />
          </div>
        </div>
      </div>
      <div
        class="md:flex w-1/2 max-lg:border max-lg:border-solid max-lg:border-neutral-900 max-lg:w-full max-lg:rounded-xl"
      >
        <div
          class="w-full flex justify-center md:border-r md:border-solid md:border-neutral-900 h-full my-3 lg:my-0 lg:py-2"
        >
          <div class="h-full flex flex-col justify-center">
            <div class="flex items-center justify-center px-1">
              <icon-date-time class="icon-fill h-5 w-5 mr-2" />
              <span class="text-gray-500 text-center text-base lg:text-lg"
                >Pick up Time</span
              >
            </div>
            <div class="h-6 flex items-center px-3">
              <input
                type="datetime-local"
                class="lg:w-full outline-none"
                placeholder="Pick up time"
                v-model="car.pickupDate"
                required
              />
            </div>
          </div>
        </div>
        <div
          class="w-full flex justify-center border-t border-solid border-neutral-900 md:border-0 md:py-2"
        >
          <div class="h-full pb-1 flex flex-col justify-center my-3 md:my-0">
            <div class="flex items-center justify-center h-full px-1">
              <icon-date-time class="icon-fill h-5 w-5 mr-2" />
              <span class="text-gray-500 text-center text-base lg:text-lg"
                >Return Time</span
              >
            </div>
            <div class="h-6 flex items-center px-3">
              <input
                type="datetime-local"
                class="lg:w-full outline-none"
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
      <div class="hidden max-lg:block">
        <icon-filter
          class="w-6 h-6 cursor-pointer"
          @icon-filter-click="toogleIsActive()"
        />
      </div>
      <div class="button-search w-52 flex justify-center items-center">
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
import { Component, Vue, Prop, Emit } from "nuxt-property-decorator";
@Component({
  name: "RentalLocation",
})
export default class extends Vue {
  @Prop({ type: Boolean, default: false }) isLoading!: Boolean;
  isActive: Boolean = false;
  isFocus: Boolean = false;

  handleSearchCar() {
    this.$emit("isLoading", true);
    try {
      this.$vxm.car.handleSearchCar(this.car);
      this.$emit("isLoading", false);
    } catch (error) {
      alert("Please try again!!");
      this.$emit("isLoading", false);
    }
  }

  handleFocus() {
    this.isFocus = !this.isFocus;
  }

  handleBlur() {
    this.isFocus = !this.isFocus;
  }

  toogleIsActive() {
    this.isActive = !this.isActive;
  }

  get car() {
    return this.$vxm.car.searchingCar;
  }
}
</script>
