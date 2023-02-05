import { EMPTY } from "./../utils/constant";
import axios from "axios";
import { action, createModule, mutation } from "vuex-class-component";

const VuexModule = createModule({
  namespaced: "bankAccountInfo",
  strict: false,
  target: "nuxt",
  enableLocalWatchers: true,
});
export class UserStore extends VuexModule {
  bankAccountInfo: any =
    {
      id: "",
      user_id: "",
      username: "",
      full_name: "",
      bank_account: "",
      expire_date: "",
    } || null;
  loading: boolean = false;
  bankAccountTransactions: any =
    {
      id: "",
      bank_id: "",
      user_id: "",
      value: "",
      status: "",
      create_at: ""
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
        "http://localhost:5000/api/bankaccount/add",
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
