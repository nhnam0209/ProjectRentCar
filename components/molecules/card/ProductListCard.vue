<template>
  <div class="ml-1 w-full">
    <div
      class="grid gap-5 grid-cols-3 m-4 max-md:grid-cols-1"
      v-for="cars in carResult"
      :key="cars.id"
    >
      <div
        v-for="car in cars"
        :key="car.id"
        class="cursor-pointer p-4 bg-white rounded-xl border border-solid border-neutral-500"
        @click="toogleIsActive(car)"
      >
        <img
          :src="car.img"
          alt="image_car"
          class="w-full h-auto rounded-md my-4"
        />

        <div class="cars-details mb-2">
          <div class="pb-4 flex justify-between">
            <div class="">
              <span class="car-name text-2xl font-bold">{{ car.name }}</span>
              <br />
              <span class="price-car text-xl font-bold text-green-500"
                >${{ car.price }}/day</span
              >
            </div>
          </div>
          <div class="details grid grid-cols-2 gap-3">
            <div class="flex text-base max-lg:col-span-2 max-lg:text-lg my-2">
              <icon-location class="w-5 h-5 max-lg:w-6 max-lg:h-6" />
              <span class="capitalize ml-2 flex self-center">
                {{ car.province }}
              </span>
            </div>
            <div class="flex text-base max-lg:col-span-2 max-lg:text-lg">
              <icon-people class="w-8 h-8 max-lg:w-6 max-lg:h-6" />
              <span class="capitalize ml-2 flex self-center">
                {{ car.seat }} seats
              </span>
            </div>
            <div class="flex text-base max-lg:col-span-2 max-lg:text-base">
              <IconEngine class="w-7 h-7 max-lg:w-6 max-lg:h-6"></IconEngine>
              <span class="capitalize ml-2 flex self-center">
                {{ car.transmission }}
              </span>
            </div>
            <div class="flex text-base max-lg:col-span-2 max-lg:text-base">
              <icon-car-side class="w-7 h-7 max-lg:w-6 max-lg:h-6" />
              <span class="capitalize ml-3 flex self-center">
                {{ car.type_car }}
              </span>
            </div>
          </div>
        </div>
        <div class="mb-2 flex items-center justify-center">
          <RButton class="btn-success w-1/2 my-5" label="Select"></RButton>
        </div>
      </div>
      <modal-detail-car
        v-if="isActive && !isMobile"
        :car-detail="carDetail"
        :is-modal-up="isActive"
        :is-login="isLogin"
        :user-info="userInfo"
        @isModalUp="getIsActive"
      />
      <modal-detail-car-mobile
        v-if="isActive && isMobile"
        :car-detail="carDetail"
        :is-modal-up="isActive"
        :is-login="isLogin"
        :user-info="userInfo"
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
  @Prop({ default: [] }) userInfo: any;

  toogleIsActive(car: any) {
    console.log(car);
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

  get isMobile() {
    return this.$screen.width < 1024;
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
