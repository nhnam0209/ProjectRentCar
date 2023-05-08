<template>
  <Default>
    <template #content>
      <login-form />
    </template>
  </Default>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { API } from "~/utils/constant";
import axios from "~/utils/myAxios";

@Component({
  name: "LoginPage",
  layout: "rentcar-layout",
  head() {
    return {
      title: "Sign In",
    };
  },
})
export default class extends Vue {
  isLogin: Boolean = false;

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
        if (res.status == 200) {
          if (res.data[0].is_admin == 1) {
            this.$router.push("/dashboardadmin");
            this.isLogin = true;
          } else if (res.data[0].is_admin == 0) {
            this.$router.push("/dashboard/" + res.data[0].id);
            this.isLogin = true;
          } else {
            this.$router.push("/login");
            this.isLogin = false;
          }
        }
      }
    } catch (error: any) {
      this.$router.push("/login");
      this.isLogin = false;
    }
  }
}
</script>
