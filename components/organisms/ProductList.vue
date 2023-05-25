<template>
  <div class="bg-white">
    <search-location @isLoading="getIsLoading" />
    <r-loading :is-loading="isLoading" class="z-10" />
    <div class="flex h-full" v-if="searchResult.length > 0">
      <r-loading :is-loading="isLoading" class="z-10" />
      <rent-car-side-bar v-if="!isMobile" @click="sortCarbyPrice" />
      <product-list-card
        :car-result="searchResult"
        :is-login="isLogin"
        :user-info="userInfo"
      />
    </div>
    <div
      v-else
      class="h-[200px] md:h-[700px] flex justify-center text-slate-400"
    >
      <div
        class="text-center text-xl md:text-5xl flex justify-center items-center"
      >
        <span class="flex self-center text-[20px] font-bold">
          Start searching cars
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { API } from "~/utils/constant";
import axios from "~/utils/myAxios";
@Component({
  name: "Product",
})
export default class extends Vue {
  @Prop({ type: Boolean, default: false }) isMobile!: Boolean;
  isLogin: Boolean = false;
  userInfo: any = [];
  result: any;
  typeSort: any = "";
  isLoading: Boolean = false;

  get searchResult() {
    return this.$vxm.car.result;
  }

  set searchResult(value: any) {
    this.$vxm.car.result = value;
  }

  getIsLoading(value: any) {
    this.isLoading = value;
  }

  sortCarbyPrice(typeFilter: any) {
    this.typeSort = typeFilter;

    if (this.typeSort === "asc") {
      return this.searchResult[0].sort((a: any, b: any) => a.price - b.price);
    }
    if (this.typeSort === "desc") {
      return this.searchResult[0].sort((a: any, b: any) => b.price - a.price);
    }
  }

  async created() {
    this.isLoading = true;
    try {
      if (document.cookie) {
        const res = await axios.get(
          `${process.env.baseURL + API.auth.verify_login}`,
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
        this.isLoading = false;
      } else {
        this.isLogin = false;
        if (localStorage.getItem("car_result")) {
          this.searchResult = JSON.parse(localStorage.car_result);
        }
        this.isLoading = false;
      }
    } catch (error) {
      this.isLogin = false;
      if (localStorage.getItem("car_result")) {
        this.searchResult = JSON.parse(localStorage.car_result);
      }
      this.isLoading = false;
    }
  }
}
</script>
