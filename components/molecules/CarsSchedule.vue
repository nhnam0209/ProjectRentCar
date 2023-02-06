<template>
  <div class="bg-white overflow-auto">
    <div class="text-center mt-5">
      <h1 class="inline-block text-2xl font-bold">
        General calendar management
      </h1>
    </div>
    <div class="flex p-10 max-lg:block">
      <div class="w-1/4 max-lg:w-full">
        <div class="bg-white w-2/3 max-lg:flex max-lg:items-center max-lg:justify-between max-sm:w-full max-sm:block">
          <div class="max-lg:flex max-lg:items-centers">
            <div class="font-medium text-xl max-lg:mx-2">Date</div>
            <div class="">
              <select
                class="border border-solid border-black rounded-xl text-center cursor-pointer text-lg mt-2 w-full max-lg:mt-0"
              >
                <option value="LastestDate">Lastest Date</option>
                <option value="EarliestDate">Earliest Date</option>
              </select>
            </div>
          </div>
          <div class="my-2 max-lg:flex max-lg:items-centers">
            <div class="font-medium text-xl max-lg:mx-2">Price</div>
            <div class="">
              <select
                class="border border-solid border-black rounded-xl text-center cursor-pointer text-lg mt-2 w-full max-lg:mt-0"
              >
                <option value="Loww">Low Price</option>
                <option value="Active">High Price</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full">
        <table class="w-full border border-solid text-center">
          <tr class="bg-green-500 text-xl text-white">
            <th class="py-2 px-4 max-lg:px-2">ID</th>
            <th class="py-2 px-4 max-lg:px-2">Model</th>
            <th class="py-2 px-4 max-lg:px-2">Model name</th>
            <th class="py-2 px-4 max-lg:px-2">Number plate</th>
            <th class="py-2 px-4 max-lg:px-2">Destination pickup</th>
            <th class="py-2 px-4 max-lg:px-2">Destination return</th>
            <th class="py-2 px-4 max-lg:px-2">Start date</th>
            <th class="py-2 px-4 max-lg:px-2">End date</th>
          </tr>
          <tr class="text-lg" v-for="car in cars" :key="car.id && carsSchedule.car_id">  
            <td class="py-2 px-4 max-lg:px-2">{{ car.id}}</td>
            <td class="py-2 px-4 max-lg:px-2">{{ car.type_car}}</td>
            <td class="py-2 px-4 max-lg:px-2">{{ car.name}}</td>
            <td class="py-2 px-4 max-lg:px-2">{{ car.plate_number}}</td>
            <td class="py-2 px-4 max-lg:px-2">{{ carsSchedule.destination_pickup}}</td>
            <td class="py-2 px-4 max-lg:px-2">{{ carsSchedule.destination_return}}</td>
            <td class="py-2 px-4 max-lg:px-2">{{ carsSchedule.pickup_date}}</td>
            <td class="py-2 px-4 max-lg:px-2">{{ carsSchedule.return_date}}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({
  name: "CarsSchedule",
})
export default class extends Vue {
  @Prop({}) carsSchedule: any;
  @Prop({}) cars: any;
}
</script>
