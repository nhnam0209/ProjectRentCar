<template>
  <div class="background-home flex justify-center items-center h-screen">
    <div class="booking-form bg-white rounded-md">
      <div class="info-hire-car my-4 flex justify-center">
        <div
          class="title-pickup-input w-full py-2 flex flex-col justify-center"
        >
          <span class="font-bold text-center text-xl uppercase lg:text-3xl"
            >Welcome to Rental Car Service</span
          >
          <span class="font-bold text-md md:text-xl text-center mt-2"
            >We provide to you the best service about rental car</span
          >
          <div class="button-search flex justify-center self-center mt-7">
            <r-button
              class="btn-size text-black self-center"
              @click="handleRentCarPage"
            >
              Rent Car
            </r-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
@Component({
  name: "SearchBar",
})
export default class extends Vue {
  handleRentCarPage() {
    this.$router.push("/rentcar");
  }
}
</script>

<style>
.background-home {
  background-image: url(../../static/img/home-page.jpg);
  background-repeat: no-repeat;
  background-size: cover;
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
  background: #5cdb95;
  opacity: 0.9;
  transition: all 0.5s ease;
  z-index: -1;
}

.vihecle-type:hover::before {
  width: 100%;
}

.icon-fill {
  fill: #5cdb95;
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
  .info-customer {
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
