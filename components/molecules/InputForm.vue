<template>
    <div class="background-modal block">
      <form action="" class="signup-form justify-center items-center bg-white rounded-xl shadow-xl" :class="{'modal-close': isActive}">
        <div class="p-6">
          <header class="title-signup text-3xl font-bold mt-7">
            <span>Add More Users</span>
          </header>
          <div class="relative border-bottom my-7">
            <RInput
              typeInput="text"
              class="input-focus"
            />
            <RLabel class="label-input top-2/4 absolute text-lg">First name:</RLabel>
          </div>
          <div class="relative border-bottom my-7">
            <RInput
              typeInput="text"
              class="input-focus"
            />
            <RLabel class="label-input top-2/4 absolute text-lg">Last name:</RLabel>
          </div>
          <div class="relative border-bottom my-7">
            <RInput
              typeInput="email"
              class="input-focus"
            />
            <RLabel class="label-input top-2/4 absolute text-lg">Email:</RLabel>
          </div>
          <div class="relative border-bottom my-7">
            <RInput
              typeInput="text"
              class="input-focus"
            />
            <RLabel class="label-input top-2/4 absolute text-lg">Username:</RLabel>
          </div>
          <div class="relative border-bottom my-7">
            <RInput
              typeInput="password"
              class="input-focus"
            />
            <RLabel class="label-input top-2/4 absolute text-lg">Password:</RLabel>
          </div>
        </div>
        <div class="button-group flex justify-between w-full px-7">
            <RButton class="btn-assent" nameBtn="Update"></RButton>
            <RButton class="btn-close" nameBtn="Close"></RButton>
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
}
</script>