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
            class="p-2 border-solid border-black text-xl font-bold w-1/3 text-white bg-green-500"
          >
            Photos
          </div>
        </div>
      </div>
      <div class="w-full flex items-center justify-center">
        <div class="bg-white w-1/2 p-4 rounded-lg shadow max-md:w-full max-lg:w-2/3">
          <div class="m-4">
            <h6 class="text-xl font-bold">Photos</h6>
            <p class="text-base text-gray-400 mb-3">
              Post multiple pictures at different angles to increase your
              vehicle's information.
            </p>
            <RButton class="btn-assent" nameBtn="Choose image"></RButton>
            <div class="grid grid-cols-2 gap-4">
              <div class="bg-center bg-cover bg-no-repeat relative">
                <img src="../../static/img/car-profile.jpg" alt="" class="" />
                <IconX
                  class="absolute top-0 right-0 w-4 h-4 fill-black cursor-pointer"
                ></IconX>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  name: "PhotosCar",
})
export default class extends Vue {
  isActive: boolean = false;
  isActiveReturn: boolean = false;

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
