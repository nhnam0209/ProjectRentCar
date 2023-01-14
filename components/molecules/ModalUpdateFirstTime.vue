<template>
  <div class="background-modal bg-gray-200/50 block">
    <form
      action=""
      class="signup-form justify-center items-center bg-white rounded-xl shadow-xl"
      :class="{ 'modal-close': isActive }"
      @submit.prevent="handleUpdateUserInfo(user)"
    >
      <div class="p-6">
        <header class="title-signup text-3xl font-bold mt-7">
          <span>Please Update Your Information</span>
        </header>
        <div class="relative my-7 inline-flex">
          <label class="top-2/4 text-lg">Gender:</label>
          <select name="gender" id="gender" v-model="user.gender">
            <option value="" disabled>Please Select</option>
            <option
              v-for="gender in genders"
              :key="gender.id"
              :value="gender.value"
            >
              {{ gender.name }}
            </option>
          </select>
        </div>
        <div class="relative border-bottom my-7">
          <input
            type="text"
            class="login-input w-full px-1.5 h-10 text-lg border-none outline-none bg-none"
            v-model="user.id_card"
          />
          <label class="label-input top-2/4 absolute text-lg">ID Card:</label>
        </div>
        <div class="relative border-bottom my-7">
          <input
            type="date"
            class="login-input w-full px-1.5 h-10 text-lg border-none outline-none bg-none"
            v-model="user.birth_of_date"
          />
          <label class="label-input top-2/4 absolute text-lg"
            >Birth Of Date:</label
          >
        </div>
        <div class="relative border-bottom my-7">
          <input
            type="text"
            class="login-input w-full px-1.5 h-10 text-lg border-none outline-none bg-none"
            v-model="user.phone_number"
          />
          <label class="label-input top-2/4 absolute text-lg"
            >Phone Number:</label
          >
        </div>
        <div class="relative border-bottom my-7">
          <input
            type="text"
            class="login-input w-full px-1.5 h-10 text-lg border-none outline-none bg-none"
            v-model="user.driven_license"
          />
          <label class="label-input top-2/4 absolute text-lg"
            >Driving License:</label
          >
        </div>
      </div>
      <div class="button-group flex justify-between w-full px-7">
        <button
          type="submit"
          class="btn btn-update text-lg text-white font-bold my-7"
        >
          Update
        </button>
        <!-- <button class="btn btn-close text-lg text-white font-bold my-7">
          Close
        </button> -->
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
@Component({
  name: "ModalUpdate",
})
export default class extends Vue {
  @Prop({ type: Object }) userInfo!: any;
  isActive: Boolean = false;
  genders = [
    {
      id: "1",
      name: "Male",
      value: "Male",
    },
    {
      id: "2",
      name: "Female",
      value: "Female",
    },
    {
      id: "3",
      name: "Others",
      value: "Others",
    },
  ];

  handleUpdateUserInfo(user: any) {
    try {
      this.$vxm.user.setUser(this.userInfo);
      this.$vxm.user.updateUser(user);
    } catch (error) {
      throw error;
    }
  }

  get user() {
    return this.$vxm.user.userInfo;
  }

  set user(value: any) {
    this.$vxm.user.setUserInfo(value);
  }
}
</script>
