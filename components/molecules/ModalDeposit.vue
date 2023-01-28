<template>
  <div
    class="fixed top-0 bottom-0 right-0 left-0 items-center flex justify-center h-screen z-10 bg-black/70"
    :class="{ 'modal-close': isActive }"
  >
    <div
      class="flex justify-center items-center bg-white w-1/3 rounded-lg shadow overflow-hidden relative max-md:w-full max-md:h-full"
    >
      <div class="w-full py-6">
        <h1 class="text-2xl text-center px-6 pb-6 font-bold">Deposit</h1>
        <div class="">
          <IconX
            class="w-6 h-6 absolute top-2 right-3 cursor-pointer"
            @icon-x-click="toogleIsActive()"
          ></IconX>
        </div>

        <div class="">
          <div class="" :class="{ 'modal-close': isActiveConfirm }">
            <div class="px-8">
              <div class="py-4">
                <div
                  class="w-full flex items-center justify-between text-xl mb-3"
                >
                  <label for="" class="font-medium">Balance in wallet</label>
                  <label for="" class="font-bold">$32.17</label>
                </div>
                <input
                  type="text"
                  class="border border-solid border-black outline-none p-4 w-full"
                  placeholder="Amount"
                />
              </div>
              <div class="py-4">
                <h2 class="text-xl font-medium mb-3">Payment method</h2>
                <div class="">
                  <label
                  for=""
                  class="relative shadow-md border border-solid w-full p-3 rounded-xl text-lg font-medium cursor-pointer mb-3 flex"
                  >
                  <input
                    type="radio"
                    class="radio-deposit"
                    name="bankAccount"
                  />
                  <div class="flex justify-between w-full px-3">
                    <span for="" class="">Vietcombank</span>
                    <span for="">•••• 9905</span>
                  </div>
                  </label>

                  <label
                  for=""
                  class="relative shadow-md border border-solid  w-full p-3 rounded-xl text-lg font-medium cursor-pointer mb-3 flex"
                  >
                  <input
                    type="radio"
                    class="radio-deposit"
                    name="bankAccount"
                  />
                  <div class="flex justify-between w-full px-3">
                    <span for="" class="">Vietcombank</span>
                    <span for="">•••• 9905</span>
                  </div>
                  </label>
                </div>
              </div>
              <RButton
                class="btn-assent w-full"
                nameBtn="Deposit"
                @btn-click="toogleIsActiveConfirm()"
              ></RButton>
            </div>
          </div>
          <div class="px-8" v-if="isActiveConfirm">
            <div class="p-4 border-solid border-b border-gray-400">
              <div
                class="w-full flex items-center justify-between text-lg mb-3"
              >
                <span for="" class="text-gray-400"
                  >Service</span
                >
                <span for="" class="font-medium">Deposit to wallet</span>
              </div>
              <div
                class="w-full flex items-center justify-between text-lg mb-3"
              >
                <span for="" class="text-gray-400">Payment Methods</span>
                <span for="" class="font-medium">Vietcombank</span>
              </div>
              <div
                class="w-full flex items-center justify-between text-lg mb-3"
              >
                <span for="" class="text-gray-400">Amount</span>
                <span for="" class="font-medium">$10.00</span>
              </div>
              <div
                class="w-full flex items-center justify-between text-lg mb-3"
              >
                <span for="" class="text-gray-400">Fee</span>
                <span for="" class="font-medium">Free</span>
              </div>
            </div>
            <div class="my-4">
              <div
                class="w-full flex items-center justify-between text-xl mb-3"
              >
                <span for="" class="">Total Amount</span>
                <span for="" class="font-bold">$10.00</span>
              </div>
              <RButton
                class="btn-assent w-full my-0"
                nameBtn="Comfirm"
              ></RButton>
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
  name: "ModalDeposit",
})
export default class extends Vue {
  isActive: boolean = false;
  isActiveConfirm: boolean = false;
  toogleIsActiveConfirm() {
    if (this.isActiveConfirm == true) {
      this.isActiveConfirm = false;
    } else {
      this.isActiveConfirm = true;
    }
  }
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

input[type="radio"]:checked ~ label{
  border: 1px solid green;
}
</style>
