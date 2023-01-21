<template>
  <div class="bg-white">
    <div class="text-center mt-5">
      <h1 class="inline-block text-2xl font-bold">
        General calendar management
      </h1>
    </div>
    <div class="flex p-10">
      <div class="w-1/4">
        <div class="bg-white w-2/3">
          <div class="">
            <div class="font-medium text-xl">Date</div>
            <div class="">
              <select
                class="border border-solid border-black rounded-xl text-center cursor-pointer text-lg mt-2 w-full"
              >
                <option value="LastestDate">Lastest Date</option>
                <option value="EarliestDate">Earliest Date</option>
              </select>
            </div>
          </div>
          <div class="my-2">
            <div class="font-medium text-xl">Price</div>
            <div class="">
              <select
                class="border border-solid border-black rounded-xl text-center cursor-pointer text-lg mt-2 w-full"
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
            <th class="py-2 px-4">ID</th>
            <th class="py-2 px-4">Model</th>
            <th class="py-2 px-4">Number plate</th>
            <th class="py-2 px-4">Start date</th>
            <th class="py-2 px-4">End date</th>
            <th class="py-2 px-4">Price</th>
          </tr>
          <tr class="text-lg">
            <td class="py-2 px-4">1</td>
            <td class="py-2 px-4">Toyota Vios</td>
            <td class="py-2 px-4">51F73912</td>
            <td class="py-2 px-4">12/01/2023</td>
            <td class="py-2 px-4">23/01/2023</td>
            <td class="py-2 px-4">$70.32</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  name: "CarsSchedule",
})
export default class extends Vue {}
</script>
