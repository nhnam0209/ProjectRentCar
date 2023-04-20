<template>
  <div class="background-modal block z-10">
    <form
      action=""
      class="signup-form justify-center items-center bg-white rounded-xl shadow"
      :class="{ 'modal-close': isActive }"
    >
      <div class="p-6">
        <header class="title-signup text-3xl font-bold mt-7">
          <span>Update User Information</span>
        </header>
        <div class="relative border-bottom my-7">
          <input
            type="text"
            class="input-focus"
            v-model="user.first_name"
            :placeholder="userInfo.first_name"
          />
          <label class="label-input top-2/4 absolute text-lg"
            >First name:</label
          >
        </div>
        <div class="relative border-bottom my-7">
          <input
            type="text"
            class="input-focus"
            v-model="user.last_name"
            :placeholder="userInfo.last_name"
          />
          <label class="label-input top-2/4 absolute text-lg">Last name:</label>
        </div>
        <div class="relative border-bottom my-7">
          <input
            type="email"
            class="input-focus"
            v-model="user.email"
            :placeholder="userInfo.email"
          />
          <label class="label-input top-2/4 absolute text-lg">Email:</label>
        </div>
        <div class="relative border-bottom my-7">
          <input
            type="text"
            class="input-focus"
            v-model="user.username"
            :placeholder="userInfo.username"
          />
          <label class="label-input top-2/4 absolute text-lg">Username:</label>
        </div>
        <div class="relative border-bottom my-7">
          <input
            type="text"
            class="input-focus"
            v-model="user.phone"
            :placeholder="userInfo.phone_number"
          />
          <label class="label-input top-2/4 absolute text-lg">Phone:</label>
        </div>
        <div class="relative border-bottom my-7">
          <input
            type="text"
            class="input-focus"
            v-model="user.id_card"
            :placeholder="userInfo.id_card"
          />
          <label class="label-input top-2/4 absolute text-lg">ID Card:</label>
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
            class="input-focus"
            v-model="user.driven_license"
            :placeholder="userInfo.driven_license"
          />
          <label class="label-input top-2/4 absolute text-lg"
            >Driving License:</label
          >
        </div>
      </div>
      <div class="button-group flex justify-between w-full px-7">
        <RButton
          class="btn-success"
          label="Update"
          @click="handleUpdateUserInfo(user)"
        ></RButton>
        <RButton class="btn-close" label="Close"></RButton>
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
  @Prop({}) userInfo!: any;
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
      this.$vxm.user.updateUserAdmin(user);
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

<style>
.background-modal {
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  align-items: center;
  justify-content: center;
  display: flex;
  z-index: 10;
}
</style>
