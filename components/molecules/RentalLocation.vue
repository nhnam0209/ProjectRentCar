<template>
  <div class="flex justify-center items-center my-10">
    <div class="dateime-pickup-car flex rental-location">
      <div class="station-input-return w-full flex">
        <div class="icon-pickup-input flex items-center justify-center">
          <icon-location-pin class="icon-pickup" />
        </div>
        <div class="h-full pb-1 min-w-min">
          <span class="text-gray-500 text-center">Pick up location</span>
          <div class="h-6 ">
            <RInput
              typeInput="text"
              class="w-full"
              placeholderInput="Pick up location"
            />
          </div>
        </div>
      </div>
      <div class="datetime-pickup-return flex">
          <div class="station-input-return w-full flex">
            <div class="icon-pickup-input flex items-center justify-center">
              <IconDateTime class="icon-pickup" />
            </div>
            <div class="h-full pb-1">
              <span class="text-gray-500 text-center">Pick up time</span>
              <div class="h-6">
                <RInput
                  typeInput="date"
                  class="w-full"
                  placeholderInput="Pick up time"
                />
              </div>
            </div>
          </div>
    
          <div class="station-input-return w-full flex">
            <div class="icon-pickup-input flex items-center justify-center">
              <IconDateTime class="icon-pickup" />
            </div>
            <div class="h-full pb-1">
              <span class="text-gray-500 text-center">Return time</span>
              <div class="h-6">
                <RInput
                  typeInput="date"
                  class="w-full"
                  placeholderInput="Return Time"
                />
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
  name: "RentalLocation",
})
export default class extends Vue {}
</script>

<style>
.rental-location {
  border-radius: 10px;
  border: 1px solid;
}

.station-input-return{
    border-right: 1px solid rgb(107 114 128);
    height: 100%;
}

.station-input-return:last-child{
   border: none;
}
</style>
