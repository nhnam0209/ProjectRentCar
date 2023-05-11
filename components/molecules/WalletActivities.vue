<template>
  <div class="bg-white">
    <div class="block justify-between max-lg:block">
      <div class="py-3 px-5 max-lg:block">
        <div class="grid grid-cols-3 gap-4 max-sm:grid-cols-2">
          <div class="text-white shadow rounded-xl px-6 py-5 bg-[#379683]">
            <div class="text-xl font-medium block mb-2">Total Balance</div>
            <div class="text-2xl font-bold">${{ walletInfo.balance }}</div>
          </div>

          <div class="bg-red-500 text-white shadow rounded-xl px-6 py-5">
            <div class="text-xl font-medium block mb-2">Expenses</div>
            <div class="text-2xl font-bold">$552.95</div>
          </div>

          <div
            class="flex justify-around items-center border border-solid border-black rounded-xl max-lg:col-span-2"
          >
            <RButton
              class="w-1/3 border border-solid rounded-xl border-black bg-black shadow"
              label="Deposit"
              @btn-click="toogleIsActiveDeposit()"
            ></RButton>
            <RButton
              class="w-1/3 border border-solid rounded-xl border-black bg-black shadow"
              label="Withdrawn"
              @btn-click="toogleIsActiveWithdraw()"
            ></RButton>
          </div>
        </div>
      </div>

      <div class="py-3 px-5 w-full">
        <div class="text-2xl font-bold py-4">Last Activities</div>
        <table class="w-full border border-solid overflow-auto">
          <tr class="bg-[#379683] text-2xl text-white max-lg:text-xl">
            <th class="py-2 px-4 max-md:px-2">ID</th>
            <th class="py-2 px-4 max-md:px-2">Description</th>
            <th class="py-2 px-4 max-md:px-2">Transaction</th>
            <th class="py-2 px-4 max-md:px-2">Status</th>
            <th class="py-2 px-4 max-md:px-2">Date</th>
          </tr>
          <tr
            class="text-2xl text-center max-lg:text-lg"
            v-for="transaction in walletTransactions"
            :key="transaction.id"
          >
            <td class="py-2 px-4 max-md:px-2">{{ transaction.id }}</td>
            <td class="py-2 px-4 max-md:px-2">{{ transaction.description }}</td>

            <td class="py-2 px-4 max-md:px-2">
              <div v-if="transaction.adding > 0">
                +{{ transaction.adding }}$
              </div>
              <div v-if="transaction.subtract > 0">
                -{{ transaction.subtract }}
              </div>
            </td>
            <td class="py-2 px-4 max-md:px-2">{{ transaction.status }}</td>
            <td class="py-2 px-4 max-md:px-2">{{ transaction.created_at }}</td>
          </tr>
        </table>
      </div>
    </div>
    <ModalDeposit
      v-if="isActiveDeposit"
      :wallet-transactions="walletTransactions"
      :wallet-info="walletInfo"
      :user-info="userInfo"
    ></ModalDeposit>
    <ModalWithdraw
      v-if="isActiveWithdraw"
      :wallet-transactions="walletTransactions"
      :wallet-info="walletInfo"
      :user-info="userInfo"
    ></ModalWithdraw>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({
  name: "WalletActivities",
})
export default class extends Vue {
  @Prop({}) walletInfo!: any;
  @Prop({}) userInfo!: any;
  @Prop({}) walletTransactions!: any;
  isActiveDeposit: boolean = false;
  isActiveWithdraw: boolean = false;

  toogleIsActiveDeposit() {
    this.isActiveDeposit = !this.isActiveDeposit;
  }

  toogleIsActiveWithdraw() {
    this.isActiveWithdraw = !this.isActiveWithdraw;
  }
}
</script>
