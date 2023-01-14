<template>
  <div class="">
    <div class="py-10"  :class="{ 'modal-close': isActive }">
      <div class="w-full flex items-center justify-center my-10">
        <div
          class="w-1/2 flex items-center justify-between shadow border border-solid rounded-xl overflow-hidden border-black text-center"
        >
          <div
            class="p-2 border-r border-solid border-black text-xl font-bold w-1/3 text-white bg-green-500"
          >
            Infomation
          </div>
          <div
            class="p-2 border-r border-solid border-black text-xl font-bold w-1/3 bg-white"
          >
            Rental
          </div>
          <div
            class="p-2 border-solid border-black text-xl font-bold w-1/3 bg-white"
          >
            Photos
          </div>
        </div>
      </div>
      <div class="w-full flex items-center justify-center">
        <div class="bg-white w-1/2 p-4 rounded-lg shadow">
          <div class="m-4">
            <div class="text-xl font-bold mb-2">Number plate</div>
            <div class=""></div>
            <RInput
              class="border border-solid border-black p-2 text-lg rounded-xl"
            ></RInput>
          </div>
          <div class="m-4">
            <div class="text-xl font-bold mb-2">Basic Information</div>
            <div class=""></div>
            <div class="grid grid-cols-2 gap-4">
              <div class="">
                <div class="mb-2">Model Car</div>
                <select
                  class="border border-solid border-black rounded-xl p-2 text-lg text-center w-2/3"
                >
                  <option value="">Toyota</option>
                  <option value="">Honda</option>
                  <option value="">Kia</option>
                  <option value="">Hyundai</option>
                </select>
              </div>
              <div class="">
                <div class="mb-2">Name Model</div>
                <select
                  class="border border-solid border-black rounded-xl p-2 text-lg text-center w-2/3"
                >
                  <option value="">Toyota Vios</option>
                  <option value="">Toyota Camry</option>
                  <option value="">Honda City</option>
                  <option value="">Kia Carival</option>
                  <option value="">Hyundai Santafe</option>
                </select>
              </div>
              <div class="">
                <div class="mb-2">Seat</div>
                <select
                  class="border border-solid border-black rounded-xl p-2 text-lg text-center w-2/3"
                >
                  <option value="">4</option>
                  <option value="">7</option>
                  <option value="">9</option>
                  <option value="">16</option>
                </select>
              </div>
              <div class="">
                <div class="mb-2">Production Year</div>
                <select
                  class="border border-solid border-black rounded-xl p-2 text-lg text-center w-2/3"
                >
                  <option value="">2017</option>
                  <option value="">2018</option>
                  <option value="">2019</option>
                  <option value="">2020</option>
                  <option value="">2021</option>
                  <option value="">2022</option>
                  <option value="">2023</option>
                </select>
              </div>
              <div class="">
                <div class="mb-2">Transition</div>
                <select
                  class="border border-solid border-black rounded-xl p-2 text-lg text-center w-2/3"
                >
                  <option value="default">Default</option>
                  <option value="">Manual</option>
                  <option value="">Automatic</option>
                </select>
              </div>
              <div class="">
                <div class="mb-2">Types of fuels</div>
                <select
                  class="border border-solid border-black rounded-xl p-2 text-lg text-center w-2/3"
                >
                  <option value="default">Default</option>
                  <option value="">Diesel</option>
                  <option value="">Gas</option>
                </select>
              </div>
            </div>
          </div>
          <div class="m-4">
            <div class="text-xl font-bold mb-2">Gas Consumption</div>
            <RInput
              class="border border-solid border-black p-2 text-lg rounded-xl w-1/3"
              placeholderInput="Fuel for a distance of 100km"
            ></RInput>
          </div>
          <div class="m-4">
            <div class="text-xl font-bold mb-2">Description</div>
            <textarea
              class="border border-solid border-black p-2 text-lg rounded-xl w-5/6 h-24 overflow-hidden"
            ></textarea>
          </div>
          <div class="m-4">
            <RButton
              class="btn-assent w-full"
              nameBtn="Next"
              @btn-click="toogleIsActive()"
            ></RButton>
          </div>
        </div>
      </div>
    </div>
    <RentalCarForm v-if="isActive"></RentalCarForm>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  name: "AddNewCar",
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
