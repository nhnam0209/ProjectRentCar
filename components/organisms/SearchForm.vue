<template>
  <div class="background-home flex justify-center items-center flexed h-screen bg-center bg-cover bg-no-repeat">
    <form action="" class="booking-form bg-white p-10 rounded-xl overflow-hidden opacity-90 w" @submit.prevent="handleSearchCar()">
      <div class="type-car flex justify-between items-center">
        <div class="vihecle">
          <div class="vihecle-filter">
            <div class="title-vihecle-filter py-2">
              <span class="font-bold text-lg">What type of vihecle?</span>
            </div>
            <div class="vihecle-option flex justify-center items-center rounded-xl overflow-hidden h-12 border-solid border-neutral-500 border">
              <div class="vihecle-type flex justify-center items-center py-1 px-5 cursor-pointer relative h-full w-full z-10">
                <img
                  src="../../static/img/type-car/cars-filter.bdb1eda.png"
                  alt=""
                  class="h-5 pr-4"
                />
                <p class="type-car-label">Car</p>
              </div>
              <div class="vihecle-type flex justify-center items-center">
                <img
                  src="../../static/img/type-car/vans-trucks-filter.2319eb0.png"
                  alt=""
                  class="h-5 pr-4"
                />
                <p class="type-car-label">Van & Trucks</p>
              </div>
              <div class="vihecle-type flex justify-center items-center">
                <img
                  src="../../static/img/type-car/prestige-filter.94613cf.png"
                  alt=""
                  class="h-5 pr-4"
                />
                <p class="type-car-label">Prestisge</p>
              </div>
            </div>
          </div>
        </div>
        <div class=""></div>
      </div>
      <div class="info-hire-car my-4">
        <div class="dateime-pickup-car inline-block">
          <div class="station-input-pickup w-full">
            <div class="title-pickup-input py-2">
              <span class="font-bold text-lg">Pick up & Return location</span>
            </div>
            <div class="rounded-xl overflow-hidden border border-solid border-neutral-500 h-12 flex">
              <div class=" px-3 flex justify-center items-center">
                <icon-location-pin class="icon-fill cursor-pointer h-5 w-5" />
              </div>
              <input
                type="text"
                class="label-input w-full"
                placeholder="Pick up & Return location"
                v-model="car.location"
              />
            </div>
          </div>

          <div
            class="input-datetime-pickup-and-return flex justify-between items-center"
          >
            <div class="station-input-pickup w-full">
              <div class="title-pickup-input py-2">
                <span class="font-bold text-lg">Pick up date & time</span>
              </div>
              <div class="rounded-xl overflow-hidden border border-solid border-neutral-500 h-12 flex justify-center">
                <div class="px-3 flex justify-center items-center">
                  <icon-date-time class="icon-fill cursor-pointer h-5 w-5" />
                </div>
                <div class="input-date flex justify-center items-center">
                  <input
                    type="date"
                    class="label-input label-input-date partition w-full"
                    placeholder="Return date"
                    v-model="car.pickupDate"
                  />
                </div>
                <div class="input-time flex justify-center items-center">
                  <RInput
                    typeInput="text"
                    class="label-input label-input-time w-full"
                    placeholderInput="Time"
                  />
                </div>
              </div>
            </div>

            <div class="station-input-pickup w-full">
              <div class="title-pickup-input py-2">
                <span class="font-bold text-lg">Return date & time</span>
              </div>
              <div class="rounded-xl overflow-hidden border border-solid border-neutral-500 h-12 flex justify-center">
                <div class="px-3 flex justify-center items-center">
                  <icon-date-time class="icon-fill cursor-pointer h-5 w-5" />
                </div>
                <div class="input-date flex justify-center items-center">
                  <input
                    type="date"
                    class="label-input label-input-date w-full"
                    placeholder="Return date"
                    v-model="car.returnDate"
                  />
                </div>
                <div class="input-time flex justify-center items-center">
                  <RInput
                    typeInput="text"
                    class="label-input label-input-time w-full"
                    placeholderInput="Time"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="info-customer flex justify-between items-center">
        <div class="info-customer-age-country">
          <div class="age-customer flex justify-center items-center">
            <span class="px-1 text-lg">I am</span>
            <div class="select-age">
              <span class="age-label font-bold">26+</span>
              <icon-caret-down class="icon-fill cursor-pointer" />
            </div>
          </div>
        </div>
        <div class="info-customer-age-country">
          <div class="country-customer flex justify-center items-center">
            <span class="px-1 text-lg">I live in</span>
            <div class="select-country">
              <span class="font-bold"> Viet Nam</span>
              <icon-caret-down class="icon-fill cursor-pointer" />
            </div>
          </div>
        </div>
        <div class="flex justify-center items-center">
          <div class="button-search flex justify-center items-center">
            <RButton class="btn-search text-black" nameBtn="Search"></RButton>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
@Component({
  name: "SearchBar",
})
export default class extends Vue {
  handleSearchCar() {
    try {
      this.$vxm.car.handleSearchCar(this.car);
    } catch (error) {
      alert("Please try again!!");
    }
  }

  get car() {
    return this.$vxm.car.searchingCar;
  }
}
</script>

<style>
.background-home {
  background-image: url(../../static/img/home-page.jpg);
}

.booking-form {
  animation: slidein-Homepage 2s ease;
  width: 1000px;
}

.vihecle-type::before {
  content: "";
  position: absolute;
  left: 0;
  height: 100%;
  width: 0%;
  background: #00a550;
  opacity: 0.9;
  transition: all 0.5s ease;
  z-index: -1;
}

.vihecle-type:hover::before {
  width: 100%;
}

.icon-fill {
  fill: #00a550;
}

@keyframes slidein-Homepage {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }

  to {
    opacity: 0.9;
    transform: translateY(0%);
  }
}

@media (max-width: 1190px) {
  .booking-form {
    width: 50%;
  }
  .dateime-pickup-car,
  .input-datetime-pickup-and-return,
  .info-customer{
    display: block;
  }
  .station-input-pickup:last-child {
    margin-left: 0;
  }
}

@media (max-width: 920px) {
  .vihecle-option {
    display: block;
    height: 100%;
  }

  .vihecle-type {
    padding: 10px 0;
  }
}
</style>
