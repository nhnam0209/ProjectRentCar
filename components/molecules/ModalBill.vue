<template>
  <div
    class="fixed top-0 bottom-0 right-0 left-0 items-center flex justify-center h-screen z-10 bg-black/70"
    :class="{ 'modal-close': isActive }"
  >
    <div
      class="flex justify-center items-center bg-white w-1/3 rounded-lg shadow overflow-hidden relative max-md:w-full max-md:h-full max-xl:w-2/3"
    >
      <div class="w-full py-6">
        <h1 class="text-3xl text-center px-6 pb-3 font-bold">Confirm</h1>

        <div class="">
          <IconX
            class="w-6 h-6 absolute top-2 right-3 cursor-pointer"
            @icon-x-click="toogleIsActive()"
          ></IconX>
        </div>

        <div class="">
          <div class="px-8">
            <div class="p-4">
              <!-- <div
                class="w-full flex items-center justify-between text-lg mb-3 border-solid border-b border-gray-200 pb-1"
              >
                <span for="" class="text-gray-400">Status</span>
                <span for="" class="font-medium text-green-600" v-if="isSuccessful">Successful</span>
                <span for="" class="font-medium text-red-600" v-else>Fail</span>
              </div> -->
              <div
                class="w-full flex items-center justify-between text-lg mb-3 border-solid border-b border-gray-200 pb-1"
              >
                <span for="" class="text-gray-400">Full name</span>
                <span for="" class="font-medium">{{ userInfo.full_name }}</span>
              </div>
              <div
                class="w-full flex items-center justify-between text-lg mb-3 border-solid border-b border-gray-200 pb-1"
              >
                <span for="" class="text-gray-400">Pickup Date</span>
                <span for="" class="font-medium">{{
                  carTransaction.pickup_date
                }}</span>
              </div>
              <div
                class="w-full flex items-center justify-between text-lg mb-3 border-solid border-b border-gray-200 pb-1"
              >
                <span for="" class="text-gray-400">Return Date</span>
                <span for="" class="font-medium">{{
                  carTransaction.return_date
                }}</span>
              </div>
              <div
                class="w-full flex items-center justify-between text-lg mb-3 border-solid border-b border-gray-200 pb-1"
              >
                <span for="" class="text-gray-400">Destination Pickup</span>
                <span for="" class="font-medium">{{
                  carTransaction.destination_pickup
                }}</span>
              </div>
              <div
                class="w-full flex items-center justify-between text-lg mb-3 border-solid border-b border-gray-200 pb-1"
              >
                <span for="" class="text-gray-400">Destination Return</span>
                <span for="" class="font-medium">{{
                  carTransaction.destination_return
                }}</span>
              </div>
              <div
                class="w-full flex items-center justify-between text-lg mb-3 border-solid border-b border-gray-200 pb-1"
              >
                <span for="" class="text-gray-400">Protection Plan</span>
                <span for="" class="font-medium">${{ protectedPlan }}</span>
              </div>
              <div
                class="w-full flex items-center justify-between text-lg mb-3 border-solid border-b border-gray-200 pb-1"
              >
                <span for="" class="text-gray-400">Service Fee</span>
                <span for="" class="font-medium">$2</span>
              </div>
              <div
                class="w-full flex items-center justify-between text-lg mb-3 border-solid border-b border-gray-200 pb-1"
              >
                <span for="" class="text-gray-400">Total</span>
                <span for="" class="font-medium">${{ totalPrice }}</span>
              </div>
            </div>
            <RButton
              class="btn-success w-full"
              label="Confirm"
              @btn-click="handleAddCarAndBill()"
            ></RButton>
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
  isDeposit: boolean = true;
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
          owner_id: this.carDetail.user_id,
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
      // alert(JSON.stringify(this.car));
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
          rental_fee: 0,
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
