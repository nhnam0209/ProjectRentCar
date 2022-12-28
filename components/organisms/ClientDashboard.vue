<template>
  <div class="bg-slate-100">
    <div class="w-full">
      <img
        src="../../static/img/car-profile.jpg"
        alt="RentCar"
        class="w-screen h-auto"
      />
    </div>
    <div class="min-w-screen-xl mx-52 md:max-w-screen-md sm:max-w-screen-sm">
      <div class="grid grid-cols-2 md:grid-cols-3">
        <div class="flex justify-center drop-shadow-2xl -mt-6 sm:-mt-6">
          <div
            class="bg-fuchsia-500 text-white rounded-full text-center flex flex-col justify-center text-3xl w-20 h-20 md:text-7xl md:w-40 md:h-40 sm:text-3xl sm:w-20 sm:h-20"
          >
            A
          </div>
        </div>
        <div class="md:col-span-2 py-6">
          <div class="font-bold text-3xl leading-5 flex">
            {{ userInfo.full_name }}
            <div><icon-edit class="w-5 h-5 ml-4 cursor-pointer" /></div>
          </div>
          <div class="mt-4 flex">
            Created At: {{ userInfo.created_at }}
            <!-- <div class="w-4 flex justify-center">-</div> -->
            <!-- <div class="font-semibold">Chưa có chuyến</div> -->
          </div>
          <div class="flex">
            <div class="w-32 h-16 bg-white flex justify-center mt-5 rounded-lg">
              <div class="mt-1 font-bold text-neutral-500">Birth of Date</div>
              <div class="flex justify-center font-normal text-black">
                {{ userInfo.birth_of_date }}
              </div>
            </div>
            <div
              class="w-32 h-16 bg-white flex justify-center mt-5 rounded-lg ml-5"
            >
              <div class="mt-1 font-bold text-neutral-500">
                Gender
                <div class="flex justify-center font-normal text-black">
                  {{ userInfo.gender }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { EMPTY } from "~/utils/constant";
import axios from "~/utils/myAxios";
@Component({
  name: "ClientDashboard",
})
export default class extends Vue {
  @Prop({ type: Object }) userInfo!: any;

  computed() {}
}
</script>
