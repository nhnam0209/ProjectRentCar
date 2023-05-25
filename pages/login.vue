<template>
  <Default>
    <template #content>
      <r-loading :is-loading="isLoading" class="z-10" />

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
  isLoading: Boolean = false;

  async created() {
    this.isLoading = true;
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
        if (res.status == 200) {
          if (res.data[0].is_admin == 1) {
            this.$router.push("/dashboardadmin");
            this.isLogin = true;
            this.isLoading = false;
          } else if (res.data[0].is_admin == 0) {
            this.$router.push("/dashboard/" + res.data[0].id);
            this.isLogin = true;
            this.isLoading = false;
          } else {
            this.$router.push("/login");
            this.isLogin = false;
            this.isLoading = false;
          }
        }
      }
    } catch (error: any) {
      this.$router.push("/login");
      this.isLogin = false;
      this.isLoading = false;
    }
  }
}
</script>
