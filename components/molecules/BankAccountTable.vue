<template>
  <div class="">
    <h1 class="text-xl font-bold">Bank Account</h1>
    <table class="w-full border border-solid text-center bg-white">
      <tr class="bg-[#379683] text-xl text-white">
        <th class="py-2 px-4 max-lg:px-2">ID</th>
        <th class="py-2 px-4 max-lg:px-2">User ID</th>
        <th class="py-2 px-4 max-lg:px-2">Username</th>
        <th class="py-2 px-4 max-lg:px-2">Full name</th>
        <th class="py-2 px-4 max-lg:px-2">Bank Account</th>
        <th class="py-2 px-4 max-lg:px-2">Expire Date</th>
        <th class="py-2 px-4 max-lg:px-2">Status</th>
        <th class="py-2 px-4 max-lg:px-2">Created At</th>
        <th class="py-2 px-4 max-lg:px-2">Update At</th>
      </tr>
      <tr
        class="text-lg"
        v-for="bankAccount in bankAccounts"
        :key="bankAccount.id"
      >
        <td class="py-2 px-4 max-lg:px-2">{{ bankAccount.id }}</td>
        <td class="py-2 px-4 max-lg:px-2">{{ bankAccount.user_id }}</td>
        <td class="py-2 px-4 max-lg:px-2">{{ bankAccount.username }}</td>
        <td class="py-2 px-4 max-lg:px-2">{{ bankAccount.full_name }}</td>
        <td class="py-2 px-4 max-lg:px-2">{{ bankAccount.bank_account }}</td>
        <td class="py-2 px-4 max-lg:px-2">{{ bankAccount.expire_date }}</td>
        <td class="py-2 px-4 max-lg:px-2">{{ bankAccount.status }}</td>
        <td class="py-2 px-4 max-lg:px-2">{{ bankAccount.created_at }}</td>
        <td class="py-2 px-4 max-lg:px-2">{{ bankAccount.update_at }}</td>
      </tr>
    </table>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({
  name: "BankAccountTable",
})
export default class extends Vue {
  @Prop({}) bankAccounts!: any;
  @Prop({}) walletInfo!: any;
}
</script>
