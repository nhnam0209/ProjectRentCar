<template>
  <div class="w-80 border border-solid border-neutral-500">
    <div class="p-12 pb-5 bg-white">
      <div class="mb-4 pt-8">
        <div class="mb-2 text-2xl font-bold">Filter</div>
        <select class="text-lg w-full text-center py-1 border border-solid border-neutral-500 rounded-xl">
          <option value="LowerPrice">Lower Price</option>
          <option value="HigherPrice">Higher Price</option>
          <option value="HightRating">High Rating</option>
          <option value="LowRating">Low Rating</option>
        </select>
      </div>

      <div class="mb-4 hidden">
        <div class="mb-2 text-2xl font-bold">Type Car</div>
        <div class="vihecle-option flex justify-center items-center rounded-xl overflow-hidden h-12 border-solid border-neutral-500 border">
          <div class="vihecle-type border-r border-solid border-neutral-500 flex justify-center items-center py-1 px-5 cursor-pointer relative h-full w-full z-10">
            <img
              src="../../static/img/type-car/prestige-filter.94613cf.png"
              alt=""
              class="h-5 pr-4"
            />
          </div>
          <div class="vihecle-type border-r border-solid border-neutral-500 flex justify-center items-center py-1 px-5 cursor-pointer relative h-full w-full z-10">
            <img
              src="../../static/img/type-car/cars-filter.bdb1eda.png"
              alt=""
              class="h-5 pr-4"
            />
          </div>
          <div class="vihecle-type flex justify-center items-center py-1 px-5 cursor-pointer relative h-full w-full z-10">
            <img
              src="../../static/img/type-car/vans-trucks-filter.2319eb0.png"
              alt=""
              class="h-5 pr-4"
            />
          </div>
        </div>
      </div>

      <div class="mb-4">
        <div class="mb-2 text-2xl font-bold">Car Type</div>
        <select class="text-lg w-full text-center py-1 border border-solid border-neutral-500 rounded-xl">
          <option value="Sedan">Sedan</option>
          <option value="Hyundai">SUV</option>
          <option value="Kia">Van</option>
        </select>
      </div>

      <div class="mb-4">
        <div class="mb-2 text-2xl font-bold">Auto Maker</div>
        <select class="text-lg w-full text-center py-1 border border-solid border-neutral-500 rounded-xl">
          <option value="Toyota">Toyota</option>
          <option value="Hyundai">Hyundai</option>
          <option value="Kia">Kia</option>
          <option value="Suzuki">Suzuki</option>
          <option value="Mitsubishi">Mitsubishi</option>
          <option value="Honda">Honda</option>
        </select>
      </div>

      <div class="sidebar-transition mb-4">
        <div class="mb-2 text-2xl font-bold">Transition</div>
        <div class="combo-checkbox">
          <div class="flex">
            <div class="mr-2">
              <input type="radio" name="transition" class="" checked>
            </div>
            <RLabel nameLabel="Both" class="sidebar-label"></RLabel>
          </div>
          <div class="flex">
            <div class="mr-2">
              <input type="radio" name="transition" class="">
            </div>
            <RLabel nameLabel="Automatic" class="sidebar-label"></RLabel>
          </div>
          <div class="flex">
            <div class="mr-2">
              <input type="radio" name="transition" class="">
            </div>
            <RLabel nameLabel="Manual" class="sidebar-label"></RLabel>
          </div>
        </div>
      </div>

      <div class="btn-reset flex items-center justify-center">
        <RButton class="btn-assent" nameBtn="Reset Default"></RButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
@Component({
  name: "RentalLocation",
})
export default class extends Vue {}
</script>