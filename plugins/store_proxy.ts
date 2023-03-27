import Vue from "vue";
import { WalletStore } from "~/store/wallet";
import { UserStore } from "~/store/user";
import { createProxy } from "vuex-class-component";
import { CarStore } from "~/store/car";
declare module "vue/types/vue" {
  interface Vue {
    $vxm: any;
  }
}
export let storeProxy: any;
export default function ({ store }: any) {
  storeProxy = {
    user: createProxy(store, UserStore),
    car: createProxy(store, CarStore),
    wallet: createProxy(store, WalletStore),
  };
  Vue.prototype.$vxm = storeProxy;
}
