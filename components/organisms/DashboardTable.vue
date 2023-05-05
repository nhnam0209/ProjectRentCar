<template>
  <div class="w-full flex justify-center items-center bg-gray-200">
    <div class="dashboard-table overflow-x-auto">
      <div
        class="flex flex-col z-0"
        v-if="!isManageUser && !isManageCar"
        :class="{ flex: !isManageUser && !isManageCar }"
      >
        <div class="m-4">
          <wallet-transaction-table
            :wallet-transactions="walletTransactions"
          ></wallet-transaction-table>
        </div>

        <div class="m-4">
          <WalletTable :wallet-infos="walletInfos"></WalletTable>
        </div>

        <div class="m-4">
          <BankAccountTable :bank-accounts="bankAccounts"></BankAccountTable>
        </div>
      </div>

      <div class="button flex flex-col lg:flex-row">
        <div class="">
          <RButton
            label="Add"
            @click="toogleIsActive()"
            class="btn-success m-6"
            v-if="isManageUser || isManageCar"
          >
          </RButton>
          <modal-add-user-from-admin
            class="z-50"
            v-if="isActive && isManageUser"
          ></modal-add-user-from-admin>
          <modal-add-car-from-admin
            class="z-50"
            v-if="isActive && isManageCar"
            :user-info="userInfo"
          ></modal-add-car-from-admin>
        </div>

        <div class="flex flex-col w-full h-screen">
          <UsersTable
            v-if="isManageUser"
            :class="isActive ? 'z-0' : 'z-auto'"
          ></UsersTable>
          <CarsTable
            v-if="isManageCar"
            :class="isActive ? 'z-0' : 'z-auto'"
          ></CarsTable>
          <CarTransactionTable
            v-if="isManageCar"
            :cars-transactions="carsTransactions"
          ></CarTransactionTable>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import axios from "axios";
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { API } from "~/utils/constant";

@Component({
  name: "DashboardTable",
})
export default class extends Vue {
  @Prop({ type: Boolean, default: false }) isManageUser!: Boolean;
  @Prop({ type: Boolean, default: false }) isManageCar!: Boolean;
  @Prop({ type: Boolean, default: false }) isDashboard!: Boolean;
  @Prop() userInfo!: any;
  bankAccounts: any = [];
  walletTransactions: any = [];
  walletInfos: any = [];
  carsTransactions: any = [];

  isActive = false;
  isActive_delete = false;

  async created() {
    try {
      if (document.cookie) {
        const bankAccountRes = await axios.get(
          `${process.env.BASE_URL + API.bank_account.admin_query_bank_account}`,
          {
            headers: {
              Authorization: `${document.cookie}`,
            },
          }
        );
        this.bankAccounts = bankAccountRes.data.bank_accounts;

        const walletRes = await axios.get(
          `${process.env.BASE_URL + API.wallet.admin_query_wallet}`,
          {
            headers: {
              Authorization: `${document.cookie}`,
            },
          }
        );
        this.walletInfos = walletRes.data.wallet;

        const walletTransactionRes = await axios.get(
          `${
            process.env.BASE_URL +
            API.wallet_transactions.admin_query_wallet_transactions
          }`,
          {
            headers: {
              Authorization: `${document.cookie}`,
            },
          }
        );
        this.walletTransactions = walletTransactionRes.data.walletTransaction;

        const carsTransactionRes = await axios.get(
          `${
            process.env.BASE_URL +
            API.cars_transactions.admin_query_cars_transactions
          }`,
          {
            headers: {
              Authorization: `${document.cookie}`,
            },
          }
        );
        this.carsTransactions = carsTransactionRes.data.cars_transactions;
      } else {
        this.$router.push("/login");
        setTimeout("location.reload(true)", 100);
      }
    } catch (error) {
      this.$router.push("/dashboardadmin");
      // setTimeout("location.reload(true)", 100);
    }
  }

  toogleIsActive() {
    if (this.isActive == true) {
      this.isActive = false;
    } else {
      this.isActive = true;
    }
  }

  toogleIsActiveDelete() {
    if (this.isActive_delete == true) {
      this.isActive_delete = false;
    } else {
      this.isActive_delete = true;
    }
  }
}
</script>
