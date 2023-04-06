<template>
  <div class="bg-slate-100 pb-20 w-full overflow-x-hidden">
    <div class="w-full">
      <img
        src="../../static/img/car-profile.jpg"
        alt="wallpaper"
        class="w-screen h-auto"
      />
    </div>
    <div class="flex flex-col justify-center w-full">
      <div class="w-full lg:mx-40">
        <div
          class="flex flex-col justify-center items-center lg:grid md:grid-cols-2 lg:grid-cols-3 w-full"
        >
          <div class="flex justify-center drop-shadow-2xl py-4 relative">
            <img
              v-if="userInfo.image"
              :src="userInfo.image"
              alt="avatar"
              class="w-40 h-40 md:w-48 md:h-48 align-middle rounded-[50%] cursor-pointer"
              @click="handleChangeAvatar()"
              @mouseenter="handleHover"
              @mouseout="handleHover"
            />
            <img
              v-else
              src="../../static/img/default_avatar.png"
              alt="avatar"
              class="rounded-full w-32 h-32 md:w-40 md:h-40 relative cursor-pointer"
              @click="handleChangeAvatar()"
            />
            <r-tooltip
              v-if="isHover"
              class="z-50 absolute"
              tooltip-content="Click to change avatar"
            />

            <div
              v-if="isMobile"
              @click="handleChangeAvatar()"
              class="absolute bottom-2 right-2 lg:right-[9.5rem]"
              :class="[
                'w-6 h-6 bg-white rounded-md  cursor-pointer',
                userInfo.image && 'lg:right-36',
              ]"
            >
              <IconCamera class="w-6 h-6 bg-white rounded-md cursor-pointer" />
              <input
                ref="fileInput"
                type="file"
                class="hidden"
                @change="onFileChange"
                accept="image/*"
              />
            </div>
          </div>
          <div class="md:col-span-2 py-4 md:py-6">
            <div
              class="font-bold justify-center lg:justify-start text-xl leading-5 flex md:text-3xl"
            >
              {{ userInfo.full_name }}
              <div class="flex justify-center" @click="handleEdit()">
                <icon-edit
                  class="w-3 h-3 ml-2 cursor-pointer self-center md:w-5 md:h-5 md:ml-4"
                />
              </div>
            </div>
            <div
              class="mt-4 flex justify-center lg:justify-start text-sm md:text-lg"
            >
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
                class="w-32 h-16 bg-white flex justify-center flex-col mt-5 rounded-lg ml-5 text-sm md:text-lg"
              >
                <div class="mt-1 flex flex-col font-bold text-neutral-500">
                  <span class="flex self-center">Gender</span>
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
          class="flex flex-col justify-center items-center lg:grid lg:grid-cols-3 bg-white rounded-lg py-4 lg:w-4/5 w-full"
        >
          <div
            v-for="item in userInformationDashboard"
            :key="item.id"
            class="w-full flex-col h-16 justify-center mt-5 ml-0 lg:ml-5 text-sm md:text-lg my-3 lg:my-0 mx-auto lg:mx-0"
          >
            <div class="flex justify-center">
              <div class="mt-1 font-bold inline-flex text-xs sm:text-base">
                <p>{{ item.label }}</p>
                <div @click="handleEdit()">
                  <icon-edit
                    class="w-3 h-3 ml-2 cursor-pointer flex self-center md:w-5 md:h-5 md:ml-4"
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
                class="w-3 h-3 ml-2 self-center cursor-pointer md:w-5 md:h-5 md:ml-4"
              />
            </div>
            <div
              v-else-if="user.driven_license && item.label == 'Driving License'"
              class="flex justify-center mt-2"
            >
              {{ user.driven_license }}
              <icon-success
                class="w-3 h-3 ml-2 self-center cursor-pointer md:w-5 md:h-5 md:ml-4"
              />
            </div>
            <div
              v-else-if="user.email && item.label == 'Email'"
              class="flex justify-center mt-2"
            >
              {{ user.email }}
              <icon-success
                class="w-3 h-3 ml-2 cursor-pointer self-center md:w-5 md:h-5 md:ml-4"
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
import { EMPTY } from "~/utils/constant";
@Component({
  name: "ClientDashboard",
})
export default class extends Vue {
  @Prop() userInfo!: any;
  @Prop({ type: String }) createdAt!: any;
  @Prop({ type: String }) birthOfDate!: any;
  image: any = EMPTY;

  isActive: Boolean = false;
  isHover: Boolean = false;
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
    this.isActive = !this.isActive;
  }

  handleChangeAvatar(): any {
    return this.$refs?.fileInput?.click();
  }

  handleHover() {
    this.isHover = !this.isHover;
  }

  async convertBase64(file: any) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }

  async onFileChange(e: any) {
    var files = e.target.files[0] || e.dataTransfer.files[0];
    if (files.size >= 1024 && files.size < 1048576) {
      const base64 = await this.convertBase64(files);
      this.image = base64;
      this.$vxm.user.setUserId(this.userInfo.id);
      this.$vxm.user.addAvatar(this.image, this.userInfo.id);
    } else {
      alert("This file is too big");
      files = "";
    }
  }

  get user() {
    return this.userInfo;
  }

  get isMobile() {
    return this.$screen.width < 1024;
  }
}
</script>
