<template>
  <div
    class="fixed top-0 bottom-0 right-0 left-0 items-center flex justify-center h-screen z-10 bg-black/70 "
    :class="{ 'modal-close': isActive }"
  >
    <div
      class="flex justify-center items-center bg-white w-1/3 rounded-lg shadow overflow-hidden relative max-md:w-full max-md:h-full"
    >
      <div class="w-full py-6">
        <h1 class="text-2xl text-center px-6 pb-6 font-bold">Withdraw money</h1>
        <div class="">
          <IconX
            class="w-6 h-6 absolute top-2 right-3 cursor-pointer"
            @icon-x-click="toogleIsActive()"
          ></IconX>
        </div>

        <div class="">
          <div class="" :class="{ 'modal-close': isActiveConfirm }">
            <div class="px-8">
              <h2 class="text-xl font-bold">Choose Your Bank Account</h2>
              <div class="p-4">
                <select
                  name=""
                  id=""
                  class="w-full outline-none border border-solid border-black p-4"
                >
                  <option value="" class="">
                      <span class="text-lg">Vietcombank</span>
                      <span class="text-lg">•••• 9905</span>
                  </option>
                  <option value="" class="">
                    <span class="text-lg">BIDV</span>
                    <span class="text-lg">•••• 9905</span>
                  </option>
                </select>
              </div>
            </div>
            <div class="px-8">
              <h2 class="text-xl font-bold">The Amount you want to withdraw</h2>
              <div class="p-4 pb-0">
                <div class="w-full flex items-center justify-between text-lg pb-2">
                    <label for="" class="text-gray-400">Balance in wallet</label>
                    <label for="" class="font-medium">$32.17</label>
                </div>
                <input type="text" class="border border-solid border-black outline-none p-4 w-full" placeholder="Amount">
              </div>
              <RButton class="btn-assent w-full" nameBtn="Withdraw" @btn-click="toogleIsActiveConfirm()"></RButton>
            </div>
          </div>
          <div class="px-8" v-if="isActiveConfirm">
            <div class="p-4 border-solid border-b border-gray-400">
              <div class="w-full flex items-center justify-between text-lg mb-3">
                  <label for="" class="text-gray-400">Withdraw to bank account</label>
                  <label for="" class="font-medium">Vietcombank</label>
              </div>
              <div class="w-full flex items-center justify-between text-lg mb-3">
                  <label for="" class="text-gray-400">Amount</label>
                  <label for="" class="font-medium">$32.17</label>
              </div>
              <div class="w-full flex items-center justify-between text-lg mb-3">
                  <label for="" class="text-gray-400">Fee</label>
                  <label for="" class="font-medium">Free</label>
              </div>
            </div>
            <div class="my-4">
              <div class="w-full flex items-center justify-between text-xl mb-3">
                  <label for="" class="">Total Amount</label>
                  <label for="" class="font-bold">$32.17</label>
              </div>
              <RButton class="btn-assent w-full my-0" nameBtn="Comfirm"></RButton>
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
  name: "ModalWithdraw",
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
