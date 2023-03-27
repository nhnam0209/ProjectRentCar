<template>
  <div class="bg-slate-100 pb-20 w-full overflow-x-hidden">
    <div class="w-full">
      <img
        src="../../static/img/car-profile.jpg"
        alt="RentCar"
        class="w-screen h-auto"
      />
    </div>
    <div class="flex flex-col justify-center">
      <div class="w-full mx-40">
        <div class="grid grid-cols-2 md:grid-cols-3">
          <div class="flex justify-center drop-shadow-2xl -mt-6">
            <div
              class="bg-fuchsia-500 text-white rounded-full text-center flex flex-col justify-center text-3xl w-20 h-20 md:text-7xl md:w-40 md:h-40 sm:text-3xl sm:w-28 sm:h-28 relative"
            >
              <div
                class="absolute w-10 h-10 bottom-1 right-1 rounded-full bg-gray-300/80 cursor-pointer"
              >
                <IconCamera
                  class="w-6 h-6 absolute bottom-2 right-2"
                ></IconCamera>
              </div>
              A
            </div>
          </div>
          <div class="md:col-span-2 py-4 md:py-6">
            <div class="font-bold text-xl leading-5 flex md:text-3xl">
              {{ userInfo.full_name }}
              <div class="flex justify-center" @click="handleEdit()">
                <icon-edit
                  class="w-3 h-3 ml-2 cursor-pointer self-center md:w-5 md:h-5 md:ml-4"
                />
              </div>
            </div>
            <div class="mt-4 flex text-sm md:text-lg">
              Created At: {{ createdAt }}
            </div>
            <div class="flex">
              <div
                class="w-32 h-16 bg-white flex justify-center flex-col mt-5 rounded-lg text-sm md:text-lg"
              >
                <div
                  class="mt-1 flex justify-center font-bold text-neutral-500"
                >
                  Birth of Date
                </div>
                <div
                  v-if="user.birth_of_date"
                  class="flex justify-center font-normal text-black"
                >
                  {{ birthOfDate }}
                </div>
                <div v-else class="flex justify-center">
                  <div class="flex-col self-center">
                    <icon-warning
                      class="w-3 h-3 mt-2 ml-2 flex self-center cursor-pointer md:w-5 md:h-5 md:ml-3"
                    />
                    <div
                      class="mt-3 font-medium text-center text-neutral-500 flex text-xs"
                    >
                      Not Verify yet
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="w-32 h-16 bg-white flex justify-center mt-5 rounded-lg ml-5 text-sm md:text-lg"
              >
                <div class="mt-1 font-bold text-neutral-500">
                  Gender
                  <div
                    v-if="user.gender"
                    class="flex justify-center font-normal text-black"
                  >
                    {{ userInfo.gender }}
                  </div>
                  <div v-else class="flex justify-center">
                    <div class="flex-col self-center">
                      <icon-warning
                        class="w-3 h-3 mt-2 ml-2 flex self-center cursor-pointer md:w-5 md:h-5 md:ml-3"
                      />
                      <div
                        class="mt-3 font-medium text-center text-neutral-500 flex text-xs"
                      >
                        Not Verify yet
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="flex flex-col lg:grid lg:grid-cols-3 bg-white rounded-lg pb-8 w-4/5"
        >
          <div
            v-for="item in userInformationDashboard"
            :key="item.id"
            class="w-full flex-col h-16 justify-center mt-5 ml-5 text-sm md:text-lg my-3 lg:my-0"
          >
            <div class="flex justify-center">
              <div class="mt-1 font-bold inline-flex text-xs sm:text-base">
                <p>{{ item.label }}</p>
                <div @click="handleEdit()">
                  <icon-edit
                    class="w-3 h-3 ml-2 cursor-pointer self-center md:w-5 md:h-5 md:ml-4"
                  />
                </div>
              </div>
            </div>
            <div
              v-if="user.phone_number && item.label == 'Phone Number'"
              class="flex justify-center mt-2"
            >
              {{ user.phone_number }}
              <icon-success
                class="w-3 h-3 ml-2 cursor-pointer md:w-5 md:h-5 md:ml-4"
              />
            </div>
            <div
              v-else-if="user.driven_license && item.label == 'Driving License'"
              class="flex justify-center mt-2"
            >
              {{ user.driven_license }}
              <icon-success
                class="w-3 h-3 ml-2 cursor-pointer md:w-5 md:h-5 md:ml-4"
              />
            </div>
            <div
              v-else-if="user.email && item.label == 'Email'"
              class="flex justify-center mt-2"
            >
              {{ user.email }}
              <icon-success
                class="w-3 h-3 ml-2 cursor-pointer md:w-5 md:h-5 md:ml-4"
              />
            </div>
            <div v-else class="flex flex-col justify-center items-center">
              <icon-warning
                class="w-3 h-3 mt-2 ml-4 flex self-center cursor-pointer md:w-5 md:h-5 md:ml-3 md:mr-4"
              />
              <span
                class="mt-3 font-medium text-center text-neutral-500 flex text-xs"
              >
                Not Verify yet
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <modal-update-profile
      v-if="isActive"
      :user-info="user"
      :is-close="isActive"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
// import axios from "~/utils/myAxios";
@Component({
  name: "ClientDashboard",
})
export default class extends Vue {
  @Prop() userInfo!: any;
  @Prop({ type: String }) createdAt!: any;
  @Prop({ type: String }) birthOfDate!: any;
  isActive: Boolean = false;

  userInformationDashboard = [
    {
      id: 1,
      label: "Phone Number",
    },
    {
      id: 2,
      label: "Driving License",
    },
    {
      id: 3,
      label: "Email",
    },
  ];

  handleEdit() {
    this.isActive ? (this.isActive = false) : (this.isActive = true);
  }

  get user() {
    return this.userInfo;
  }
}
</script>
