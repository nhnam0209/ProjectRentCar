<template>
  <div
    class="fixed right-0 top-0 bottom-0 left-0 z-[99] bg-black/70 flex justify-center items-center"
    :class="{ '!hidden': isActive }"
  >
    <form
      action=""
      class="signup-form justify-center items-center bg-white rounded-xl shadow-xl relative"
    >
      <span
        class="absolute top-1 right-1 cursor-pointer"
        @click="toogleIsActive()"
      >
        <icon-x class="w-6 h-6"></icon-x>
      </span>
      <div class="p-6">
        <header class="title-signup text-3xl font-bold mt-7">
          <span>Edit Your Information</span>
        </header>
        <div class="relative border-bottom my-7">
          <input
            type="text"
            class="login-input w-full px-1.5 h-10 text-lg border-none outline-none bg-none"
            v-model="user.first_name"
            :placeholder="userInfo.first_name"
          />
          <label class="label-input top-2/4 absolute text-lg"
            >First Name:</label
          >
        </div>
        <div class="relative border-bottom my-7">
          <input
            type="text"
            class="login-input w-full px-1.5 h-10 text-lg border-none outline-none bg-none"
            v-model="user.last_name"
            :placeholder="userInfo.last_name"
          />
          <label class="label-input top-2/4 absolute text-lg">Last Name:</label>
        </div>
        <div class="relative border-bottom my-7">
          <input
            type="text"
            class="login-input w-full px-1.5 h-10 text-lg border-none outline-none bg-none"
            v-model="user.email"
            :placeholder="userInfo.email"
          />
          <label class="label-input top-2/4 absolute text-lg">Email:</label>
        </div>
        <div class="relative my-7 inline-flex">
          <label class="top-2/4 text-lg">Gender:</label>
          <select
            name="gender"
            id="gender"
            v-model="user.gender"
            :placeholder="userInfo.gender"
          >
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
            :placeholder="userInfo.id_card"
          />
          <label class="label-input top-2/4 absolute text-lg">ID Card:</label>
        </div>
        <div class="relative border-bottom my-7">
          <input
            type="date"
            class="login-input w-full px-1.5 h-10 text-lg border-none outline-none bg-none"
            v-model="user.birth_of_date"
            :placeholder="userInfo.birth_of_date"
            onfocus="(this.type = 'date')"
            onblur="(this.type = 'text')"
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
            :placeholder="userInfo.phone_number"
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
            :placeholder="userInfo.driven_license"
          />
          <label class="label-input top-2/4 absolute text-lg"
            >Driving License:</label
          >
        </div>
      </div>
      <div class="button-group flex justify-between w-full px-7">
        <r-button
          label="Update"
          class="btn-success rounded-xl py-2 text-lg text-white font-bold my-7"
          @click="handleUpdateUserInfo(user)"
        />
        <r-button
          label="Close"
          class="rounded-xl py-2 btn-close text-lg text-white font-bold my-7"
        />
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
  @Prop({ type: Boolean }) isClose!: any;
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
  toogleIsActive() {
    this.isActive ? (this.isActive = false) : (this.isActive = true);
  }

  handleUpdateUserInfo(user: any) {
    try {
      this.$vxm.user.setUser(this.userInfo);
      this.$vxm.user.updateUser(user);
    } catch (error) {
      throw error;
    }
  }

  handleClose() {
    this.isActive ? (this.isActive = false) : (this.isActive = true);
  }

  get user() {
    return this.$vxm.user.userInfo;
  }

  set user(value: any) {
    this.$vxm.user.setUserInfo(value);
  }
}
</script>
