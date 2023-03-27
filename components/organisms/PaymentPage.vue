<template>
  <div class="flex justify-center items-center bg-gray-200 h-screen">
    <div class="bg-white rounded-xl flex justify-between w-2/3 p-5 shadow">
      <div class="w-3/4 mr-6">
        <div class="bg-no-repeat bg-cover bg-center">
          <img
            src="../../static/img/product/vios/Toyota-Vios-White-4.jpg"
            alt=""
            class="w-full h-3/5"
          />
        </div>
        <div class="w-full mt-6">
          <div class="grid grid-cols-3 bg-gray-200 rounded-xl p-4">
            <div class="flex text-xl my-2">
              <IconPerson class="icon-details"></IconPerson>
              Seat:
              <br />
              <span class="font-normal ml-1"> 4 </span>
            </div>
            <div class="flex text-xl my-2">
              <IconDoor class="icon-details"></IconDoor>
              Model:
              <br />
              <span class="font-normal ml-1"> Toyota </span>
            </div>
            <div class="flex text-xl my-2">
              <IconEngine class="icon-details"></IconEngine>
              Transmission:
              <br />
              <span class="font-normal ml-1"> Manual </span>
            </div>
            <div class="flex text-xl my-2">
              <IconFuel class="icon-details"></IconFuel>
              Fuel Type:
              <br />
              <span class="font-normal ml-1"> 5.1 </span>
            </div>
            <div class="flex text-xl my-2">
              <IconTank class="icon-details"></IconTank>
              Fuel Tank:
              <br />
              <span class="font-normal ml-1"> 60l </span>
            </div>
            <div class="flex text-xl my-2">
              <IconTank class="icon-details"></IconTank>
              Owner:
              <br />
              <span class="font-normal ml-1"> nnn </span>
            </div>
            <div class="flex text-xl col-span-2 my-2">
              <IconTank class="icon-details"></IconTank>
              Fuel Consumption:
              <br />
              <span class="font-normal ml-1"> 4.5 / 100km </span>
            </div>
          </div>
        </div>
      </div>
      <div class="w-1/4">
        <div class="">
          <div class="text-xl">
            <div class="text-2xl font-bold">Toyota Vios</div>
            <div class="flex justify-between items-center text-xl my-4">
              <span class="">Pick up date:</span>
              <span class="">09/01/2023</span>
            </div>
            <div class="flex justify-between items-center text-xl my-4">
              <span class="">Pick up location:</span>
              <span class="text-center">Tan Son Nhat Airport</span>
            </div>
            <div class="flex justify-between items-center text-xl my-4">
              <span class="">Return date:</span>
              <span class="">10/01/2023</span>
            </div>
            <div class="flex justify-between items-center text-xl my-4">
              <span class="">Return location:</span>
              <span class="text-center">Tan Son Nhat Airport</span>
            </div>
            <div class="flex justify-between items-center text-xl my-4">
              <span class="font-bold">Basic rate:</span>
              <span class="font-medium">$42.76</span>
            </div>
            <div class="flex justify-between items-center text-xl my-4">
              <span class="font-bold">Protect:</span>
              <span class="font-medium">Basic $0.00</span>
            </div>
            <div class="flex justify-between items-center text-xl my-4">
              <span class="">Promos:</span>
              <RInput class="border-b"></RInput>
            </div>
            <div
              class="flex justify-between items-center text-xl my-4 pb-4 border-b border-black"
            >
              <span class="font-bold">VAT 10%:</span>
              <span class="font-medium">$4.27</span>
            </div>
            <div class="flex justify-between items-center text-xl my-4">
              <span class="text-2xl font-bold">Total:</span>
              <span class="text-2xl font-bold">$47.03</span>
            </div>
          </div>
        </div>
        <div class="">
          <RButton
            class="btn-success w-full flex items-center justify-center btn-purchase"
            label="Purchase"
          >
            <IconArrowRight
              class="h-6 w-6 fill-white pl-2 move-arrow-right"
            ></IconArrowRight>
          </RButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
@Component({
  name: "PaymentPage",
})
export default class extends Vue {}
</script>

<style>
.btn-purchase:hover .move-arrow-right {
  animation: leftToRight 1.5s ease;
}

@keyframes leftToRight {
  from {
    transform: translateX(0px);
  }
  to {
    transform: translateX(30px);
  }
}
</style>
