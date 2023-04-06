<template>
  <div class="">
    <div class="py-10" :class="{ 'modal-close': isActive }">
      <div class="w-full flex items-center justify-center my-10">
        <div
          class="w-1/2 flex items-center justify-between shadow border border-solid rounded-xl overflow-hidden border-black text-center max-sm:w-full max-md:w-2/3"
        >
          <div
            class="p-2 border-r border-solid border-black text-xl font-bold w-1/2 text-white bg-[#379683]"
          >
            Information
          </div>
          <div
            class="p-2 border-solid border-black text-xl font-bold w-1/2 bg-white"
          >
            Rental
          </div>
        </div>
      </div>
      <div class="w-full flex items-center justify-center">
        <div
          class="bg-white w-1/2 p-4 rounded-lg shadow max-md:w-full max-lg:w-2/3"
        >
          <div class="m-4">
            <div class="text-xl font-bold mb-2">Number plate</div>
            <input
              class="border border-solid border-black p-2 text-lg rounded-xl"
              v-model="cars.plate_number"
            />
          </div>
          <div class="m-4">
            <div class="text-xl font-bold mb-2">Basic Information</div>
            <div class=""></div>
            <div class="grid grid-cols-2 gap-4">
              <div class="h-full">
                <div class="mb-2">Model Car</div>
                <div class="">
                  <input
                    class="border border-solid border-black p-2 text-lg rounded-xl w-2/3"
                    v-model="cars.type_car"
                  />
                </div>
              </div>
              <div class="">
                <div class="mb-2">Name Model</div>
                <div class="">
                  <input
                    class="border border-solid border-black p-2 text-lg rounded-xl w-2/3"
                    v-model="cars.name"
                  />
                </div>
              </div>
              <div class="">
                <div class="mb-2">Seat</div>
                <select
                  class="border border-solid border-black rounded-xl p-2 text-lg text-center w-2/3"
                  v-model="cars.seat"
                >
                  <option value="4">4</option>
                  <option value="7">7</option>
                  <option value="9">9</option>
                  <option value="16">16</option>
                </select>
              </div>
              <div class="">
                <div class="mb-2">Transmission</div>
                <select
                  class="border border-solid border-black rounded-xl p-2 text-lg text-center w-2/3"
                  v-model="cars.transmission"
                >
                  <option value="Gearbox">Gearbox</option>
                  <option value="Automation">Automation</option>
                </select>
              </div>
              <div class="">
                <div class="mb-2">Types of fuels</div>
                <select
                  class="border border-solid border-black rounded-xl p-2 text-lg text-center w-2/3"
                  v-model="cars.fuel_type"
                >
                  <option value="Diesel">Diesel</option>
                  <option value="Gas">Gas</option>
                </select>
              </div>
              <div class="">
                <div class="mb-2">Fuel</div>
                <div class="">
                  <input
                    class="border border-solid border-black p-2 text-lg rounded-xl w-2/3"
                    v-model="cars.fuel"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="m-4">
            <div class="text-xl font-bold mb-2">Gas Consumption</div>
            <input
              class="border border-solid border-black p-2 text-lg rounded-xl w-1/2"
              placeholder="Fuel for a distance of 100km"
              v-model="cars.fuel_consumption"
            />
          </div>
          <div class="m-4">
            <div class="text-xl font-bold mb-2">Description</div>
            <textarea
              class="border border-solid border-black p-2 text-lg rounded-xl w-5/6 h-24 overflow-hidden"
              v-model="cars.description"
            ></textarea>
          </div>
          <div class="m-4">
            <RButton
              class="btn-success w-full"
              label="Next"
              @btn-click="toogleIsActive()"
            ></RButton>
          </div>
        </div>
      </div>
    </div>
    <RentalCarForm
      v-if="isActive"
      :cars="cars"
      :user-info="userInfo"
    ></RentalCarForm>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({
  name: "AddNewCar",
})
export default class extends Vue {
  @Prop({}) userInfo: any;
  isActive: boolean = false;
  cars: any = {};

  toogleIsActive() {
    if (this.isActive == true) {
      this.isActive = false;
    } else {
      this.isActive = true;
    }
  }
}
</script>
