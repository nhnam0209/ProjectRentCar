<template>
  <div
    class="fixed top-0 bottom-0 right-0 left-0 items-center flex justify-center h-screen z-10 bg-black/70"
    :class="{ 'modal-close': isActive }"
  >
    <div
      class="flex justify-center items-center bg-white w-1/3 rounded-lg shadow overflow-hidden relative max-md:w-full max-md:h-full"
    >
      <div class="w-full py-6">
        <h1 class="text-xl text-center px-6 pb-3 font-medium" v-if="isDeposit">Deposit</h1>
        <h1 class="text-xl text-center px-6 pb-3 font-medium" v-else>Withdraw</h1>
        <h2 class="text-2xl text-center px-6 pb-3 font-bold text-green-600" v-if="isDeposit">+$10.00</h2>
        <h2 class="text-2xl text-center px-6 pb-3 font-bold text-red-600" v-else>-$10.00</h2>

        <div class="">
          <IconX
            class="w-6 h-6 absolute top-2 right-3 cursor-pointer"
            @icon-x-click="toogleIsActive()"
          ></IconX>
        </div>

        <div class="">
          <div class="px-8">
            <div class="p-4">
              <div
                class="w-full flex items-center justify-between text-lg mb-3 border-solid border-b border-gray-200 pb-1"
              >
                <span for="" class="text-gray-400">Status</span>
                <span for="" class="font-medium text-green-600" v-if="isSuccessful">Successful</span>
                <span for="" class="font-medium text-red-600" v-else>Fail</span>
              </div>
              <div
                class="w-full flex items-center justify-between text-lg mb-3 border-solid border-b border-gray-200 pb-1"
              >
                <span for="" class="text-gray-400">Wallet Balence</span>
                <span for="" class="font-medium">$42.17</span>
              </div>
              <div
                class="w-full flex items-center justify-between text-lg mb-3 border-solid border-b border-gray-200 pb-1"
              >
                <span for="" class="text-gray-400">Order number</span>
                <span for="" class="font-medium">000001</span>
              </div>
              <div
                class="w-full flex items-center justify-between text-lg mb-3 border-solid border-b border-gray-200 pb-1"
              >
                <span for="" class="text-gray-400">Time</span>
                <span for="" class="font-medium">28/01/2023</span>
              </div>
              <div
                class="w-full flex items-center justify-between text-lg mb-3 border-solid border-b border-gray-200 pb-1"
              >
                <span for="" class="text-gray-400">Fund</span>
                <span for="" class="font-medium">Vietcombank</span>
              </div>
              <div
                class="w-full flex items-center justify-between text-lg mb-3 border-solid border-b border-gray-200 pb-1"
              >
                <span for="" class="text-gray-400">Fee</span>
                <span for="" class="font-medium">Free</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component,Prop, Vue } from "nuxt-property-decorator";
@Component({
  name: "ModalDeposit",
})
export default class extends Vue {
  isDeposit: boolean = true;
  isActive: boolean = false;
  isSuccessful: boolean = true;
 
  toogleIsActive() {
    if (this.isActive == true) {
      this.isActive = false;
    } else {
      this.isActive = true;
    }
  }
}
</script>

<style>
.radio-deposit::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  top: 0;
  left: 0;
}

input[type="radio"]:checked ~ label {
  border: 1px solid green;
}
</style>
