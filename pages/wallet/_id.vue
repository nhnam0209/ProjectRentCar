<template>
  <Default>
    <template #content>
      <div class="h-screen mt-32 max-lg:mt-0">
        <list-credit-card
          :user-info="userInfo"
          :wallet-info="walletInfo"
          :bank-accounts="bankAccounts"
        ></list-credit-card>
        <wallet-activities
          :wallet-info="walletInfo"
          :wallet-transactions="walletTransactions"
          :user-info="userInfo"
        ></wallet-activities>
      </div>
    </template>
  </Default>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { API } from "~/utils/constant";
import axios from "~/utils/myAxios";

@Component({
  name: "MyWalletPage",
  layout: "rentcar-layout",
  head() {
    return {
      title: "My Wallet",
    };
  },
})
export default class extends Vue {
  isLogin: Boolean = false;
  userInfo: any = {};
  walletInfo: any = {};
  walletTransactions: any = [];
  bankAccounts: any = [];

  isManageCar: Boolean = false;

  get user() {
    return this.$vxm.user.userInfo;
  }

  set user(value: any) {
    this.$vxm.user.setUserLogin(value);
  }

  get wallet() {
    return this.$vxm.user.userInfo;
  }

  set wallet(value: any) {
    this.$vxm.user.setWallet(value);
  }

  get isAdmin() {
    return this.$vxm.user.isAdmin;
  }

  async created() {
    try {
      console.log(document.cookie);
      if (document.cookie) {
        const res = await axios.get(
          `${process.env.baseURL + API.auth.verify_login}`,
          {
            headers: {
              Authorization: `${document.cookie}`,
            },
          }
        );
        this.isLogin = true;
        this.userInfo = res.data[0];
        const resWallet = await axios.post(
          `${process.env.baseURL + API.wallet.query_wallet}`,
          {
            user_id: this.userInfo.id,
          },
          {
            headers: {
              Authorization: `${document.cookie}`,
            },
          }
        );
        this.walletInfo = resWallet.data.wallet;
        const resWalletTransaction = await axios.post(
          `${
            process.env.baseURL +
            API.wallet_transactions.query_wallet_transactions
          }`,
          {
            user_id: this.userInfo.id,
            wallet_id: this.walletInfo.id,
          },
          {
            headers: {
              Authorization: `${document.cookie}`,
            },
          }
        );
        this.walletTransactions = resWalletTransaction.data.walletTransaction;

        const bankAccountRes = await axios.post(
          `${process.env.baseURL + API.bank_account.query_bank_account}`,
          {
            user_id: this.userInfo.id,
          },
          {
            headers: {
              Authorization: `${document.cookie}`,
            },
          }
        );
        this.bankAccounts.push(bankAccountRes.data.bank_account);
        console.log(this.bankAccounts);
      } else {
        // this.$nuxt.error({ statusCode: 500 });
        this.$router.push("/login");
      }
    } catch (error) {
      this.isLogin = false;
      // this.$nuxt.error({ statusCode: 500 });
      this.$router.push("/login");
      setTimeout("location.reload(true)", 100);
    }
  }

  testValue() {
    console.log(this.bankAccounts);
  }

  mounted() {
    this.user = this.userInfo;
    this.isManageCar = true;
  }
}
</script>
