<template>
  <div class="relative" @mouseout="autoSlide()" @mouseover="stopAutoSlide()">
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
      class="relative w-full overflow-hidden after:clear-both after:block after:content-['']"
    >
      <div
        class="hidden relative float-left -mr-[100%] w-full slide-img opacity-90"
        v-for="(item, index) in carouselImages"
        :key="index"
        :class="{ '!block': index === currentSlide }"
      >
        <img :src="item" class="block w-full h-[75vh]" />
        <div
          class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block"
        >
          <h5 class="text-2xl font-bold">Car Hire – Search, Compare & Save</h5>
          <p class="text-xl font-medium">Free cancellations on most bookings</p>
          <r-button
            class="bg-[#5cdb95] text-3xl font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-300"
            label="Rent Car Now!"
            @click="handleRentCarPage()"
          ></r-button>
        </div>
      </div>
    </div>

    <button
      class="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center hover:no-underline hover:opacity-90 hover:outline-none"
      @click="prevSlide()"
    >
      <icon-arrow-left class="inline-block h-8 w-8"></icon-arrow-left>
    </button>
    <button
      class="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center hover:no-underline hover:opacity-90 hover:outline-none"
      @click="nextSlide()"
    >
      <icon-arrow-right class="inline-block h-8 w-8"></icon-arrow-right>
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
  carouselImages: any = [
    "https://upgradedpoints.com/wp-content/uploads/2020/05/Man-receiving-rental-car-keys-from-woman-2048x1365.jpeg",
    "https://media.ed.edmunds-media.com/non-make/carbuying/carbuying_808151_1600.jpg",
    "https://cdn-ds.com/media/sz_155839/927/2019-RAV4-1280x640-trac-logo_o.jpg",
  ];
  handleRentCarPage() {
    this.$router.push("/rentcar");
  }
  prevSlide() {
    this.currentSlide =
      (this.currentSlide - 1 + this.carouselImages.length) %
      this.carouselImages.length;
  }
  nextSlide() {
    if(this.currentSlide < this.carouselImages.length)
    this.currentSlide++;
    if(this.currentSlide == this.carouselImages.length){
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

.icon-fill{
  fill: #5cdb95;
}

@keyframes slide-in-carousel {
  from {
    opacity: 0;
  }

  to {
    opacity: 0.9;
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
