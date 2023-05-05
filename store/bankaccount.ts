import { API, EMPTY } from "./../utils/constant";
import axios from "axios";
import { action, createModule, mutation } from "vuex-class-component";

const Local_Base_URL = "http://localhost:5000/api/"

const VuexModule = createModule({
  namespaced: "bankAccountInfo",
  strict: false,
  target: "nuxt",
  enableLocalWatchers: true,
});
export class UserStore extends VuexModule {
  bankAccountInfo: any =
    {
      id: EMPTY,
      user_id: EMPTY,
      username: EMPTY,
      full_name: EMPTY,
      bank_account: EMPTY,
      expire_date: EMPTY,
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

  @action async handleAddBankAccount() {
    try {
      const res = await axios.post(
         `${Local_Base_URL + API.bank_account.add_bank_account} `,
        this.bankAccountInfo,
        {
          headers: {
            Authorization: `${document.cookie}`,
          },
        }
      );
      alert(res.data.msg);
    } catch (error: any) {
      const errMessage = JSON.stringify(error.response.data.msg);
      alert(errMessage);
    }
  }
}
