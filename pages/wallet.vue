<template>
  <Default>
    <template #content>
      <list-credit-card :user-info="userInfo" :wallet-info="walletInfo" :bank-accounts="bankAccounts"></list-credit-card>
      <wallet-activities
        :wallet-info="walletInfo"
        :wallet-transactions="walletTransactions"
        :user-info="userInfo"
      ></wallet-activities>
      <RButton class="btn-assent" name-btn="test" @btn-click="testValue()"></RButton>
    </template>
  </Default>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import axios from "~/utils/myAxios";

@Component({
  name: "MyWalletPage",
  layout: "rentcar-layout",
})
export default class extends Vue {
  isLogin: Boolean = false;
  userInfo: any = {};
  walletInfo: any = {};
  walletTransactions: any = [];
  bankAccounts: any = {};

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
      if (document.cookie) {
        const res = await axios.get(
          "http://localhost:5000/api/auth/verifylogin",
          {
            headers: {
              Authorization: `${document.cookie}`,
            },
          }
        );
        this.isLogin = true;
        this.userInfo = res.data[0];
        const resWallet = await axios.post(
          "http://localhost:5000/api/wallet/find",
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
        console.log(resWallet.data)

        const resWalletTransaction = await axios.post(
          "http://localhost:5000/api/wallet/findTransaction",
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

        const bankAccountRes = await axios.get(
          "http://localhost:5000/api/bankaccount/findall",
          {
            headers: {
              Authorization: `${document.cookie}`,
            },
          }
        );
        this.bankAccounts = bankAccountRes.data.bankAccount;

      } else {
        //this.$router.push("/login");
        //setTimeout("location.reload(true)", 100);
      }
    } catch (error) {
      this.isLogin = false;
      //this.$router.push("/login");
      //setTimeout("location.reload(true)", 100);
    }
  }

  testValue(){
    console.log(this.bankAccounts)
  }

  mounted() {
    this.user = this.userInfo;
    this.isManageCar = true;
  }
}
</script>
