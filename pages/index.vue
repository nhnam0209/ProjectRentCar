<template>
  <Default>
    <template #content>
      <div class="h-full">
        <welcome-board />
        <div class="py-10 px-14 h-full">
          <banner>
            <template #leftContainer>
              <div class="">
                <div
                  class="relative flex-shrink-0 mb-16 lg:mb-0 lg:mr-10 lg:w-full"
                >
                  <h2
                    class="font-semibold text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl mt-6 sm:mt-10 !leading-[1.2] tracking-tight"
                  >
                    Earn money <br />
                    with Rental Car Service
                  </h2>
                  <span class="block mt-6 text-slate-500 dark:text-slate-400"
                    >With Rental Car Service you will get freeship &amp; savings
                    combo...</span
                  >
                  <div class="flex space-x-2 sm:space-x-5 mt-6 sm:mt-12">
                    <a
                      class="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6 ttnc-ButtonPrimary disabled:bg-opacity-90 bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 text-slate-50 dark:text-slate-800 shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
                      href="/aboutus"
                      >Savings combo</a
                    ><a
                      class="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6 ttnc-ButtonSecondary bg-white text-slate-700 dark:bg-slate-900 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800 border border-slate-100 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
                      href="/aboutus"
                      >Discover more</a
                    >
                  </div>
                </div>
              </div>
            </template>
            <template #rightContainer>
              <img
                src="../static/img/Trading.png"
                alt="illustrate earn money"
              />
            </template>
          </banner>
        </div>
      </div>
    </template>
  </Default>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { API } from "~/utils/constant";
import axios from "~/utils/myAxios";

@Component({
  name: "HomePage",
  layout: "rentcar-layout",
  head() {
    return {
      title: "Home - Rent Car",
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
      if (document.cookie) {
        if (this.isAdmin) {
          const res = await axios.get(
            `${process.env.baseURL + API.auth.verify_login_admin}`,
            {
              headers: {
                Authorization: `${document.cookie}`,
                path: "/",
              },
            }
          );
          this.isLogin = true;
          this.userInfo = res.data.data;
        } else {
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
          this.userInfo = res.data.data;
        }
      } else {
        this.isLogin = false;
      }
    } catch (error) {
      this.isLogin = false;
      console.log(error);
      // this.$router.error({
      //       statusCode: 404,
      //       message: 'Failed to receive content from api',
      //     })
    }
  }
}
</script>
