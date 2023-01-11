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
      <div>Please enter the search box to have the car for rent</div>
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
  get searchResult() {
    return this.$vxm.car.result;
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
        this.$router.push("/login");
        setTimeout("location.reload(true)", 100);
      }
    } catch (error) {
      this.isLogin = false;
      this.$router.push("/login");
      setTimeout("location.reload(true)", 100);
    }
  }
}
</script>
