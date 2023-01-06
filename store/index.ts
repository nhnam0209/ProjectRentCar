import { CarStore } from "~/store/car";
import { WalletStore } from "~/store/wallet";
import { Store } from "vuex";
import { UserStore } from "~/store/user";
import { extractVuexModule } from "vuex-class-component";
// export let vxm:any;
export const strict = false;
export default function () {
  return new Store({
    modules: {
      ...extractVuexModule(UserStore),
      ...extractVuexModule(CarStore),
      ...extractVuexModule(WalletStore),
    },
  });
}
