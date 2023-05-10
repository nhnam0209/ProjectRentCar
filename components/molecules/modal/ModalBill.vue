<template>
  <div
    class="fixed top-0 bottom-0 right-0 left-0 items-center flex justify-center h-screen z-[99] bg-black/70"
    :class="{ '!hidden': isActive }"
  >
    <div
      class="flex justify-center items-center bg-white w-1/3 rounded-lg shadow relative max-md:w-full max-md:h-full max-md:rounded-none max-xl:w-2/3 box-content overflow-auto"
    >
      <div class="w-full py-6">
        <div class=" max-md:hidden">
          <IconX
            class="w-6 h-6 absolute top-2 right-3 cursor-pointer"
            @icon-x-click="toogleIsActive()"
          ></IconX>
        </div>

        <div class="">
          <div class="px-8">
            <div class="p-4 select-none">
              <h2 class="text-left text-2xl font-medium mb-2">
                Review Ordered Service
              </h2>
              <div
                class="w-full flex items-center justify-between text-lg mb-3 border-solid border-b border-gray-200 pb-1"
              >
                <span class="text-gray-400">Full name</span>
                <span class="font-medium">{{ userInfo.full_name }}</span>
              </div>
              <div
                class="w-full flex items-center justify-between text-lg mb-3 border-solid border-b border-gray-200 pb-1"
              >
                <span class="text-gray-400">Pickup Date</span>
                <span class="font-medium">{{
                  carTransaction.pickup_date
                }}</span>
              </div>
              <div
                class="w-full flex items-center justify-between text-lg mb-3 border-solid border-b border-gray-200 pb-1"
              >
                <span class="text-gray-400">Return Date</span>
                <span class="font-medium">{{
                  carTransaction.return_date
                }}</span>
              </div>
              <div
                class="w-full flex items-center justify-between text-lg mb-3 border-solid border-b border-gray-200 pb-1"
              >
                <span class="text-gray-400">Destination Pickup</span>
                <span class="font-medium">{{
                  carTransaction.destination_pickup
                }}</span>
              </div>
              <div
                class="w-full flex items-center justify-between text-lg mb-3 border-solid border-b border-gray-200 pb-1"
              >
                <span class="text-gray-400">Destination Return</span>
                <span class="font-medium">{{
                  carTransaction.destination_return
                }}</span>
              </div>
              <div
                class="w-full flex items-center justify-between text-lg mb-3 border-solid border-b border-gray-200 pb-1"
              >
                <span class="text-gray-400">Owner</span>
                <span class="font-medium">{{ carDetail.owner }}</span>
              </div>
              <div
                class="w-full flex items-center justify-between text-lg mb-3 border-solid border-b border-gray-200 pb-1"
              >
                <span class="text-gray-400">Protection Plan</span>
                <span class="font-medium">${{ protectedPlan }}</span>
              </div>
              <div
                class="w-full flex items-center justify-between text-lg mb-3 border-solid border-b border-gray-200 pb-1"
              >
                <span class="text-gray-400">Service Fee</span>
                <span class="font-medium">$2</span>
              </div>
              <div
                class="w-full flex items-center justify-between text-lg mb-3 border-solid border-b border-gray-200 pb-1"
              >
                <span class="text-gray-400">Rental Fee</span>
                <span class="font-medium">${{ carDetail.price }}</span>
              </div>
              <div
                class="w-full flex items-center justify-between text-lg border-solid border-b border-gray-200 pb-1"
              >
                <span class="text-gray-400">Total</span>
                <span class="font-medium">${{ totalPrice }}</span>
              </div>
            </div>
            <div class="p-4">
              <h2 class="text-left text-2xl font-medium mb-2">
                Payment Method
              </h2>
              <div class="py-2">
                <input
                  id="wallet"
                  type="radio"
                  name="paymentMethod"
                  class="hidden peer"
                />
                <label
                  for="wallet"
                  class="peer-checked:border-[#5cdb95] peer-checked:fill-[#5cdb95] peer-checked:text-[#5cdb95] peer-checked:border-2 w-full flex items-center justify-between text-lg border-solid border-2 border-gray-400 rounded-xl p-2 cursor-pointer"
                >
                  <icon-wallet class="w-6 h-6"></icon-wallet>
                  <div class="">
                    <span class="text-lg font-medium select-none">Wallet</span>
                  </div>
                </label>
                <div
                    class="flex w-full opacity-0 peer-checked:!opacity-100 items-center justify-between text-base mb-3 border-solid border-b border-gray-200 pb-1"
                  >
                    <span class="text-gray-400">Money in wallet:</span>
                    <span class="font-medium">$70.32</span>
                  </div>
              </div>
              <div class="mb-5">
                <input
                  id="transfer"
                  type="radio"
                  name="paymentMethod"
                  class="hidden peer"
                />
                <label
                  for="transfer"
                  class="peer-checked:border-[#5cdb95] peer-checked:fill-[#5cdb95] peer-checked:text-[#5cdb95] peer-checked:border-2 w-full flex items-center justify-between text-lg border-solid border-2 border-gray-400 rounded-xl p-2 cursor-pointer"
                >
                  <icon-credit-card class="w-6 h-6"></icon-credit-card>
                  <span class="text-lg font-medium select-none">Transfer</span>
                </label>
                <div
                  class="block opacity-0 peer-checked:!opacity-100 text-base font-medium select-none text-right mr-2"
                >
                  <div
                    class="w-full flex items-center justify-between text-base mb-3 border-solid border-b border-gray-200 pb-1"
                  >
                    <span class="text-gray-400">Card Number</span>
                    <span class="font-medium">1234 5678 9012 3456</span>
                  </div>
                  <div
                    class="w-full flex items-center justify-between text-base mb-3 border-solid border-b border-gray-200 pb-1"
                  >
                    <span class="text-gray-400">Card Holder Name</span>
                    <span class="font-medium">Rental Cars Company</span>
                  </div>
                </div>
              </div>
              <r-button
                class="btn-success my-2 w-full"
                label="Confirm"
                @btn-click="handleAddCarAndBill()"
              ></r-button>
              <r-button
                class="btn-close w-full hidden max-md:block my-2"
                label="Cancel"
                @btn-click="toogleIsActive()"
              ></r-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import axios from "axios";

