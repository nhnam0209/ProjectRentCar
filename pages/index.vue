<template>
  <Default>
    <template #content>
      <div class="h-full">
        <SearchForm />
      </div>
    </template>
  </Default>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import axios from "~/utils/myAxios";

@Component({
  name: "HomePage",
  layout: "rentcar-layout",
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
      if (document.cookie) {
        if (this.isAdmin) {
          const res = await axios.get(
            "http://localhost:5000/api/auth/verifyloginAdmin",
            {
              headers: {
                Authorization: `${document.cookie}`,
              },
            }
          );
          this.isLogin = true;
          this.userInfo = res.data.data;
        } else {
          const res = await axios.get(
            "http://localhost:5000/api/auth/verifylogin",
            {
              headers: {
                Authorization: `${document.cookie}`,
              },
            }
          );
          this.isLogin = true;
          this.userInfo = res.data.data;
        }
      }
    } catch (error) {
      this.isLogin = false;
    }
  }
}
</script>
