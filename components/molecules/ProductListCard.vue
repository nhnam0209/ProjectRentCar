<template>
  <div class="listcard-container ml-1 w-full border border-solid border-neutral-500">
    <div class="grid gap-4 grid-cols-3 m-4">
      <div class="cursor-pointer p-4 bg-white rounded-xl" @click="toogleIsActive()">
        <div class="main-images">
          <img
            src="../../static/img/product/vios/vios-15g-cvt-44451619164281.jpg"
            alt=""
            class="img-car"
          />
        </div>
        <div class="cars-details mb-2">
            <div class="pb-4 flex justify-between">
              <div class="">
                <span class="text-2xl font-bold">Toyota Vios</span>
                <br/>
                <span class="price-car text-xl font-bold text-green-500">$52.88 / day</span>
              </div>
            <div class="flex">
                <IconStar class="icon-rating w-8 h-8"></IconStar>
                <IconStar class="icon-rating w-8 h-8"></IconStar>
                <IconStar class="icon-rating w-8 h-8"></IconStar>
                <IconStar class="icon-rating w-8 h-8"></IconStar>
                <IconStar class="icon-rating w-8 h-8"></IconStar>
            </div>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex text-xl justify-center items-center">
              <IconPerson class="w-8 h-8"></IconPerson>
              4
            </div>
            <div class="flex text-xl justify-center items-center">
              <IconDoor class="w-8 h-8"></IconDoor>
              5
            </div>
            <div class="flex text-xl justify-center items-center">
              <IconEngine class="w-8 h-8"></IconEngine>
              A
            </div>
            <div class="flex text-xl justify-center items-center">
              <IconFuel class="w-8 h-8"></IconFuel>
              Diesel
            </div>
            <div class="flex text-xl justify-between items-center">
              <IconTank class="w-8 h-8"></IconTank>
              60l
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
          <RButton class="btn-assent" nameBtn="Select"></RButton>
        </div>
      </div>
      <ModalDetailCar v-if="isActive"></ModalDetailCar>

      <div class="cursor-pointer p-4 bg-white rounded-xl " @click="toogleIsActive()">
        <div class="main-images">
          <img
            src="../../static/img/product/honda/F4.png"
            alt=""
            class="img-car"
          />
        </div>
        <div class="mb-2">
          <div class="pb-4 flex justify-between">
            <div class="">
                <span class="text-2xl font-bold">Honda City</span>
                <br/>
                <span class="text-xl font-bold text-green-500">$60.21 / day</span>
              </div>
            <div class="flex">
                <IconStar class="icon-rating w-8 h-8"></IconStar>
                <IconStar class="icon-rating w-8 h-8"></IconStar>
                <IconStar class="icon-rating w-8 h-8"></IconStar>
                <IconStar class="icon-rating w-8 h-8"></IconStar>
                <IconStar class="icon-rating w-8 h-8"></IconStar>
            </div>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex text-xl justify-center items-center">
              <IconPerson class="w-8 h-8"></IconPerson>
              4
            </div>
            <div class="flex text-xl justify-center items-center">
              <IconDoor class="w-8 h-8"></IconDoor>
              5
            </div>
            <div class="flex text-xl justify-center items-center">
              <IconEngine class="w-8 h-8"></IconEngine>
              A
            </div>
            <div class="flex text-xl justify-center items-center">
              <IconFuel class="w-8 h-8"></IconFuel>
              Diesel
            </div>
            <div class="flex text-xl justify-between items-center">
              <IconTank class="w-8 h-8"></IconTank>
              60l
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
          <RButton class="btn-assent" nameBtn="Select"></RButton>
        </div>
      </div>
      
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
@Component({
  name: "ProductListCard",
})
export default class extends Vue {
  isActive: boolean = false;

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
.img-car{
    width: 445px;
    height: 266px;
}

.icon-rating{
    fill: rgb(241, 241, 24);
}
</style>
