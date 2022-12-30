<template>
  <Default>
    <template #content>
      <LoginForm />
    </template>
  </Default>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import axios from "~/utils/myAxios";

@Component({
  name: "LoginPage",
  layout: "rentcar-layout",
})
export default class extends Vue {
  isLogin: Boolean = false;

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
        if (res.status == 200) {
          if (res.data.isAdmin == 1) {
            this.$router.push("/dashboardadmin");
            this.isLogin = true;
          } else {
            this.$router.push("/dashboard");
            this.isLogin = true;
          }
        }
      }
    } catch (error: any) {
      this.isLogin = false;
    }
  }
}
</script>
