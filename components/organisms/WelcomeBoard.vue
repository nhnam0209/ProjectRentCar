<template>
  <div
    class="relative bg-gradient-to-r from-[#78ffd6] to-[#FFFB7D] mt-16 max-lg:mt-0"
    @mouseout="autoSlide()"
    @mouseover="stopAutoSlide()"
  >
    <div
      class="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
    >
      <button
        class="relative mx-[3px] box-content h-[3px] w-[80px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 opacity-90"
        v-for="(item, index) in carouselImages"
        :key="index"
        :class="{ 'btn-go-to-slide': index === currentSlide }"
        @click="goToSlide(index)"
      ></button>
    </div>

    <div
      class="grid-cols-4 w-full overflow-hidden after:clear-both after:block after:content-[''] hidden h-[75vh] max-lg:h-full max-lg:pt-32 max-lg:grid-cols-1"
      v-for="(carouselImage, index) in carouselImages"
      :key="index"
      :class="{ '!grid': index === currentSlide }"
    >
      <div
        class="flex justify-center items-center h-full px-5 col-span-2 slide-content"
      >
        <div class="text-black">
          <h5 class="text-3xl font-bold">Car Hire – Search, Compare & Save</h5>
          <p class="text-2xl font-medium">
            Free cancellations on most bookings
          </p>
          <r-button
            class="bg-black text-2xl my-5 font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-300"
            label="Rent Car Now!"
            @click="handleRentCarPage()"
          ></r-button>
        </div>
      </div>
      <div
        class="relative flex justify-center items-center w-full opacity-90 col-span-2 slide-img"
      >
        <img :src="getImgUrl(carouselImage)" class="w-2/3" />
      </div>
    </div>

    <button
      class="absolute bottom-0 left-0 top-0 z-[1] flex w-[6%] items-center justify-center border-0 bg-none p-0 text-center hover:no-underline hover:opacity-50 hover:outline-none hover:bg-gray-300"
      @click="prevSlide()"
    >
      <icon-arrow-left
        class="inline-block h-6 w-6 fill-black max-xl:hidden"
      ></icon-arrow-left>
    </button>
    <button
      class="absolute bottom-0 right-0 top-0 z-[1] flex w-[6%] items-center justify-center border-0 bg-none p-0 text-center hover:no-underline hover:opacity-50 hover:outline-none hover:bg-gray-300"
      @click="nextSlide()"
    >
      <icon-arrow-right
        class="inline-block h-6 w-6 fill-black max-xl:hidden"
      ></icon-arrow-right>
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  name: "SearchBar",
})
export default class extends Vue {
  autoSlideInterval: any = null;
  currentSlide: any = 0;
  carouselImages: any = ["carousel1.png", "carousel2.png", "carousel3.png"];

  getImgUrl(pic: any) {
    return require("../../static/img/carousel/" + pic);
  }

  handleRentCarPage() {
    this.$router.push("/rentcar");
  }
  prevSlide() {
    this.currentSlide =
      (this.currentSlide - 1 + this.carouselImages.length) %
      this.carouselImages.length;
  }
  nextSlide() {
    if (this.currentSlide < this.carouselImages.length) this.currentSlide++;
    if (this.currentSlide == this.carouselImages.length) {
      this.currentSlide = 0;
    }
  }
  goToSlide(index: any) {
    this.currentSlide = index;
  }
  stopAutoSlide() {
    clearInterval(this.autoSlideInterval);
  }
  autoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 4000);
  }
}
</script>

<style>
.slide-img {
  animation: slide-in-carousel 2.5s ease;
}
.slide-content {
  animation: content-in-carousel 2.5s ease;
}

.btn-go-to-slide::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: #5cdb95;
  animation: btn-go-to-slide 0.5s ease;
  transition: all 0.5s ease;
  z-index: -1;
}

.icon-fill {
  fill: #5cdb95;
}

@keyframes slide-in-carousel {
  from {
    opacity: 0;
    transform: translateX(100%);
  }

  to {
    opacity: 0.9;
    transform: translateX(0);
  }
}

@keyframes content-in-carousel {
  from {
    opacity: 0;
    transform: translateX(-100%);
  }

  to {
    opacity: 0.9;
    transform: translateX(0);
  }
}

@keyframes btn-go-to-slide {
  from {
    width: 0%;
  }

  to {
    width: 100%;
  }
}
</style>
