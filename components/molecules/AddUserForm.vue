<template>
  <div class="background-modal block">
    <form action="" class="signup-form justify-center items-center bg-white rounded-xl shadow-xl" :class="{'modal-close': isActive}">
      <div class="p-6">
        <header class="title-signup text-3xl font-bold mt-7 text-center">
          <span>Add More User</span>
        </header>
        <div class="relative border-bottom my-7">
          <RInput
            typeInput="text"
            class="input-focus"
          />
          <RLabel nameLabel="First Name:"></RLabel>
        </div>
        <div class="relative border-bottom my-7">
          <RInput
            typeInput="text"
            class="input-focus"
          />
          <RLabel nameLabel="Last Name:"></RLabel>
        </div>
        <div class="relative border-bottom my-7">
          <RInput
            typeInput="text"
            class="input-focus"
          />
          <RLabel nameLabel="Email:"></RLabel>
        </div>
        <div class="relative border-bottom my-7">
          <RInput
            typeInput="text"
            class="input-focus"
          />
          <RLabel nameLabel="Username:"></RLabel>
        </div>
        <div class="relative border-bottom my-7">
          <RInput
            typeInput="password"
            class="input-focus"
          />
          <RLabel nameLabel="Password:"></RLabel>
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
  name: "AddUserForm",
})
export default class extends Vue {
  isActive: Boolean = false;
  
}
</script>
