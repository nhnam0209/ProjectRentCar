<template>
  <Default>
    <template #content>
      <dashboard-table class="h-full"></dashboard-table>
    </template>
  </Default>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import axios from "~/utils/myAxios";
import { API } from "~/utils/constant";

@Component({
  name: "DashboardAdmin",
  layout: "rentcar-layout",
  head() {
    return {
      title: "Dashboard Admin",
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

  get isAdmin() {
    return this.$vxm.user.isAdmin;
  }
  async created() {
    try {
      // Auth.checkAdmin(this.isLogin, this.userInfo);
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
        this.userInfo = res.data.data;
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
  }
}
</script>
