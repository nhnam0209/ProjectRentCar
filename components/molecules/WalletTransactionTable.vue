<template>
  <div class="">
    <h1 class="text-xl font-bold">Wallet transaction</h1>
    <table class="w-full border border-solid text-center bg-white">
      <tr class="bg-green-500 text-xl text-white">
        <th class="py-2 px-4 max-lg:px-2">ID</th>
        <th class="py-2 px-4 max-lg:px-2">User ID</th>
        <th class="py-2 px-4 max-lg:px-2">Wallet ID</th>
        <th class="py-2 px-4 max-lg:px-2">Description</th>
        <th class="py-2 px-4 max-lg:px-2">Adding</th>
        <th class="py-2 px-4 max-lg:px-2">Subtract</th>
        <th class="py-2 px-4 max-lg:px-2">Status</th>
        <th class="py-2 px-4 max-lg:px-2">Created At</th>
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
