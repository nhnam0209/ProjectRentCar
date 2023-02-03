<template>
  <div class="ml-1 w-full">
    <div
      class="grid gap-4 grid-cols-2 m-4 max-md:grid-cols-1"
      v-for="cars in carResult"
      :key="cars.id"
    >
      <div
        v-for="car in cars"
        :key="car.id"
        class="cursor-pointer p-4 bg-white rounded-xl border border-solid border-neutral-500"
        @click="toogleIsActive(car)"
      >
        <div class="flex justify-center">
          <img :src="car.img" alt="" class="w-3/4 h-3/4" />
        </div>
        <div class="cars-details mb-2">
          <div class="pb-4 flex justify-between">
            <div class="">
              <span class="car-name text-2xl font-bold">{{ car.name }}</span>
              <br />
              <span class="price-car text-xl font-bold text-green-500"
                >${{ car.price }} / day</span
              >
            </div>
          </div>
          <div class="details grid grid-cols-2">
            <div class="flex text-xl max-lg:col-span-2 max-lg:text-lg">
              <IconPerson class="w-8 h-8 max-lg:w-6 max-lg:h-6"></IconPerson>
              Seat:
              {{ car.seat }}
            </div>
            <!-- <div class="flex text-xl justify-center items-center">
              <IconDoor class="w-8 h-8"></IconDoor>
            </div> -->
            <div class="flex text-xl max-lg:col-span-2 max-lg:text-lg">
              <IconEngine class="w-8 h-8 max-lg:w-6 max-lg:h-6"></IconEngine>
              Transmission:
              {{ car.transmission }}
            </div>
            <div class="flex text-xl max-lg:col-span-2 max-lg:text-lg">
              <IconFuel class="w-8 h-8 max-lg:w-6 max-lg:h-6"></IconFuel>
              Fuel Type:
              {{ car.fuel_type }}
            </div>
            <div class="flex text-xl max-lg:col-span-2 max-lg:text-lg">
              <IconTank class="w-8 h-8 max-lg:w-6 max-lg:h-6"></IconTank>
              Fuel Tank:
              {{ car.fuel }}
            </div>
            <div class="flex text-xl col-span-2 max-lg:text-lg">
              <IconTank class="w-8 h-8 max-lg:w-6 max-lg:h-6"></IconTank>
              Fuel Consumption:
              {{ car.fuel_consumption }} / 100km
            </div>
          </div>
        </div>
        <div class="mb-2">
          <div class="flex items-center">
            <IconCheck class="w-5 h-5"></IconCheck>
            <RLabel
              class="sidebar-label"
              nameLabel="Full charge included"
            ></RLabel>
          </div>
          <div class="flex items-center">
            <IconCheck class="w-5 h-5"></IconCheck>
            <RLabel
              class="sidebar-label"
              nameLabel="Average range: 320km"
            ></RLabel>
          </div>
          <div class="flex items-center">
            <IconCheck class="w-5 h-5"></IconCheck>
            <RLabel
              class="sidebar-label"
              nameLabel="Basic protection included"
            ></RLabel>
          </div>
          <div class="flex items-center">
            <IconCheck class="w-5 h-5"></IconCheck>
            <RLabel
              class="sidebar-label"
              nameLabel="Free cancellation up to 48h before pick up"
            ></RLabel>
          </div>
        </div>
        <div class="mb-2 flex items-center justify-center">
          <RButton class="btn-assent w-1/2" nameBtn="Select"></RButton>
        </div>
      </div>
      <ModalDetailCar
        v-if="isActive"
        :car-detail="carDetail"
        :is-modal-up="isActive"
        :is-login="isLogin"
        @isModalUp="getIsActive"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
@Component({
  name: "ProductListCard",
})
export default class extends Vue {
  isActive: boolean = false;
  carDetail: any;
  @Prop() carResult!: any;
  @Prop({ type: Boolean }) isLogin!: boolean;

  toogleIsActive(car: any) {
    // this.img;
    console.log(car.img);
    if (this.isActive == true) {
      this.isActive = false;
    } else {
      this.isActive = true;
      this.carDetail = car;
    }
  }

  getIsActive(value: any) {
    this.isActive = value;
  }

  async base64ToImage(base64img: any) {
    var img = new Image();
    img.onload = () => {
      img;
    };
    img.src = base64img;
  }
}
</script>

<style>
.img-car {
  width: 445px;
  height: 266px;
}

.icon-rating {
  fill: rgb(241, 241, 24);
}
</style>
