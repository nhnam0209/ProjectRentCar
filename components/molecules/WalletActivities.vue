<template>
    <div class="bg-white">
        <div class="text-2xl font-bold pt-4 pl-5">
            Last Activities
        </div>
        <div class=" flex justify-between ">
            <div class="p-5 w-full">
                <table class="w-full border border-solid"> 
                    <tr class="bg-green-500 text-2xl text-white">
                        <th class="py-2 px-4">Type of Action</th>
                        <th class="py-2 px-4">Status</th>
                        <th class="py-2 px-4">From/to</th>
                        <th class="py-2 px-4">Date</th>
                        <th class="py-2 px-4">Value</th>
                    </tr>
                    <tr class="text-2xl text-center">
                        <td class="py-2 px-4">Rent Car</td>
                        <td class="py-2 px-4">Peding</td>
                        <td class="py-2 px-4">Customer</td>
                        <td class="py-2 px-4">07/01/2023</td>
                        <td class="py-2 px-4">$38.00</td>
                    </tr>
                </table>
            </div>
    
            <div class="p-5">
            <div class="grid grid-row-4 gap-4">
                <div class="text-white shadow rounded-xl px-6 py-5 bg-green-500">
                    <div class="text-xl font-medium block mb-2">Total Balance</div>
                    <div class="text-2xl font-bold">$2552.95</div>
                </div>
    
                <div class="bg-red-500 text-white shadow rounded-xl px-6 py-5">
                    <div class="text-xl font-medium block mb-2">Expenses</div>
                    <div class="text-2xl font-bold">$552.95</div>
                </div>
    
                <div class="bg-green-500 text-white shadow rounded-xl px-6 py-5">
                    <div class="text-xl font-medium block mb-2">Car Being Hired</div>
                    <div class="text-2xl font-bold">1</div>
                </div>
    
                <div class="bg-yellow-400 text-white shadow rounded-xl px-6 py-5">
                    <div class="text-xl font-medium block mb-2">In Stock</div>
                    <div class="text-2xl font-bold ">$552.95</div>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  name: "WalletActivities",
})
export default class extends Vue {}
</script>