<template>
  <div class="rounded-md overflow-x-auto">
    <h1 class="text-xl font-bold">Wallet Transaction</h1>
    <table class="w-full border border-solid text-center bg-white rounded-md">
      <tr class="bg-[#379683] text-white">
        <th class="py-2 px-4 max-lg:px-2">ID</th>
        <th class="py-2 px-4 max-lg:px-2">User ID</th>
        <th class="py-2 px-4 max-lg:px-2">Wallet ID</th>
        <th class="py-2 px-4 max-lg:px-2">Description</th>
        <th class="py-2 px-4 max-lg:px-2">Adding</th>
        <th class="py-2 px-4 max-lg:px-2">Subtract</th>
        <th class="py-2 px-4 max-lg:px-2">Status</th>
        <th class="py-2 px-4 max-lg:px-2">Created At</th>
        <th class="py-2 px-4 max-lg:px-2">Action</th>
      </tr>
      <tr
        class="text-lg"
        v-for="transaction in walletTransactions"
        :key="transaction.id"
      >
        <td class="py-2 px-4 max-lg:px-2">{{ transaction.id }}</td>
        <td class="py-2 px-4 max-lg:px-2">{{ transaction.user_id }}</td>
        <td class="py-2 px-4 max-lg:px-2">{{ transaction.wallet_id }}</td>
        <td class="py-2 px-4 max-lg:px-2">{{ transaction.description }}</td>
        <td class="py-2 px-4 max-lg:px-2">{{ transaction.adding }}</td>
        <td class="py-2 px-4 max-lg:px-2">{{ transaction.subtract }}</td>
        <td class="py-2 px-4 max-lg:px-2">{{ transaction.status }}</td>
        <td class="py-2 px-4 max-lg:px-2">{{ transaction.created_at }}</td>
        <td class="py-2 px-4 max-lg:px-2 inline-flex my-2">
          <div class="btn-success w-3/4 h-10 flex justify-center self-center">
            <r-button
              label="Approve"
              class="w-full text-white self-center"
              :is-disabled="!transaction || transaction.status == 'Completed'"
            />
          </div>
          <div class="btn-close w-3/4 h-10 flex justify-center ml-4">
            <r-button
              label="Reject"
              class="w-full text-white flex self-center"
              :is-disabled="!transaction || transaction.status == 'Completed'"
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
  name: "WalletTransactionTable",
})
export default class extends Vue {
  @Prop({}) walletTransactions!: any;
}
</script>
