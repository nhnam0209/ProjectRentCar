<template>
  <div class="background-modal" :class="{'background-modal-close': isActive}">
    <form action="" class="signup-form justify-center items-center bg-white rounded-xl shadow-xl">
      <div class="p-6">
        <header class="title-signup text-3xl font-bold mt-7">
          <span>Add More Users</span>
        </header>
        <div class="relative border-bottom my-7">
          <Input
            typeInput="text"
            class="input-focus"
          />
          <label class="label-input top-2/4 absolute text-lg">First name:</label>
        </div>
        <div class="relative border-bottom my-7">
          <Input
            typeInput="text"
            class="input-focus"
          />
          <label class="label-input top-2/4 absolute text-lg">Last name:</label>
        </div>
        <div class="relative border-bottom my-7">
          <Input
            typeInput="email"
            class="input-focus"
          />
          <label class="label-input top-2/4 absolute text-lg">Email:</label>
        </div>
        <div class="relative border-bottom my-7">
          <Input
            typeInput="text"
            class="input-focus"
          />
          <label class="label-input top-2/4 absolute text-lg">Username:</label>
        </div>
        <div class="relative border-bottom my-7">
          <Input
            typeInput="password"
            class="input-focus"
          />
          <label class="label-input top-2/4 absolute text-lg">Password:</label>
        </div>
      </div>
      <div class="button-group flex justify-between w-full px-7">
          <Button class="btn-assent" nameBtn="Update"></Button>
          <Button class="btn-close" nameBtn="Close" @btn-click="toogleIsActive()"></Button>
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
  toogleIsActive(){
        if(this.isActive == true) {
            this.isActive = false
        }
        else {
            this.isActive = true
        }
    };
}
</script>

<style>
.background-modal{
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  align-items: center;
  justify-content: center;
  display: flex;
  z-index: 2;
}

.background-modal-close{
  display: none !important;
}
</style>
