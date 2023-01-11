<template>
  <div class="background-modal justify-center items-center">
    <div class="bg-white modal-detail rounded-xl overflow-hidden flex">
      <div class="content-left px-4 border border-solid border-neutral-500">
        <div class="">
          <div class="img-car-detail bg-cover bg-no-repeat w-full"></div>
          <div class="info">
            <div class="cars-details product-card-items">
              <div class="pb-4 flex justify-between">
                <span class="car-name text-2xl font-bold">{{
                  carDetail.name
                }}</span>
                <div class="rating flex">
                  <IconStar class="icon-rating w-8 h-8"></IconStar>
                  <IconStar class="icon-rating w-8 h-8"></IconStar>
                  <IconStar class="icon-rating w-8 h-8"></IconStar>
                  <IconStar class="icon-rating w-8 h-8"></IconStar>
                  <IconStar class="icon-rating w-8 h-8"></IconStar>
                </div>
              </div>
              <div class="text-2xl font-bold">
                <div class="title-detail mb-4">Full vehicle details</div>
                <div class="details grid grid-cols-2">
                  <div class="flex text-xl">
                    <IconPerson class="w-8 h-8"></IconPerson>
                    Seat:
                    <span class="font-normal ml-1">
                      {{ carDetail.seat }}
                    </span>
                  </div>
                  <div class="flex text-xl">
                    <IconDoor class="w-8 h-8"></IconDoor>
                    Model:
                    <span class="font-normal ml-1">
                      {{ carDetail.model }}
                    </span>
                  </div>
                  <div class="flex text-xl">
                    <IconEngine class="w-8 h-8"></IconEngine>
                    Transmission:
                    <span class="font-normal ml-1">
                      {{ carDetail.transmission }}
                    </span>
                  </div>
                  <div class="flex text-xl">
                    <IconFuel class="w-8 h-8"></IconFuel>
                    Fuel Type:
                    <span class="font-normal ml-1">
                      {{ carDetail.fuel_type }}
                    </span>
                  </div>
                  <div class="flex text-xl">
                    <IconTank class="w-8 h-8"></IconTank>
                    Fuel Tank:
                    <span class="font-normal ml-1">
                      {{ carDetail.fuel }}
                    </span>
                  </div>
                  <div class="flex text-xl">
                    <IconTank class="w-8 h-8"></IconTank>
                    Owner:
                    <span class="font-normal ml-1">
                      {{ carDetail.owner }}
                    </span>
                  </div>
                  <div class="flex text-xl col-span-2">
                    <IconTank class="w-8 h-8"></IconTank>
                    Fuel Consumption:
                    <span class="font-normal ml-1">
                      {{ carDetail.fuel_consumption }} / 100km
                    </span>
                  </div>
                </div>
              </div>
              <div class="desc mt-10">
                <div class="title-detail mb-4 text-2xl font-bold">Feature</div>
                <p class="text-xl">
                  {{ carDetail.feature }}
                </p>
              </div>
              <div class="desc mt-10">
                <div class="title-detail mb-4 text-2xl font-bold">
                  Description
                </div>
                <p class="text-xl">
                  {{ carDetail.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="border border-solid border-neutral-500 overflow-hidden content-right"
      >
        <div class="booking-form-modal p-14">
          <div
            class="booking-price text-4xl font-bold text-green-500 text-center my-5"
          >
            ${{ carDetail.price }} / day
          </div>

          <div class="booking-pick-up-date my-4">
            <span class="booking-title text-2xl font-bold pb-2"
              >Pick up date</span
            >
            <div class="pt-2">
              <input
                type="date"
                class="w-full booking-input rounded-xl border border-solid p-2 border-neutral-500 outline-none"
              />
            </div>
          </div>

          <div class="booking-return-date my-4">
            <span class="booking-title text-2xl font-bold">Return date</span>
            <div class="pt-2">
              <input
                type="date"
                class="w-full booking-input rounded-xl border border-solid p-2 border-neutral-500 outline-none"
              />
            </div>
          </div>

          <div class="place-of-receipt my-4">
            <span class="booking-title text-2xl font-bold"
              >Place of receipt</span
            >
            <div class="flex items-center pt-2">
              <icon-location-pin class="w-6 h-6 icon-fill" />
              <input
                typeInput="text"
                class="w-full text-xl py-2 outline-none"
                placeholder="Place of receipt"
              />
            </div>
          </div>

          <div class="protection-plans my-4">
            <div class="title-sidebar text-2xl font-bold">Protection plans</div>
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
            <div class="title-sidebar text-2xl font-bold">Total Price</div>
            <div>
              <span>SubTotal: </span>
              <span>{{ carDetail.price }}$ / day</span>
            </div>
            <div>
              <span>Service Fee: </span>
              <span>2$</span>
            </div>
            <div>
              <span>Protection Plan: </span>
              <span>{{ insurancePlan() }}$</span>
            </div>
            <div>
              <span>Total: </span>
              <span>{{ total() }}$</span>
            </div>
          </div>

          <div class="button flex items-center justify-center">
            <RButton
              nameBtn="Rent Now"
              class="btn-assent m-4"
              @click="handleRentCarPage"
            ></RButton>
            <RButton class="btn-close" @click="handleCancel">Cancel</RButton>
          </div>
        </div>
      </div>
    </div>
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
    } else {
      this.$router.push("/login");
    }
  }
}
</script>

<style>
.content-left {
  width: 800px;
}
.content-right {
  width: 400px;
}

.img-car-detail {
  height: 350px;
  background-image: url(../../static/img/product/vios/vios-15g-cvt-44451619164281.jpg);
}

.modal-detail {
  width: 1200px;
}
</style>
