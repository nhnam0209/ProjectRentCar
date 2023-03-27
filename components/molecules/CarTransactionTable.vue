<template>
  <div class="">
    <h1 class="text-xl font-bold">Car Transaction</h1>
    <table class="w-full border border-solid text-center bg-white">
      <tr class="bg-[#379683] text-xl text-white">
        <th class="py-2 px-4 max-lg:px-2">ID</th>
        <th class="py-2 px-4 max-lg:px-2">User ID</th>
        <th class="py-2 px-4 max-lg:px-2">Owner ID</th>
        <th class="py-2 px-4 max-lg:px-2">Car ID</th>
        <th class="py-2 px-4 max-lg:px-2">Status</th>
        <th class="py-2 px-4 max-lg:px-2">Destination Pickup</th>
        <th class="py-2 px-4 max-lg:px-2">Destination Return</th>
        <th class="py-2 px-4 max-lg:px-2">Pickup Date</th>
        <th class="py-2 px-4 max-lg:px-2">Return Date</th>
        <th class="py-2 px-4 max-lg:px-2">Protection Plan</th>
        <th class="py-2 px-4 max-lg:px-2">Created At</th>
      </tr>
      <tr
        class="text-lg"
        v-for="carTransaction in carsTransactions"
        :key="carTransaction.id"
      >
        <td class="py-2 px-4 max-lg:px-2">{{ carTransaction.id }}</td>
        <td class="py-2 px-4 max-lg:px-2">{{ carTransaction.user_id }}</td>
        <td class="py-2 px-4 max-lg:px-2">{{ carTransaction.owner_id }}</td>
        <td class="py-2 px-4 max-lg:px-2">{{ carTransaction.car_id }}</td>
        <td class="py-2 px-4 max-lg:px-2">{{ carTransaction.status }}</td>
        <td class="py-2 px-4 max-lg:px-2">
          {{ carTransaction.destination_pickup }}
        </td>
        <td class="py-2 px-4 max-lg:px-2">
          {{ carTransaction.destination_return }}
        </td>
        <td class="py-2 px-4 max-lg:px-2">{{ carTransaction.pickup_date }}</td>
        <td class="py-2 px-4 max-lg:px-2">{{ carTransaction.return_date }}</td>
        <td class="py-2 px-4 max-lg:px-2">
          {{ carTransaction.protection_plan }}
        </td>
        <td class="py-2 px-4 max-lg:px-2">{{ carTransaction.created_at }}</td>
        <td class="py-2 px-4 max-lg:px-2 inline-flex my-2">
          <div class="btn-success w-3/4 h-10 flex justify-center self-center">
            <r-button label="Approve" class="w-full text-white self-center" />
          </div>
          <div class="btn-close w-3/4 h-10 flex justify-center ml-4">
            <r-button
              label="Reject"
              class="w-full text-white flex self-center"
            />
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({
  name: "CarTransactionTable",
})
export default class extends Vue {
  @Prop({}) carsTransactions!: any;
}
</script>
