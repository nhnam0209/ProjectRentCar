<template>
  <div class="p-4 border-t border-b border-black">
    <div class="px-4 flex items-center">
      <span class="font-bold text-2xl mr-5">My Card</span>
      <IconAdd
        class="w-5 h-5 cursor-pointer"
        @icon-add-click="toogleIsActive()"
      ></IconAdd>
    </div>
    <div class="mx-2 flex items-center">
      <div class="m-4">
        <div
          class="text-white relative rounded-xl bg-gray-400 shadow-md h-64 w-96 cursor-pointer"
        >
          <div
            class="absolute rounded-xl left-0 right-0 top-0 bottom-0 flex items-end py-5 px-6"
          >
            <div class="absolute right-4 top-4">
              <button type="button" class="bg-transparent">
                <icon-ellipsis class="fill-white h-6 w-6"></icon-ellipsis>
              </button>
            </div>
            <div class="absolute left-6 top-6">
              <span class="text-lg opacity-50 mb-1 uppercase block font-medium"
                >Card Name</span
              >
              <h1 class="title font-bold text-white text-xl mt-2">
                $ 1,256,90
              </h1>
            </div>
            <div class="">
              <div class="text-xl font-medium mt-5">
                <span
                  class="text-lg opacity-50 mb-1 uppercase block font-medium"
                  >Card Number</span
                >
                •••• 9905
              </div>
              <div class="bottom flex items-center mt-5">
                <div class="card-expiry text-lg font-medium mr-5">
                  <span
                    class="text-lg opacity-50 mb-1 uppercase block font-medium"
                    >Expiry</span
                  >
                  12 / 25
                </div>
                <div class="card-ccv text-lg font-medium">
                  <span
                    class="text-lg opacity-50 mb-1 uppercase block font-medium"
                    >CCV</span
                  >
                  553
                </div>
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
  name: "ListCreditCard",
})
export default class extends Vue {
  isActive: boolean = false;

  toogleIsActive() {
    if (this.isActive == true) {
      this.isActive = false;
    } else {
      this.isActive = true;
    }
  }
}
</script>
