<template>
  <div class="fixed right-0 top-0 bottom-0 left-0 z-[99] bg-black/70 flex justify-center items-center">
    <form
      action=""
      class="signup-form justify-center items-center bg-white rounded-xl shadow"
      :class="{ 'modal-close': isActive }"
    >
      <div class="p-6">
        <header class="title-signup text-3xl font-bold mt-7">
          <span>Add More Users</span>
        </header>
        <div class="relative border-bottom my-7">
          <input type="text" class="input-focus" v-model="user.first_name" />
          <label class="label-input top-2/4 absolute text-lg"
            >First name:</label
          >
        </div>
        <div class="relative border-bottom my-7">
          <input type="text" class="input-focus" v-model="user.last_name" />
          <label class="label-input top-2/4 absolute text-lg">Last name:</label>
        </div>
        <div class="relative border-bottom my-7">
          <input type="email" class="input-focus" v-model="user.email" />
          <label class="label-input top-2/4 absolute text-lg">Email:</label>
        </div>
        <div class="relative border-bottom my-7">
          <input type="text" class="input-focus" v-model="user.phone" />
          <label class="label-input top-2/4 absolute text-lg">Phone:</label>
        </div>
        <div class="relative border-bottom my-7">
          <input type="text" class="input-focus" v-model="user.id_card" />
          <label class="label-input top-2/4 absolute text-lg">ID Card:</label>
        </div>
        <div class="relative border-bottom my-7">
          <input type="date" class="input-focus" v-model="user.birth_of_date" />
          <label class="label-input top-2/4 absolute text-lg"
            >Birth Of Date:</label
          >
        </div>
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
            class="input-focus"
            v-model="user.driven_license"
          />
          <label class="label-input top-2/4 absolute text-lg"
            >Driving License:</label
          >
        </div>
        <div class="relative border-bottom my-7">
          <input type="text" class="input-focus" v-model="user.username" />
          <label class="label-input top-2/4 absolute text-lg">Username:</label>
        </div>
        <div class="relative border-bottom my-7">
          <input type="password" class="input-focus" v-model="user.password" />
          <label class="label-input top-2/4 absolute text-lg">Password:</label>
        </div>
      </div>
      <div class="button-group flex justify-between w-full px-7">
        <RButton
          class="btn-success"
          label="Add"
          @click="handleAddUserAdmin()"
        ></RButton>
        <RButton class="btn-close" label="Close"></RButton>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
@Component({
  name: "ModalUpdate",
})
export default class extends Vue {
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

  handleAddUserAdmin() {
    this.$vxm.user.handleAddUser();
  }

  get user() {
    return this.$vxm.user.userInfo;
  }

  set user(value: any) {
    this.$vxm.user.setUserInfo(value);
  }
}
</script>
