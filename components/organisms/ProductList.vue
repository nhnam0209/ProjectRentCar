<template>
  <div class="bg-white">
    <search-location />
    <div class="flex h-full" v-if="searchResult.length > 0">
      <rent-car-side-bar v-if="!isMobile" @click="sortCarbyPrice"/>
      <product-list-card
        :car-result="searchResult"
        :is-login="isLogin"
        :user-info="userInfo"
      />
    </div>
    <div v-else class="h-[700px] flex justify-center text-slate-400">
      <div
        class="text-center text-xl md:text-5xl flex justify-center items-center"
      >
        <p class="flex self-center">No Cars Are Available!!!</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import axios from "~/utils/myAxios";
@Component({
  name: "Product",
})
export default class extends Vue {
  @Prop({ type: Boolean, default: false }) isMobile!: Boolean;
  isLogin: Boolean = false;
  userInfo: any = [];
  result: any;
  typeSort: any = '';
  
  get searchResult() {
    return this.$vxm.car.result;
  }

  set searchResult(value: any) {
    this.$vxm.car.result = value;
  }
  
  sortCarbyPrice(typeFilter: any){
    this.typeSort = typeFilter;

    if(this.typeSort === 'asc'){
      return this.searchResult[0].sort((a: any, b: any) => a.price - b.price);
    }
    if(this.typeSort === 'desc'){
      return this.searchResult[0].sort((a: any, b: any) => b.price - a.price);
    }
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
        if (localStorage.getItem("car_result")) {
          this.searchResult = JSON.parse(localStorage.car_result);
        }
      } else {
        this.isLogin = false;
        if (localStorage.getItem("car_result")) {
          this.searchResult = JSON.parse(localStorage.car_result);
        }
      }
    } catch (error) {
      this.isLogin = false;
      if (localStorage.getItem("car_result")) {
        this.searchResult = JSON.parse(localStorage.car_result);
      }
    }
  }
}
</script>
