<template>
  <Default>
    <template #content>
      <DashboardTable
        class="h-full"
        :is-manage-car="isManageCar"
        :user-info="userInfo"
      ></DashboardTable>
    </template>
  </Default>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import axios from "~/utils/myAxios";
import Auth from "../service/authentication";

@Component({
  name: "DashboardAdmin",
  layout: "rentcar-layout",
})
export default class extends Vue {
  isLogin: Boolean = false;
  userInfo: any = {};
  isManageCar: Boolean = false;

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
          "http://localhost:5000/api/auth/verify_login_admin",
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
