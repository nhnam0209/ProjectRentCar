<template>
    <div class="background-modal block">
      <form action="" class="signup-form justify-center items-center bg-white rounded-xl shadow-xl" :class="{'modal-close': isActive}">
        <div class="p-6">
          <header class="title-signup text-3xl font-bold mt-7">
            <span>Add More User</span>
          </header>
          <RInputForm nameLabel="First Name:"></RInputForm>
          <RInputForm nameLabel="Last Name:"></RInputForm>
          <RInputForm nameLabel="Email:"></RInputForm>
          <RInputForm nameLabel="Username:"></RInputForm>
          <RInputForm nameLabel="Password:"></RInputForm>
       
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
    name: "AddUserForm",
  })
  export default class extends Vue {
    isActive: Boolean = false;
    
  }
  </script>
  