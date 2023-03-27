<template>
  <Default>
    <template #content>
      <div>
        <client-dashboard
          :user-info="userInfo"
          :created-at="createdAt"
          :birth-of-date="birthOfDate"
        />
        <modal-update-first-time v-if="isEdit" :user-info="userInfo" />
      </div>
    </template>
  </Default>
</template>

<script lang="ts">
import axios from "../../utils/myAxios";
import { Component, Vue } from "nuxt-property-decorator";
import { EMPTY } from "~/utils/constant";
@Component({
  name: "Dashboard",
  layout: "rentcar-layout",
})
export default class extends Vue {
  userInfo: any = [];
  createdAt: any = EMPTY;
  birthOfDate: any = EMPTY;
  isEdit: any = EMPTY;

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
        this.userInfo = res.data[0];
        const created_at = this.userInfo.created_at.split("T");
        const birth_of_date = this.userInfo.birth_of_date.split("T");
        this.birthOfDate = birth_of_date[0];
        this.createdAt = created_at[0];
        if (this.userInfo.id_card == "") {
          this.isEdit = true;
        } else {
          this.isEdit = false;
        }
      } else {
        this.$router.push("/login");
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
