<template>
  <div class="listcard-container ml-1 w-full">
    <div class="grid gap-4 grid-cols-3 m-4">
      <div class="product-card p-4 bg-white rounded-xl">
        <div class="main-images">
          <img
            src="../../static/img/product/vios-15g-cvt-44451619164281.jpg"
            alt=""
            class="img-car"
          />
        </div>
        <div class="cars-details product-card-items">
            <div class="pb-4 flex justify-between">
            <span class="car-name text-2xl font-bold">Toyota Vios</span>
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
      </div>

      <div class="product-card p-4 bg-white rounded-xl">
        <div class="main-images">
          <img
            src="../../static/img/product/F4.png"
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
      </div>
      
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
@Component({
  name: "ProductListCard",
})
export default class extends Vue {}
</script>

<style>
.listcard-container {
  border: 1px solid rgb(107 114 128);
}

.img-car{
    width: 445px;
    height: 266px;
}

.product-card{
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

.icon-rating{
    fill: rgb(241, 241, 24);
}
</style>
