<template>
  <div
    class="background-modal justify-center items-center max-xl:overflow-auto py-5"
  >
    <div
      class="bg-white w-2/3 rounded-xl flex max-xl:block max-md:w-full h-full my-4 overflow-auto"
      :class="{ 'modal-close': isActive }"
    >
      <div
        class="content-left px-4 border border-solid border-neutral-500 max-xl:border-none max-xl:w-full w-2/3 overflow-auto bg-white"
      >
        <div class="">
          <!-- <div class="img-car-detail bg-cover bg-no-repeat w-full"></div> -->
          <img
            :src="carDetail.img"
            alt=""
            class="bg-cover bg-no-repeat w-full"
          />
          <div class="info">
            <div class="cars-details product-card-items">
              <div class="pb-4 flex justify-between">
                <span class="car-name text-3xl font-bold">{{
                  carDetail.name
                }}</span>
                <span
                  class="car-name text-2xl font-bold hidden max-md:block text-green-500"
                  >${{ carDetail.price }} / day</span
                >
              </div>
              <div class="">
                <div
                  class="title-detail mb-4 text-2xl max-xl:text-xl font-bold"
                >
                  Full vehicle details
                </div>
                <div class="details grid grid-cols-2 font-medium">
                  <div class="flex text-xl max-xl:text-lg">
                    <IconPerson class="w-8 h-8"></IconPerson>
                    Seat:
                    <span class="font-normal ml-1">
                      {{ carDetail.seat }}
                    </span>
                  </div>
                  <div class="flex text-xl max-xl:text-lg">
                    <IconDoor class="w-8 h-8"></IconDoor>
                    Model:
                    <span class="font-normal ml-1">
                      {{ carDetail.model }}
                    </span>
                  </div>
                  <div class="flex text-xl max-xl:text-lg">
                    <IconEngine class="w-8 h-8"></IconEngine>
                    Transmission:
                    <span class="font-normal ml-1">
                      {{ carDetail.transmission }}
                    </span>
                  </div>
                  <div class="flex text-xl max-xl:text-lg">
                    <IconFuel class="w-8 h-8"></IconFuel>
                    Fuel Type:
                    <span class="font-normal ml-1">
                      {{ carDetail.fuel_type }}
                    </span>
                  </div>
                  <div class="flex text-xl max-xl:text-lg">
                    <IconTank class="w-8 h-8"></IconTank>
                    Fuel Tank:
                    <span class="font-normal ml-1">
                      {{ carDetail.fuel }}
                    </span>
                  </div>
                  <div class="flex text-xl max-xl:text-lg">
                    <IconTank class="w-8 h-8"></IconTank>
                    Owner:
                    <span class="font-normal ml-1">
                      {{ carDetail.owner }}
                    </span>
                  </div>
                  <div class="flex text-xl max-xl:text-lg col-span-2">
                    <IconTank class="w-8 h-8"></IconTank>
                    Fuel Consumption:
                    <span class="font-normal ml-1">
                      {{ carDetail.fuel_consumption }} / 100km
                    </span>
                  </div>
                </div>
              </div>
              <div class="desc mt-4">
                <div
                  class="title-detail mb-4 text-2xl font-bold max-xl:text-xl"
                >
                  Feature
                </div>
                <p class="text-xl max-xl:text-lg">
                  {{ carDetail.feature }}
                </p>
              </div>
              <div class="desc mt-4">
                <div
                  class="title-detail mb-4 text-2xl font-bold max-xl:text-xl"
                >
                  Description
                </div>
                <p class="text-xl max-xl:text-lg">
                  {{ carDetail.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="border border-solid border-neutral-500 overflow-auto content-right max-xl:border-none w-1/3 max-xl:w-full bg-white"
      >
        <div class="booking-form-modal px-12 pb-3 max-md:py-4 max-md:px-4">
          <div
            class="booking-price text-4xl font-bold text-green-500 text-center my-5 max-md:hidden"
          >
            ${{ carDetail.price }} / day
          </div>

          <div class="booking-pick-up-date my-4">
            <span class="booking-title text-2xl max-xl:text-xl font-bold pb-2"
              >Pick up date</span
            >
            <div class="pt-2">
              <input
                type="date"
                class="w-full booking-input rounded-xl border border-solid p-2 border-neutral-500 outline-none"
                v-model="carTransaction.pickup_date"
              />
            </div>
          </div>

          <div class="booking-return-date my-4">
            <span class="booking-title text-2xl max-xl:text-xl font-bold"
              >Return date</span
            >
            <div class="pt-2">
              <input
                type="date"
                class="w-full booking-input rounded-xl border border-solid p-2 border-neutral-500 outline-none"
                v-model="carTransaction.return_date"
              />
            </div>
          </div>

          <div class="place-of-receipt my-4">
            <span class="booking-title text-2xl max-xl:text-xl font-bold"
              >Destination Pickup</span
            >
            <div class="flex items-center pt-2">
              <icon-location-pin class="w-6 h-6 icon-fill pr-2" />
              <input
                typeInput="text"
                class="w-full text-xl py-2 outline-none border-b border-gray-400"
                v-model="carTransaction.destination_pickup"
              />
            </div>
          </div>
          <div class="place-of-receipt my-4">
            <span class="booking-title text-2xl max-xl:text-xl font-bold"
              >Destination Return</span
            >
            <div class="flex items-center pt-2">
              <icon-location-pin class="w-6 h-6 icon-fill pr-2" />
              <input
                typeInput="text"
                class="w-full text-xl py-2 outline-none border-b border-gray-400"
                v-model="carTransaction.destination_return"
              />
            </div>
          </div>

          <div class="protection-plans my-4">
            <div class="title-sidebar text-2xl max-xl:text-xl font-bold">
              Protection plans
            </div>
            <select
              class="filter text-lg border border-solid p-2 border-neutral-500 outline-none text-center rounded-xl w-full mt-2"
              v-model="protectedPlan"
            >
              <option
                v-for="item in protectionPlan"
                :key="item.id"
                :value="item.value"
              >
                {{ item.name }}
              </option>
            </select>
          </div>

          <div class="total-price">
            <div class="title-sidebar text-2xl max-xl:text-xl font-bold">
              Total Price
            </div>
            <div class="font-medium text-lg">
              <span>SubTotal: </span>
              <span class="font-bold text-lg"
                >{{ carDetail.price }}$ / day</span
              >
            </div>
            <div class="font-medium text-lg">
              <span>Service Fee: </span>
              <span class="font-bold">2$</span>
            </div>
            <div class="font-medium text-lg">
              <span>Protection Plan: </span>
              <span class="font-bold">{{ insurancePlan() }}$</span>
            </div>
            <div class="font-medium text-lg">
              <span>Total: </span>
              <span class="font-bold">{{ total() }}$</span>
            </div>
          </div>

          <div class="button flex items-center justify-around">
            <RButton
              label="Rent Now"
              class="btn-success"
              @click="handleRentCarPage"
            ></RButton>
            <RButton class="btn-close" @click="handleCancel">Cancel</RButton>
          </div>
        </div>
      </div>
    </div>
    <ModalBill
      v-if="isActive"
      :user-info="userInfo"
      :total-price="totalPrice"
      :car-detail="carDetail"
      :protected-plan="protectedPlan"
      :car-transaction="carTransaction"
    ></ModalBill>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "nuxt-property-decorator";

@Component({
  name: "ModalDetailCar",
})
export default class extends Vue {
  @Prop({ type: Object }) carDetail!: any;
  @Prop({}) userInfo: any;
  @Prop({ type: Boolean }) isLogin: any;
  @Prop({ type: Boolean }) isModalUp!: any;
  isClose: Boolean;
  totalPrice: any = 0;
  protectedPlan: any = 0;
  isActive: any = false;
  carTransaction: any = [];
  // mounted() {
  //   console.log(this.carDetail);
  //   console.log(this.isModalUp);
  // }
  protectionPlan = [
    {
      id: 1,
      name: "Basic 0.00$",
      value: 0,
    },
    {
      id: 2,
      name: "Medium 23.20$",
      value: 23.2,
    },
    {
      id: 3,
      name: "Premium 32.68$",
      value: 32.68,
    },
  ];

  toogleIsActive() {
    if (this.isActive == true) {
      this.isActive = false;
    } else {
      this.isActive = true;
    }
  }

  total() {
    return (this.totalPrice = this.carDetail.price + 2 + this.insurancePlan());
  }

  insurancePlan() {
    return this.protectedPlan;
  }

  @Emit()
  handleCancel() {
    if (this.isModalUp) {
      this.$emit("isModalUp", false);
    }
  }

  handleRentCarPage() {
    if (this.isLogin) {
      console.log("ok");
      this.toogleIsActive();
      console.log(this.totalPrice);
    } else {
      this.$router.push("/login");
    }
  }
}
</script>
