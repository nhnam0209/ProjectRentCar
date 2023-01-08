<template>
  <div class="listcard-container ml-1 w-full">
    <div
      class="grid gap-4 grid-cols-2 m-4"
      v-for="cars in carResult"
      :key="cars.id"
    >
      <div
        v-for="car in cars"
        :key="car.id"
        class="product-card p-4 bg-white rounded-xl"
        @click="toogleIsActive(car)"
      >
        <div class="main-images">
          <img
            src="../../static/img/product/vios/vios-15g-cvt-44451619164281.jpg"
            alt=""
            class="img-car"
          />
        </div>
        <div class="cars-details product-card-items">
          <div class="pb-4 flex justify-between">
            <div class="">
              <span class="car-name text-2xl font-bold">{{ car.name }}</span>
              <br />
              <span class="price-car text-xl font-bold text-green-500"
                >${{ car.price }} / day</span
              >
            </div>
            <!-- <div class="rating flex">
              <IconStar class="icon-rating icon-details"></IconStar>
              <IconStar class="icon-rating icon-details"></IconStar>
              <IconStar class="icon-rating icon-details"></IconStar>
              <IconStar class="icon-rating icon-details"></IconStar>
              <IconStar class="icon-rating icon-details"></IconStar>
            </div> -->
          </div>
          <div class="details grid grid-cols-2">
            <div class="flex text-xl">
              <IconPerson class="icon-details"></IconPerson>
              Seat:
              {{ car.seat }}
            </div>
            <!-- <div class="flex text-xl justify-center items-center">
              <IconDoor class="icon-details"></IconDoor>
            </div> -->
            <div class="flex text-xl">
              <IconEngine class="icon-details"></IconEngine>
              Transmission:
              {{ car.transmission }}
            </div>
            <div class="flex text-xl">
              <IconFuel class="icon-details"></IconFuel>
              Fuel Type:
              {{ car.fuel_type }}
            </div>
            <div class="flex text-xl">
              <IconTank class="icon-details"></IconTank>
              Fuel Tank:
              {{ car.fuel }}
            </div>
            <div class="flex text-xl col-span-2">
              <IconTank class="icon-details"></IconTank>
              Fuel Consumption:
              {{ car.fuel_consumption }} / 100km
            </div>
          </div>
        </div>
        <div class="desc product-card-items">
          <div class="flex items-center">
            <IconCheck class="icon-check"></IconCheck>
            <RLabel
              class="sidebar-label"
              nameLabel="Full charge included"
            ></RLabel>
          </div>
          <div class="flex items-center">
            <IconCheck class="icon-check"></IconCheck>
            <RLabel
              class="sidebar-label"
              nameLabel="Average range: 320km"
            ></RLabel>
          </div>
          <div class="flex items-center">
            <IconCheck class="icon-check"></IconCheck>
            <RLabel
              class="sidebar-label"
              nameLabel="Basic protection included"
            ></RLabel>
          </div>
          <div class="flex items-center">
            <IconCheck class="icon-check"></IconCheck>
            <RLabel
              class="sidebar-label"
              nameLabel="Free cancellation up to 48h before pick up"
            ></RLabel>
          </div>
        </div>
        <div class="button product-card-items flex items-center justify-center">
          <RButton class="btn-assent" nameBtn="Select"></RButton>
        </div>
      </div>
      <ModalDetailCar
        v-if="isActive"
        :car-detail="carDetail"
        :is-modal-up="isActive"
        @isModalUp="getIsActive"
      />

      <!-- <div class="product-card p-4 bg-white rounded-xl">
        <div class="main-images">
          <img
            src="../../static/img/product/honda/F4.png"
            alt=""
            class="img-car"
          />
        </div>
        <div class="cars-details product-card-items">
          <div class="pb-4 flex justify-between">
            <span class="car-name text-2xl font-bold">Honda City</span>
            <div class="rating flex">
              <IconStar class="icon-rating icon-details"></IconStar>
              <IconStar class="icon-rating icon-details"></IconStar>
              <IconStar class="icon-rating icon-details"></IconStar>
              <IconStar class="icon-rating icon-details"></IconStar>
              <IconStar class="icon-rating icon-details"></IconStar>
            </div>
          </div>
          <div class="details flex items-center justify-between">
            <div class="flex text-xl justify-center items-center">
              <IconPerson class="icon-details"></IconPerson>
              4
            </div>
            <div class="flex text-xl justify-center items-center">
              <IconDoor class="icon-details"></IconDoor>
              5
            </div>
            <div class="flex text-xl justify-center items-center">
              <IconEngine class="icon-details"></IconEngine>
              A
            </div>
            <div class="flex text-xl justify-center items-center">
              <IconFuel class="icon-details"></IconFuel>
              Diesel
            </div>
            <div class="flex text-xl justify-between items-center">
              <IconTank class="icon-details"></IconTank>
              60l
            </div>
          </div>
        </div>
        <div class="desc product-card-items">
          <div class="flex items-center">
            <IconCheck class="icon-check"></IconCheck>
            <RLabel
              class="sidebar-label"
              nameLabel="Full charge included"
            ></RLabel>
          </div>
          <div class="flex items-center">
            <IconCheck class="icon-check"></IconCheck>
            <RLabel
              class="sidebar-label"
              nameLabel="Average range: 320km"
            ></RLabel>
          </div>
          <div class="flex items-center">
            <IconCheck class="icon-check"></IconCheck>
            <RLabel
              class="sidebar-label"
              nameLabel="Basic protection included"
            ></RLabel>
          </div>
          <div class="flex items-center">
            <IconCheck class="icon-check"></IconCheck>
            <RLabel
              class="sidebar-label"
              nameLabel="Free cancellation up to 48h before pick up"
            ></RLabel>
          </div>
        </div>
        <div class="button product-card-items flex items-center justify-center">
          <RButton class="btn-assent" nameBtn="$52.88 / day"></RButton>
        </div>
      </div> -->
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
  mounted() {
    console.log(this.carResult);
  }

  toogleIsActive(car: any) {
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
}
</script>

<style>
.listcard-container {
  border: 1px solid rgb(107 114 128);
}

.img-car {
  width: 445px;
  height: 266px;
}

.product-card {
  cursor: pointer;
}

.product-card-items {
  margin-bottom: 10px;
}

.icon-details {
  height: 30px;
  width: 30px;
}

.icon-check {
  height: 20px;
  width: 20px;
}

.icon-rating {
  fill: rgb(241, 241, 24);
}
</style>
