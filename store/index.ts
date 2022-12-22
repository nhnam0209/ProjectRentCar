// import { GlobalCMS } from '~/store/globalCMS';
// import { ProductStore } from '~/store/product';
import { Store } from 'vuex';
import { UserStore } from '~/store/user';
import { extractVuexModule } from 'vuex-class-component';
// export let vxm:any;
export const strict = false
export default function () {
  return new Store({
    modules: {
      ...extractVuexModule(UserStore),
    //   ...extractVuexModule(ProductStore),
    //   ...extractVuexModule(GlobalCMS)
    }
  });
}