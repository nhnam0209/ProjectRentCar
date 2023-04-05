<template>
  <div class="p-4 border-t border-b border-black overflow-auto">
    <div class="px-4 flex items-center">
      <span class="font-bold text-2xl mr-5">My Bank Account</span>
      <IconAdd
        class="w-5 h-5 cursor-pointer"
        @icon-add-click="toogleIsActive()"
      ></IconAdd>
    </div>
    <div class="mx-2 flex items-center" v-if="bankAccounts">
      <div class="m-4">
        <div
          class="text-white relative rounded-xl bg-gray-400 shadow-md h-64 w-96 cursor-pointer"
        >
          <div
            class="absolute rounded-xl left-0 right-0 top-0 bottom-0 flex items-end py-5 px-6"
          >
            <div class="absolute right-4 top-4 icon-card">
              <button type="button" class="bg-transparent">
                <icon-ellipsis class="fill-white h-6 w-6"></icon-ellipsis>
              </button>
              <div
                class="subnav-removecard absolute top-6 right-0 text-black bg-gray-200 px-2"
              >
                Remove
              </div>
            </div>
            <div class="absolute left-6 top-6">
              <span class="text-lg opacity-50 mb-1 uppercase block font-medium"
                >Card Holder Name</span
              >
              <h1 class="title font-bold text-white text-xl mt-2">
                {{ bankAccounts.full_name }}
              </h1>
            </div>
            <div class="">
              <div class="text-xl font-medium mt-5">
                <span
                  class="text-lg opacity-50 mb-1 uppercase block font-medium"
                  >Card Number</span
                >
                {{ bankAccounts.bank_account }}
              </div>
              <div class="bottom flex items-center mt-5">
                <div class="card-expiry text-lg font-medium mr-5">
                  <span
                    class="text-lg opacity-50 mb-1 uppercase block font-medium"
                    >Expire</span
                  >
                  {{ bankAccounts.expire_date }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AddBankAccount v-if="isActive" :user-info="userInfo"></AddBankAccount>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({
  name: "ListCreditCard",
})
export default class extends Vue {
  isActive: boolean = false;
  @Prop({}) walletInfo!: any;
  @Prop({}) userInfo!: any;
  @Prop({}) bankAccounts!: any;

  toogleIsActive() {
    this.isActive ? (this.isActive = false) : (this.isActive = true);
  }
}
</script>
<style>
.subnav-removecard {
  display: none;
}
.icon-card:hover .subnav-removecard {
  display: block !important;
}
</style>
