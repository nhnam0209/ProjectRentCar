<template>
  <div class="bg-slate-100 pb-20">
    <div class="w-full">
      <img
        src="../../static/img/car-profile.jpg"
        alt="RentCar"
        class="w-screen h-auto"
      />
    </div>
    <div class="min-w-screen-xl mx-8 md:max-w-screen-md sm:max-w-screen-sm xl:mx-96 md:mx-52 sm:mx-28">
      <div class="grid grid-cols-2 md:grid-cols-3">
        <div class="flex justify-center drop-shadow-2xl -mt-6">
          <div
            class="bg-fuchsia-500 text-white rounded-full text-center flex flex-col justify-center text-3xl w-20 h-20 md:text-7xl md:w-40 md:h-40 sm:text-3xl  sm:w-28 sm:h-28"
          >
            A
          </div>
        </div>
        <div class="md:col-span-2 py-4 md:py-6">
          <div class="font-bold text-xl leading-5 flex md:text-3xl">
            {{ userInfo.full_name }}
            <div><icon-edit class="w-3 h-3 ml-2 cursor-pointer md:w-5 md:h-5 md:ml-4" /></div>
          </div>
          <div class="mt-4 flex text-sm md:text-lg">
            Created At: {{ userInfo.created_at }}
            <!-- <div class="w-4 flex justify-center mr-8 md:mr-0">-</div> -->
            <!-- <div class="font-semibold text-sm md:text-lg">Chưa có chuyến</div> -->
          </div>
          <div class="flex">
            <div class="w-32 h-16 bg-white flex justify-center mt-5 rounded-lg text-sm md:text-lg">
              <div class="mt-1 font-bold text-neutral-500">Birth of Date</div>
              <div class="flex justify-center font-normal text-black">
                {{ userInfo.birth_of_date }}
              </div>
            </div>
            <div
              class="w-32 h-16 bg-white flex justify-center mt-5 rounded-lg ml-5 text-sm md:text-lg"
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

      <div class="grid grid-cols-3 bg-white pb-8">
        <div class="w-32 h-16 justify-center mt-5 rounded-lg ml-5 text-sm md:text-lg">
          <div class="mt-1 font-bold flex text-xs sm:text-base">Điện thoại <div><icon-edit class="w-3 h-3 ml-2 cursor-pointer md:w-5 md:h-5 md:ml-4" /></div></div>
          <div class="flex justify-center mt-2 -ml-16">
            <icon-success class="w-3 h-3 ml-2 cursor-pointer md:w-5 md:h-5 md:ml-4" />
          </div>
        </div>
        <div class="w-32 h-16 justify-center mt-5 rounded-lg ml-5 text-sm md:text-lg">
          <div class="mt-1 font-bold flex text-xs sm:text-base">GPLX <div><icon-edit class="w-3 h-3 ml-2 cursor-pointer md:w-5 md:h-5 md:ml-4" /></div></div>
          <div class="flex justify-center mt-2 -ml-16">
            <icon-warning class="w-3 h-3 ml-2 cursor-pointer md:w-5 md:h-5 md:ml-3" />
          </div>
          <div class="mt-3 font-medium text-neutral-500 flex text-xs -ml-6">CHƯA XÁC THỰC GPLX</div>
        </div>
        <div class="w-32 h-16 justify-center mt-5 rounded-lg ml-5 text-sm md:text-lg">
          <div class="mt-1 font-bold flex text-xs sm:text-base">Email <div><icon-edit class="w-3 h-3 ml-2 cursor-pointer md:w-5 md:h-5 md:ml-4" /></div></div>
          <div class="flex justify-center ">
            <div class="mt-2 -ml-16">
              <icon-success class="w-3 h-3 ml-2 cursor-pointer md:w-5 md:h-5 md:ml-4" />
            </div>
            <div class="ml-3 mt-2 text-xs sm:text-sm">namnamm@gmail.com</div> 
        </div>
        </div>
      </div>
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
