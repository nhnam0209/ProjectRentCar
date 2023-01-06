<template>
  <div class="sidebar-container">
    <div class="sidebar bg-white">
      <div class="sidebar-filter sidebar-items pt-8">
        <div class="title-sidebar text-2xl font-bold">Filter</div>
        <select class="filter text-lg">
          <option value="LowerPrice">Lower Price</option>
          <option value="HigherPrice">Higher Price</option>
          <option value="HightRating">High Rating</option>
          <option value="LowRating">Low Rating</option>
        </select>
      </div>

      <div class="sidebar-typecar sidebar-items">
        <div class="title-sidebar text-2xl font-bold">Type Car</div>
        <div class="vihecle-option flex justify-center items-center">
          <div class="vihecle-type flex justify-center items-center">
            <img
              src="../../static/img/type-car/prestige-filter.94613cf.png"
              alt=""
              class="type-car-img"
            />
          </div>
          <div class="vihecle-type flex justify-center items-center">
            <img
              src="../../static/img/type-car/cars-filter.bdb1eda.png"
              alt=""
              class="type-car-img"
            />
          </div>
          <div class="vihecle-type flex justify-center items-center">
            <img
              src="../../static/img/type-car/vans-trucks-filter.2319eb0.png"
              alt=""
              class="type-car-img"
            />
          </div>
        </div>
      </div>

      <div class="sidebar-automaker sidebar-items">
        <div class="title-sidebar text-2xl font-bold">Auto Maker</div>
        <select class="filter text-lg">
          <option value="Toyota">Toyota</option>
          <option value="Hyundai">Hyundai</option>
          <option value="Kia">Kia</option>
          <option value="Suzuki">Suzuki</option>
          <option value="Mitsubishi">Mitsubishi</option>
          <option value="Honda">Honda</option>
        </select>
      </div>

      <div class="sidebar-transition sidebar-items">
        <div class="title-sidebar text-2xl font-bold">Transition</div>
        <div class="combo-checkbox">
          <div class="flex">
            <div class="mr-2">
              <RInput
                typeInput="radio"
                class="sidebar-checkbox"
                nameInput="transition"
              ></RInput>
            </div>
            <RLabel nameLabel="Both" class="sidebar-label"></RLabel>
          </div>
          <div class="flex">
            <div class="mr-2">
              <RInput
                typeInput="radio"
                class="sidebar-checkbox"
                nameInput="transition"
              ></RInput>
            </div>
            <RLabel nameLabel="Automatic" class="sidebar-label"></RLabel>
          </div>
          <div class="flex">
            <div class="mr-2">
              <RInput
                typeInput="radio"
                class="sidebar-checkbox"
                nameInput="transition"
              ></RInput>
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

<style>
.sidebar-container {
  min-width: 450px;
  border: 1px solid rgb(107 114 128);
}

.sidebar {
  padding: 0 50px 20px;
}

.sidebar-items {
  margin-bottom: 15px;
}

.sidebar-checkbox {
  top: 0;
  left: 0;
}

.filter {
  width: 100%;
  text-align: center;
  border: 1px solid rgb(107 114 128);
  border-radius: 12px;
  padding: 5px 0;
}

.title-sidebar {
  margin-bottom: 10px;
}

.vihecle-type{
    border-right: 1px solid rgb(107 114 128);
    height: 100%;
}

.vihecle-type:last-child{
   border: none;
}
</style>
