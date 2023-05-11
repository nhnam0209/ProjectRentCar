<template>
  <Default>
    <template #content>
      <div class="h-screen mt-32 max-lg:mt-0">
        <NavigationBarMyCar></NavigationBarMyCar>
        <ListCars :my-cars="myCars"></ListCars>
      </div>
    </template>
  </Default>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { API } from "~/utils/constant";
import axios from "~/utils/myAxios";

@Component({
  name: "MyCarPage",
  layout: "rentcar-layout",
})
export default class extends Vue {
  isLogin: Boolean = false;
  userInfo: any = {};
  isManageCar: Boolean = false;
  myCars: any = [];

  get user() {
    return this.$vxm.user.userInfo;
  }

  set user(value: any) {
    this.$vxm.user.setUserLogin(value);
  }

  get isAdmin() {
    return this.$vxm.user.isAdmin;
  }
  async created() {
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

        const myCarsRes = await axios.post(
          `${process.env.baseURL + API.cars.query_car}`,
          {
            user_id: this.userInfo.id,
          },
          {
            headers: {
              Authorization: `${document.cookie}`,
            },
          }
        );
        this.myCars = myCarsRes.data.cars;
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

  mounted() {
    this.user = this.userInfo;
    this.isManageCar = true;
  }
}
</script>
