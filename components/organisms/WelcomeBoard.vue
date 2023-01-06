<template>
  <div class="background-home flex justify-center items-center flexed h-screen">
    <div class="booking-form">
      <div class="info-hire-car my-4">
        <div class="dateime-pickup-car inline-block">
          <div class="station-input-pickup w-full">
            <div class="title-pickup-input py-2 flex flex-col justify-center">
              <span class="font-bold text-center text-5xl uppercase"
                >Welcome to Rental Car Service</span
              >
              <span class="font-bold text-xl text-center mt-2"
                >We provide to you the best service about rental car</span
              >
              <div class="button-search flex justify-center self-center mt-7">
                <r-button
                  class="btn-search text-black self-center"
                  @click="handleRentCarPage"
                >
                  Rent Car
                </r-button>
              </div>
            </div>
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
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.booking-form {
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  overflow: hidden;
  animation: slidein-Homepage 2s ease;
  opacity: 0.9;
  width: 1000px;
}

.vihecle-option {
  border: 1px solid rgb(107 114 128);
  border-radius: 12px;
  overflow: hidden;
  height: 50px;
}

.vihecle-type {
  padding: 5px 20px;
  cursor: pointer;
  position: relative;
  z-index: 1;
  height: 100%;
  width: 100%;
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

.type-car-img {
  height: 21px;
  padding-right: 15px;
}

.pickup-input {
  border: 1px solid rgb(107 114 128);
  border-radius: 10px;
  overflow: hidden;
  height: 50px;
}

.icon-pickup-input {
  padding: 0 10px;
  fill: #00a550;
}

.info-label {
  padding: 0 6px;
}

.icon-pickup {
  fill: #00a550;
  cursor: pointer;
  height: 20px;
  width: 20px;
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
  .dateime-pickup-car {
    display: block;
  }
  .station-input-pickup:last-child {
    margin-left: 0;
  }

  .info-customer {
    display: block;
  }

  .input-datetime-pickup-and-return {
    display: block;
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
