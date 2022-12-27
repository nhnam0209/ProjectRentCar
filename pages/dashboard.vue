<template>
  <Default>
    <template #content>
      <div>
        <client-dashboard :user-info="userInfo" />
      </div>
    </template>
  </Default>
</template>

<script lang="ts">
import axios from "../utils/myAxios";
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  name: "Dashboard",
  layout: "rentcar-layout",
})
export default class extends Vue {
  userInfo: any = {};
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
        this.userInfo = res.data.data;
      }
    } catch (error) {
      this.$router.push("/");
    }
  }
  // get user() {
  //   return this.$vxm.user.userInfo;
  // }
  // set user(value: any) {
  //   this.$vxm.user.setUserLogin(value);
  // }
}
</script>
