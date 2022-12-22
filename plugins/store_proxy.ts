
// import { ProductStore } from '~/store/product';
import { UserStore } from '~/store/user';
import { createProxy } from 'vuex-class-component';
import Vue from "vue";
declare module "vue/types/vue"{
  interface Vue{
    $vxm:any
  }
}
export let storeProxy:any;
export default function ({ store }:any) {
  storeProxy = {
    user: createProxy(store, UserStore),
  };
  Vue.prototype.$vxm = storeProxy
}