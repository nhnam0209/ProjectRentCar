import { API, EMPTY } from "./../utils/constant";
import axios from "axios";
import { action, createModule, mutation } from "vuex-class-component";

const VuexModule = createModule({
  namespaced: "bankAccountInfo",
  strict: false,
  target: "nuxt",
  enableLocalWatchers: true,
});
export class BankAccountStore extends VuexModule {
  bankAccountInfo: any =
    {
      id: EMPTY,
      user_id: EMPTY,
      username: EMPTY,
      full_name: EMPTY,
      bank_account: EMPTY,
      bank_name: EMPTY,
      expire_date: EMPTY,
      created_at: EMPTY,
      update_at: EMPTY,
    } || null;
  loading: boolean = false;
  bankAccountTransactions: any =
    {
      id: EMPTY,
      bank_id: EMPTY,
      user_id: EMPTY,
      value: EMPTY,
      status: EMPTY,
      create_at: EMPTY,
    } || null;
  @mutation setbankAccountInfo(bankAccountInfo: any) {
    this.bankAccountInfo = bankAccountInfo;
  }
  @mutation setbankAccountTransactions(bankAccountTransactions: any) {
    this.bankAccountTransactions = bankAccountTransactions;
  }

  @action async handleDeleteBankAccount(bankAccountInfo: any) {
    this.bankAccountInfo = bankAccountInfo;
    try {
      axios.delete(
        `${process.env.baseURL + API.bank_account.delete_bank_account}`,
        {
          headers: {
            Authorization: `${document.cookie}`,
          },
          data: {
            id: this.bankAccountInfo.id,
            user_id: this.bankAccountInfo.user_id,
          },
        }
      );
    } catch (error: any) {}
  }
}
