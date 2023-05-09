<template>
  <Default>
    <template #content>
      <NavigationBarMyCar class="mt-16 max-lg:mt-0"></NavigationBarMyCar>
      <AddNewCar class="bg-gray-200" :user-info="userInfo"></AddNewCar>
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
  head() {
    return {
      title: "Register Car",
    };
  },
})
export default class extends Vue {
  isLogin: Boolean = false;
  userInfo: any = {};

  get user() {
    return this.$vxm.user.userInfo;
  }

  set user(value: any) {
    this.$vxm.user.setUserLogin(value);
  }

  async created() {
    try {
      if (document.cookie) {
        const res = await axios.get(
          `${process.env.baseURL + API.auth.verify_login}`,
          {
            headers: {
              Authorization: `${document.cookie}`,
              path: "/",
            },
          }
        );
        this.isLogin = true;
        this.userInfo = res.data[0];
      } else {
        //this.$router.push("/login");
        //setTimeout("location.reload(true)", 100);
      }
    } catch (error) {
      this.isLogin = false;
      //this.$router.push("/login");
      //setTimeout("location.reload(true)", 100);
    }
  }
}
</script>
