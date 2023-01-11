<template>
  <div class="background-modal block">
    <form action="" class="signup-form justify-center items-center bg-white rounded-xl shadow" :class="{'modal-close': isActive}">
      <div class="p-6">
        <header class="title-signup text-3xl font-bold mt-7">
          <span>Add More Users</span>
        </header>
        <div class="relative border-bottom my-7">
          <RInput
            typeInput="text"
            class="input-focus"
          />
          <label class="label-input top-2/4 absolute text-lg">First name:</label>
        </div>
        <div class="relative border-bottom my-7">
          <RInput
            typeInput="text"
            class="input-focus"
          />
          <label class="label-input top-2/4 absolute text-lg">Last name:</label>
        </div>
        <div class="relative border-bottom my-7">
          <RInput
            typeInput="email"
            class="input-focus"
          />
          <label class="label-input top-2/4 absolute text-lg">Email:</label>
        </div>
        <div class="relative border-bottom my-7">
          <RInput
            typeInput="text"
            class="input-focus"
          />
          <label class="label-input top-2/4 absolute text-lg">Username:</label>
        </div>
        <div class="relative border-bottom my-7">
          <RInput
            typeInput="password"
            class="input-focus"
          />
          <label class="label-input top-2/4 absolute text-lg">Password:</label>
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

<style>
.background-modal{
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  align-items: center;
  justify-content: center;
  display: flex;
  z-index: 2;
}

</style>
