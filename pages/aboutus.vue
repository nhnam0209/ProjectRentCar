<template>
  <Default>
    <template #content>
      <div class="py-10 px-14 h-full max-lg:mt-0">
        <banner container-class="mb-4">
          <template #leftContainer>
            <div class="w-screen max-w-full xl:max-w-lg space-y-5 lg:space-y-7">
              <h2
                class="text-3xl !leading-tight font-semibold text-neutral-900 md:text-4xl xl:text-5xl dark:text-neutral-100"
              >
                👋 About Us
              </h2>
              <span
                class="block text-base xl:text-lg text-neutral-6000 dark:text-neutral-400"
              >
                Welcome to Rental Car Service! Our mission is to provide our
                customers with reliable and affordable rental cars that meet
                their needs. We pride ourselves on our exceptional customer
                service and our commitment to making your rental experience as
                smooth as possible. Whether you need a car for business or
                pleasure, we have a wide selection of vehicles to choose from.
                Thank you for choosing Rental Car Service!
              </span>
            </div>
          </template>
          <template #rightContainer>
            <img
              loading="lazy"
              class="aspect-w-1 rounded-xl"
              src="../static/img/aboutus_img_1.jpg"
              alt="about us image"
            />
          </template>
        </banner>
        <div
          class="flex flex-col justify-between text-neutral-900 dark:text-neutral-50"
        >
          <h2 class="text-3xl md:text-4xl font-semibold">🚀 Fast Facts</h2>
          <span
            class="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 dark:text-neutral-400"
            >We’re impartial and independent, and every day we create
            distinctive, world-class programmes and content
          </span>
          <div class="my-7 grid md:grid-cols-2 gap-6 lg:grid-cols-3 xl:gap-8">
            <div
              class="p-6 bg-neutral-50 dark:bg-neutral-800 rounded-2xl dark:border-neutral-800"
            >
              <h3
                class="text-2xl font-semibold leading-none text-neutral-900 md:text-3xl dark:text-neutral-200"
              >
                10 million
              </h3>
              <span
                class="block text-sm text-neutral-500 mt-3 sm:text-base dark:text-neutral-400"
                >Articles have been public around the world (as of Sept. 30,
                2021)</span
              >
            </div>
            <div
              class="p-6 bg-neutral-50 dark:bg-neutral-800 rounded-2xl dark:border-neutral-800"
            >
              <h3
                class="text-2xl font-semibold leading-none text-neutral-900 md:text-3xl dark:text-neutral-200"
              >
                100,000
              </h3>
              <span
                class="block text-sm text-neutral-500 mt-3 sm:text-base dark:text-neutral-400"
                >Registered users account (as of Sept. 30, 2021)</span
              >
            </div>
            <div
              class="p-6 bg-neutral-50 dark:bg-neutral-800 rounded-2xl dark:border-neutral-800"
            >
              <h3
                class="text-2xl font-semibold leading-none text-neutral-900 md:text-3xl dark:text-neutral-200"
              >
                220+
              </h3>
              <span
                class="block text-sm text-neutral-500 mt-3 sm:text-base dark:text-neutral-400"
                >Countries and regions have our presence (as of Sept. 30,
                2021)</span
              >
            </div>
          </div>
        </div>
      </div>
    </template>
  </Default>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  name: "AboutUsPage",
  layout: "rentcar-layout",
  head() {
    return {
      title: "About Us",
    };
  },
})
export default class extends Vue {
  item = [{}];
}
</script>
