<template>
  <div class="border-b border-solid border-black">
    <nav class="h-16 flex justify-center items-center shadow">
      <div
        class="border-r border-solid border-black px-5 py-1 max-md:w-1/3 max-md:max-md:h-full"
      >
        <a
          href="/mycar"
          class="flex items-center font-medium text-xl max-md:h-full"
        >
          <IconCars class="w-8 h-8 mx-3 max-sm:hidden"></IconCars>
          <span class="max-sm:text-lg"> List Cars </span>
        </a>
      </div>
      <div
        class="border-r border-solid border-black px-5 py-1 max-md:w-1/3 max-md:h-full"
      >
        <a
          href="/mycarregister"
          class="flex items-center font-medium text-xl max-md:h-full"
        >
          <IconAdd class="w-4 h-4 mx-3 max-sm:hidden"></IconAdd>
          <div class="max-sm:text-lg">Add More Car</div>
        </a>
      </div>
      <div class="px-5 py-1 max-md:w-1/3 max-md:h-full">
        <a
          href="./mycarcalendar"
          class="flex items-center font-medium text-xl max-md:h-full"
        >
          <IconDateTime class="w-4 h-4 mx-3 max-sm:hidden"></IconDateTime>
          <div class="max-sm:text-lg">Calendar</div>
        </a>
      </div>
    </nav>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  name: "NavigationBarMyCar",
})
export default class extends Vue {}
</script>
