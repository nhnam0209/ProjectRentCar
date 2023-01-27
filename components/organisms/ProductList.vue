<template>
  <div class="bg-white">
    <RentalLocation></RentalLocation>
    <div class="flex h-full" v-if="searchResult.length > 0">
      <RentCarSideBar></RentCarSideBar>
      <ProductListCard
        :car-result="searchResult"
        :is-login="isLogin"
      ></ProductListCard>
    </div>
    <div v-else class="h-[700px]">
      <div
        class="text-center text-xl md:text-5xl flex justify-center items-center"
      >
        <p class="self-center">
          Please enter the search box to have the car for rent
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import axios from "~/utils/myAxios";
@Component({
  name: "Product",
})
export default class extends Vue {
  isLogin: Boolean = false;
  userInfo: any;
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
          "http://localhost:5000/api/auth/verifylogin",
          {
            headers: {
              Authorization: `${document.cookie}`,
            },
          }
        );
        this.isLogin = true;
        this.userInfo = res.data[0];
      } else {
        this.isLogin = false;
        // this.$router.push("/login");
        // setTimeout("location.reload(true)", 100);
      }
      if (localStorage.getItem("car_result")) {
        this.searchResult = JSON.parse(localStorage.car_result);
      }
    } catch (error) {
      this.isLogin = false;
      // this.$router.push("/login");
      // setTimeout("location.reload(true)", 100);
    }
  }
}
</script>
