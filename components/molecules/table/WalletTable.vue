<template>
  <div class="overflow-x-auto">
    <h1 class="text-xl font-bold">Wallet</h1>
    <table class="w-full border border-solid text-center bg-white">
      <tr class="bg-[#379683] text-xl text-white">
        <th class="py-2 px-4 max-lg:px-2">ID</th>
        <th class="py-2 px-4 max-lg:px-2">User ID</th>
        <th class="py-2 px-4 max-lg:px-2">Balance</th>
        <th class="py-2 px-4 max-lg:px-2">Status</th>
        <th class="py-2 px-4 max-lg:px-2">Created At</th>
        <th class="py-2 px-4 max-lg:px-2">Update At</th>
        <th class="py-2 px-4 max-lg:px-2">Delete At</th>
      </tr>
      <tr
        class="text-lg"
        v-for="walletInfo in walletInfos"
        :key="walletInfo.id"
      >
        <td class="py-2 px-4 max-lg:px-2">{{ walletInfo.id }}</td>
        <td class="py-2 px-4 max-lg:px-2">{{ walletInfo.user_id }}</td>
        <td class="py-2 px-4 max-lg:px-2">{{ walletInfo.balance }}</td>
        <td class="py-2 px-4 max-lg:px-2">{{ walletInfo.status }}</td>
        <td class="py-2 px-4 max-lg:px-2">{{ walletInfo.created_at }}</td>
        <td class="py-2 px-4 max-lg:px-2">{{ walletInfo.update_at }}</td>
        <td class="py-2 px-4 max-lg:px-2">{{ walletInfo.delete_at }}</td>
      </tr>
    </table>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({
  name: "WalletTable",
})
export default class extends Vue {
  @Prop({}) walletInfos!: any;
}
</script>
