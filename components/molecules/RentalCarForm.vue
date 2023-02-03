<template>
  <div class="">
    <div class="py-10" :class="{ 'modal-close': isActive || isActiveReturn }">
      <div class="w-full flex items-center justify-center my-10">
        <div
          class="w-1/2 flex items-center justify-between shadow border border-solid rounded-xl overflow-hidden border-black text-center max-sm:w-full max-md:w-2/3"
        >
          <div
            class="p-2 border-r border-solid border-black text-xl font-bold w-1/3 text-white bg-green-500"
          >
            Infomation
          </div>
          <div
            class="p-2 border-r border-solid border-black text-xl font-bold w-1/3 text-white bg-green-500"
          >
            Rental
          </div>
          <div
            class="p-2 border-solid border-black text-xl font-bold w-1/3 bg-white"
          >
            Photos
          </div>
        </div>
      </div>
      <div class="w-full flex items-center justify-center">
        <div
          class="bg-white w-1/2 p-4 rounded-lg shadow max-md:w-full max-lg:w-2/3"
        >
          <div class="m-4">
            <h6 class="text-xl font-bold">Default rental unit price</h6>
            <p class="text-base text-gray-400 mb-3">
              Rates apply for all days. You can customize other prices for
              special days (weekends, holidays, Tet...) in the vehicle
              management section after registration.
            </p>
            <RInput
              class="border border-solid border-black mr-2 rounded-xl p-1"
            ></RInput
            >USD
          </div>
          <div class="m-4">
            <h6 class="text-xl font-bold">Discount</h6>
            <div class="grid grid-cols-2">
              <div class="">
                <span class="text-lg"
                  >Weekly rental discount (% unit price)</span
                >
                <div class="range-input">
                  <input
                    id="discount-week"
                    type="range"
                    min="0"
                    step="1"
                    max="75"
                    value="5"
                    onmousemove="discountWeekRange.value=value"
                  />
                  <output id="discountWeekRange" class="ml-2 slide-value"></output>%
                </div>
              </div>
              <div class="">
                <span class="text-lg"
                  >Monthly rental discount (% of unit price)</span
                >
                <div class="range-input">
                  <input type="range" min="0" step="1" max="75" value="10" 
                  onmousemove="discountMonthRange.value=value"
                   />
                   <output id="discountMonthRange" class="ml-2 slide-value"></output>%
                </div>
              </div>
            </div>
          </div>
          <div class="m-4">
            <h6 class="text-xl font-bold mb-3">Default delivery address</h6>
            <RInput
              class="border border-solid border-black mr-2 rounded-xl p-1"
            ></RInput>
          </div>
          <div class="m-4">
            <h6 class="text-xl font-bold">Car delivery</h6>
            <div class="grid grid-cols-2">
              <div class="">
                <span class="text-lg">Maximum delivery distance</span>
                <div class="range-input">
                  <input type="range" min="0" step="1" max="50" value="7" 
                  onmousemove="maxDeliveryRange.value=value"
                  />
                  <output id="maxDeliveryRange" class="ml-2 slide-value"></output>%

                </div>
              </div>
              <div class="">
                <span class="text-lg">Car delivery fee per km</span>
                <div class="range-input">
                  <input type="range" min="0" step="1" max="20" value="10" 
                  onmousemove="deliveryFeeRange.value=value"/>
                  $<output id="deliveryFeeRange" class="ml-2 slide-value"></output>/ km
                </div>
              </div>
              <div class="">
                <span class="text-lg">Free car delivery within</span>
                <div class="range-input">
                  <input type="range" min="0" step="1" max="50" value="0" 
                  onmousemove="deliveryFreeRange.value=value"/>
                  <output id="deliveryFreeRange" class="ml-2 slide-value"></output> km
                </div>
              </div>
            </div>
          </div>
          <div class="m-4">
            <div class="text-xl font-bold mb-2">Car rental terms</div>
            <textarea
              class="border border-solid border-black p-2 text-lg rounded-xl w-5/6 h-24 overflow-hidden"
            ></textarea>
          </div>
          <div class="m-4 flex justify-between items-center">
            <RButton
              class="bg-gray-400 w-full mr-4"
              nameBtn="Return"
              @btn-click="toogleIsActiveReturn()"
            ></RButton>
            <RButton
              class="btn-assent w-full"
              nameBtn="Next"
              @btn-click="toogleIsActive()"
            ></RButton>
          </div>
        </div>
      </div>
    </div>
    <PhotosCar v-if="isActive"></PhotosCar>
    <AddNewCar v-if="isActiveReturn"></AddNewCar>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  name: "RentalCarForm",
})
export default class extends Vue {
  isActive = false;
  isActiveReturn = false;

  toogleIsActive() {
    if (this.isActive == true) {
      this.isActive = false;
    } else {
      this.isActive = true;
    }
  }
  toogleIsActiveReturn() {
    if (this.isActiveReturn == true) {
      this.isActiveReturn = false;
    } else {
      this.isActiveReturn = true;
    }
  }
}
</script>

<style>
input[type="range"] {
  -webkit-appearance: none;
  background-color: rgb(185, 185, 185);
  position: relative;
  overflow: visible;
  height: 14px;
  width: 70%;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: black;
  cursor: ew-resize;
  box-shadow: 0 0 2px 0 #555;
  transition: black 0.3s ease-in-out;
}
</style>
