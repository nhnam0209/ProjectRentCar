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