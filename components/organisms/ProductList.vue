<template>
  <div class="bg-white">
    <search-location />
    <div class="flex h-full" v-if="searchResult.length > 0">
      <rent-car-side-bar v-if="!isMobile" />
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

  get searchResult() {
    return this.$vxm.car.result;
  }

  set searchResult(value: any) {
    this.$vxm.car.result = value;
  }

  async created() {
    try {
      if (document.cookie) {
        const res = await axios.get(
          "http://localhost:5000/api/auth/verify_login",
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