@Component({
  name: "ModalDeposit",
})
export default class extends Vue {
  @Prop({}) carDetail: any;
  @Prop({}) userInfo: any;
  @Prop({}) carTransaction: any;
  @Prop({}) totalPrice: any;
  @Prop({}) protectedPlan: any;
  isActive: boolean = false;
  isSuccessful: boolean = true;

  handleAddCarAndBill() {
    this.handleAddCarTransaction();
    this.handleAddBill();
  }

  async handleAddCarTransaction() {
    try {
      await axios.post(
        "http://localhost:5000/api/cars/addCarsTransactions",
        {
          user_id: this.userInfo.id,
          user_full_name: this.userInfo.full_name,
          owner_id: this.carDetail.user_id,
          owner_full_name: this.carDetail.owner,
          car_id: this.carDetail.id,
          destination_pickup: this.carTransaction.destination_pickup,
          destination_return: this.carTransaction.destination_return,
          pickup_date: this.carTransaction.pickup_date,
          return_date: this.carTransaction.return_date,
          protection_plan: this.protectedPlan,
        },
        {
          headers: {
            Authorization: `${document.cookie}`,
          },
        }
      );
      alert(`Car rental success`);
    } catch (error: any) {
      const errMessage = JSON.stringify(error.response.data.msg);
      alert(errMessage);
    }
  }

  async handleAddBill() {
    try {
      await axios.post(
        "http://localhost:5000/api/bill/add",
        {
          user_id: this.userInfo.id,
          full_name_user: this.userInfo.full_name,
          total: this.totalPrice,
          service_fee: 2,
          rental_fee: this.carDetail.price,
          pickup_date: this.carTransaction.pickup_date,
          return_date: this.carTransaction.return_date,
        },
        {
          headers: {
            Authorization: `${document.cookie}`,
          },
        }
      );
      location.reload();
      // alert(JSON.stringify(this.car));
    } catch (error: any) {
      const errMessage = JSON.stringify(error.response.data.msg);
      alert(errMessage);
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

input[type="radio"]:checked ~ label {
  border: 1px solid green;
}
</style>
