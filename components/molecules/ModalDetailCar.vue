<template>
  <div class="background-modal justify-center items-center" :class="{'modal-close': isActive}">
    <div class="bg-white modal-detail rounded-xl overflow-hidden flex relative" >
      <div class="">
        <icon-x  class="absolute w-6 h-6 fill-black top-0 right-0 m-4 cursor-pointer" @icon-x-click="toogleIsActive()"></icon-x>
      </div>
      <div class="content-left px-4 border border-solid border-neutral-500">
        <div class="">
          <div class="img-car-detail bg-cover bg-no-repeat w-full"></div>
          <div class="info">
            <div class="cars-details product-card-items">
              <div class="pb-4 flex justify-between">
                <span class="car-name text-2xl font-bold">Toyota Vios</span>
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
                <div class="details flex items-center justify-between mb-4">
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
              <div class="desc">
                <div class="title-detail mb-2 text-2xl font-bold">
                  Description
                </div>
                <p class="text-xl">
                  This is it. Several weeks after Toyota launched a teaser for
                  the next-generation Vios, the world’s largest automaker has
                  pulled the covers off its newest subcompact sedan in Thailand,
                  where the model is known as the Yaris Ativ. The next-gen Vios
                  boasts an all-new exterior and interior, as well as a platform
                  set to underpin more Toyota models for the Asia-Pacific
                  region.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="border border-solid border-neutral-500 overflow-hidden content-right">
        <div class="booking-form-modal p-14">
          <div
            class="booking-price text-4xl font-bold text-green-500 text-center my-5"
          >
            $52.88 / day
          </div>

          <div class="booking-pick-up-date my-4">
            <span class="booking-title text-2xl font-bold pb-2"
              >Pick up date</span
            >
            <div class="pt-2">
              <RInput
                typeInput="date"
                class="w-full border border-solid border-neutral-500 py-1 rounded-xl px-2"
              ></RInput>
            </div>
          </div>

          <div class="booking-return-date my-4">
            <span class="booking-title text-2xl font-bold">Return date</span>
            <div class="pt-2">
              <RInput
                typeInput="date"
                class="w-full border border-solid border-neutral-500 py-1 rounded-xl px-2"
              ></RInput>
            </div>
          </div>

          <div class="place-of-receipt my-4">
            <span class="booking-title text-2xl font-bold"
              >Place of receipt</span
            >
            <div class="flex items-center pt-2">
              <icon-location-pin class="w-6 h-6 icon-fill" />
              <RInput
                typeInput="text"
                class="w-full text-xl py-2"
                placeholderInput="Place of receipt"
              />
            </div>
          </div>

          <div class="protection-plans my-4">
            <div class="title-sidebar text-2xl font-bold">Protection plans</div>
            <select class="filter text-lg">
              <option value="BasicProtection">Basic $0.00</option>
              <option value="MediumProtection">Medium $23.20/day</option>
              <option value="PremiumProtection">Premium $32.68/day</option>
            </select>
          </div>

          <div class="total-price">
            <div class="title-sidebar text-2xl font-bold">Total Price</div>
          </div>

          <div class="button flex items-center justify-center">
            <RButton nameBtn="Rent Now" class="btn-assent"></RButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  name: "ModalDetailCar",
})
export default class extends Vue {
  isActive: Boolean = false;
  toogleIsActive(){
        if(this.isActive == true) {
            this.isActive = false
        }
        else {
            this.isActive = true
        }
    };
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
