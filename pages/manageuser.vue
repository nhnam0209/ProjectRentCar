<template>
  <Default>
    <template #content>
      <DashboardTable
        class="h-full max-lg:mt-0"
        :is-manage-user="isManageUser"
      ></DashboardTable>
    </template>
  </Default>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { API } from "~/utils/constant";
import axios from "~/utils/myAxios";
// import Auth from "../service/authentication";

@Component({
  name: "DashboardAdmin",
  layout: "rentcar-layout",
  head() {
    return {
      title: "Manage User",
    };
  },
})
export default class extends Vue {
  isLogin: Boolean = false;
  userInfo: any = {};
  isManageUser: Boolean = false;

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
          `${process.env.baseURL + API.auth.verify_login_admin}`,
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

  mounted() {
    this.user = this.userInfo;
    this.isManageUser = true;
  }
}
</script>
