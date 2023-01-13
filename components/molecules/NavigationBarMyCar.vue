<template>
    <div class="border-b border-solid border-black">
        <nav class="h-16 flex justify-center items-center shadow">
            <div class="border-r border-solid border-black px-5">
                <a href="/managerlistcar" class="flex items-center font-medium text-xl">
                    <IconCars class="w-8 h-8 mx-3"></IconCars>
                    List Cars
                </a>
            </div>
            <div class="border-r border-solid border-black px-5">
                <a href="/mycarregister" class="flex items-center font-medium text-xl">
                    <IconAdd class="w-4 h-4 mx-3"></IconAdd>
                    Add More Car
                </a>
            </div>
            <div class="px-5">
                <a href="./mycarcalendar" class="flex items-center font-medium text-xl">
                    <IconDateTime class="w-4 h-4 mx-3"></IconDateTime>
                    Calendar
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