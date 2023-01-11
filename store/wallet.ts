import { EMPTY } from "./../utils/constant";
import axios from "axios";
import { action, createModule, mutation } from "vuex-class-component";
const VuexModule = createModule({
  namespaced: "walletInfo",
  strict: false,
  target: "nuxt",
  enableLocalWatchers: true,
});
export class WalletStore extends VuexModule {
  wallet: any =
    [
      {
        id: EMPTY,
        user_id: EMPTY,
        balance: EMPTY,
        status: EMPTY,
      },
    ] || null;
  loading: Boolean = false;
  walletTransactions: any = {
    user_id: EMPTY,
    wallet_id: EMPTY,
    adding: EMPTY,
    subtract: EMPTY,
    status: EMPTY,
    created_at: EMPTY,
  };
  result: any = [] || null;

  @mutation setWallet(wallet: any) {
    this.wallet = wallet;
  }
  @mutation setWalletTransaction(wallet_transactions: any) {
    this.walletTransactions = wallet_transactions;
  }
  @mutation setResult(result: any) {
    this.result = result;
  }

  // @action async removeCar(car: any) {
  //   try {
  //     await axios.delete("http://localhost:5000/api/cars/deleteAdmin", {
  //       headers: {
  //         Authorization: `${document.cookie}`,
  //       },
  //       data: {
  //         id: car.id,
  //         userId: car.user_id,
  //       },
  //     });
  //     alert(`The car ${car.name} with id: ${car.id} is deleted!!!`);
  //     setTimeout("location.reload(true)", 100);
  //   } catch (error: any) {
  //     const errMessage = JSON.stringify(error.response.data.msg);
  //     alert(errMessage);
  //   }
  // }

  @action async handleSearchCar(car: any) {
    try {
      const req = await axios.post("http://localhost:5000/api/cars/find", car);
      this.result.append(req);
      console.log(this.result);
    } catch (error: any) {
      const errMessage = JSON.stringify(error.response.data.msg);
      alert(errMessage);
    }
  }
  @action async removeCar(car: any) {
    try {
      await axios.delete("http://localhost:5000/api/cars/deleteAdmin", {
        headers: {
          Authorization: `${document.cookie}`,
        },
        data: {
          id: car.id,
          userId: car.user_id,
        },
      });
      alert(`The car ${car.name} with id: ${car.id} is deleted!!!`);
      setTimeout("location.reload(true)", 100);
    } catch (error: any) {
      const errMessage = JSON.stringify(error.response.data.msg);
      alert(errMessage);
    }
  }
  @action async updateCar(car: any) {
    console.log(car);
  }
}
