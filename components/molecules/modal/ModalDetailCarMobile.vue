<template>
  <div
    class="fixed right-0 bottom-0 left-0 top-0 bg-stone-500/50 flex justify-center items-center max-md:py-0 z-[99]"
    :class="{ '!hidden': isClose }"
  >
    <div
      class="bg-white w-3/4 rounded-xl flex max-xl:block max-md:w-full max-md:rounded-none h-full my-4 py-4 overflow-auto relative select-none"
      :class="{ 'modal-close': isActive }"
    >
      <div
        class="content-left px-4 border border-solid border-neutral-500 max-xl:border-none max-xl:w-full w-2/3 max-md:overflow-hidden bg-white"
      >
        <div class="">
          <img
            :src="carDetail.img"
            alt="car_img"
            loading="lazy"
            class="bg-cover bg-no-repeat w-full my-4 rounded-md"
          />
          <div class="info overflow-auto">
            <div class="cars-details product-card-items">
              <div class="my-3">
                <div class="flex">
                  <span class="car-name text-3xl font-bold">{{
                    carDetail.name
                  }}</span>
                </div>
                <div class="booking-price text-2xl font-bold text-green-500">
                  {{ carDetail.price }}$/day
                </div>
              </div>

              <div
                class="border border-solid border-neutral-500 overflow-auto content-right max-xl:border-none w-full bg-white"
              >
                <div
                  class="booking-form-modal pb-3 max-md:py-4 max-md:px-4 w-full"
                >
                  <div class="total-price">
                    <div
                      class="title-sidebar text-2xl max-xl:text-xl font-bold my-2"
                    >
                      Total Price
                    </div>
                    <div class="font-medium text-lg">
                      <span>Rental Fee: </span>
                      <span class="font-bold text-lg"
                        >{{ carDetail.price }}$/day</span
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
                    <hr class="my-1" />
                    <div class="font-medium text-lg">
                      <span class="font-bold">Total: </span>
                      <span class="font-bold">{{ total() }}$</span>
                    </div>
                  </div>

                  <div class="py-2">
                    <div class="booking-pick-up-date my-4">
                      <span
                        class="booking-title text-2xl max-xl:text-xl font-bold pb-2 capitalize"
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
                      <span
                        class="booking-title text-2xl max-xl:text-xl font-bold capitalize"
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
                  </div>
                  <div class="py-2">
                    <div class="place-of-receipt my-4">
                      <span
                        class="booking-title text-2xl max-xl:text-xl font-bold"
                        >Destination Pickup</span
                      >
                      <div class="flex items-center pt-2">
                        <icon-location-pin class="w-6 h-6 icon-fill pr-2" />
                        <input
                          typeInput="text"
                          class="w-full text-xl py-1 outline-none border-b border-gray-400"
                          v-model="carTransaction.destination_pickup"
                          placeholder="Please fill full address"
                        />
                      </div>
                    </div>
                    <div class="place-of-receipt my-4">
                      <span
                        class="booking-title text-2xl max-xl:text-xl font-bold"
                        >Destination Return</span
                      >
                      <div class="flex items-center pt-2">
                        <icon-location-pin class="w-6 h-6 icon-fill pr-2" />
                        <input
                          typeInput="text"
                          class="w-full text-xl py-1 outline-none border-b border-gray-400"
                          v-model="carTransaction.destination_return"
                          placeholder="Please fill full address"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="protection-plans my-3">
                    <div
                      class="title-sidebar text-2xl max-xl:text-xl font-bold"
                    >
                      Protection Plans
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
                </div>
              </div>
              <div class="">
                <div
                  class="title-detail mb-2 text-2xl max-xl:text-xl font-bold capitalize"
                >
                  Vehicle Detail
                </div>
                <div class="details font-medium">
                  <div class="flex text-base max-xl:text-lg my-1">
                    <IconPerson class="w-8 h-8"></IconPerson>
                    Seat:
                    <span class="font-normal ml-1">
                      {{ carDetail.seat }}
                    </span>
                  </div>
                  <div class="flex text-base max-xl:text-lg my-1">
                    <IconDoor class="w-8 h-8" />
                    Model:
                    <span class="font-normal ml-1">
                      {{ carDetail.model }}
                    </span>
                  </div>
                  <div class="flex text-base max-xl:text-lg my-1">
                    <IconEngine class="w-8 h-8" />
                    Transmission:
                    <span class="font-normal ml-1">
                      {{ carDetail.transmission }}
                    </span>
                  </div>
                  <div class="flex text-base max-xl:text-lg my-1">
                    <IconFuel class="w-8 h-8" />
                    Fuel Type:
                    <span class="font-normal ml-1">
                      {{ carDetail.fuel_type }}
                    </span>
                  </div>
                  <div class="flex text-base max-xl:text-lg my-1">
                    <IconTank class="w-8 h-8" />
                    Fuel Tank:
                    <span class="font-normal ml-1">
                      {{ carDetail.fuel }} Litre
                    </span>
                  </div>
                  <div class="flex text-base max-xl:text-lg col-span-2 my-1">
                    <IconTank class="w-8 h-8"></IconTank>
                    Fuel Consumption:
                    <span class="font-normal ml-1">
                      {{ carDetail.fuel_consumption }} Litre/ 100km
                    </span>
                  </div>
                  <div class="flex text-base max-xl:text-lg my-1">
                    <IconPerson class="w-8 h-8" />
                    Owner:
                    <span class="font-normal ml-1">
                      {{ carDetail.owner }}
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
            <div class="button flex items-center justify-around my-5">
              <RButton
                label="Rent Now"
                class="btn-success"
                :is-disabled="isDisabled"
                @click="handleRentCarPage"
              ></RButton>
              <RButton class="btn-close" @click="handleCancel">Cancel</RButton>
            </div>
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
import { Component, Emit, Prop, Vue, Watch } from "nuxt-property-decorator";
import { EMPTY } from "~/utils/constant";

@Component({
  name: "ModalDetailCar",
})
export default class extends Vue {
  @Prop({ type: Object }) carDetail!: any;
  @Prop({}) userInfo: any;
  @Prop({ type: Boolean }) isLogin: any;
  @Prop({ type: Boolean }) isModalUp!: any;
  isClose: Boolean = false;
  totalPrice: any = 0;
  protectedPlan: any = 0;
  isActive: any = false;
  carTransaction: any = {
    pickup_date: EMPTY,
    return_date: EMPTY,
    destination_pickup: EMPTY,
    destination_return: EMPTY,
  };
  isDisabled: Boolean = true;

  @Watch("carTransaction", { deep: true })
  handler(val: any) {
    if (
      val.destination_return != EMPTY &&
      val.destination_pickup != EMPTY &&
      val.pickup_date != EMPTY &&
      val.return_date != EMPTY
    ) {
      this.isDisabled = false;
    }
  }
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

  toogleIsClose() {
    this.isClose ? (this.isClose = false) : (this.isClose = true);
  }

  toogleIsActive() {
    this.isActive ? (this.isActive = false) : (this.isActive = true);
  }

  total() {
    return (this.totalPrice = this.carDetail.price + 2 + this.insurancePlan());
  }

  insurancePlan() {
    return this.protectedPlan;
  }

  @Emit()
  handleCancel() {
    this.isModalUp && this.$emit("isModalUp", false);
  }

  handleRentCarPage() {
    this.isLogin ? this.toogleIsActive() : this.$router.push("/login");
  }
}
</script>
