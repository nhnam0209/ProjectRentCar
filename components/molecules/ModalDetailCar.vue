<template>
  <div class="background-modal justify-center items-center">
    <div class="bg-white modal-detail rounded-xl overflow-hidden flex">
      <div class="content-left px-4">
        <div class="image-box">
          <div class="img-car-detail bg-cover bg-no-repeat"></div>
          <div class="info">
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
              <div class="text-2xl font-bold">
                <div class="title-detail mb-4">Full vehicle details</div>
                <div class="details flex items-center justify-between mb-4">
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
              <div class="desc">
                <div class="title-detail mb-4 text-2xl font-bold">
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
      <div class="content-right">
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
                class="w-full booking-input rounded-xl"
              ></RInput>
            </div>
          </div>

          <div class="booking-return-date my-4">
            <span class="booking-title text-2xl font-bold">Return date</span>
            <div class="pt-2">
              <RInput
                typeInput="date"
                class="w-full booking-input rounded-xl"
              ></RInput>
            </div>
          </div>

          <div class="place-of-receipt my-4">
            <span class="booking-title text-2xl font-bold"
              >Place of receipt</span
            >
            <div class="flex items-center pt-2">
              <icon-location-pin class="icon-pickup" />
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
export default class extends Vue {}
</script>

<style>
.content-left {
  width: 800px;
  border: 1px solid rgb(107 114 128);
}
.content-right {
  width: 400px;
  border: 1px solid rgb(107 114 128);
  overflow: hidden;
}

.booking-input {
  border: 1px solid rgb(107 114 128);
  padding: 5px 0;
}

.img-car-detail {
  width: 100%;
  height: 400px;
  background-image: url(../../static/img/product/vios/vios-15g-cvt-44451619164281.jpg);
}

.modal-detail {
  width: 1200px;
}
</style>
