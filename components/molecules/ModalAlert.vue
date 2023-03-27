<template>
  <div class="background-modal block">
    <form
      class="alert_box p-8 flex justify-center items-center flex-col bg-white rounded-xl shadow-xl"
      :class="{ 'modal-close': isActive }"
    >
      <div
        class="icon h-24 w-24 border-4 border-solid border-red-500 flex items-center justify-center"
      >
        <IconExlamation
          class="icon-alter h-12 w-12 text-center"
        ></IconExlamation>
      </div>
      <header class="font-bold text-xl py-4">Confirm</header>
      <p class="text-lg">Are you sure to delete this User(Car)?</p>
      <div class="btns flex justify-between items-center p-4 w-full">
        <RButton
          class="btn-success"
          label="Yes, Delete!"
          @click="handleDelete($event)"
        ></RButton>
        <RButton
          class="btn-close"
          @click="toogleIsActive()"
          label="Cancel"
        ></RButton>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue } from "nuxt-property-decorator";
@Component({
  name: "ModalAlert",
})
export default class extends Vue {
  isActive: Boolean = false;
  toogleIsActive() {
    if (this.isActive == true) {
      this.isActive = false;
    } else {
      this.isActive = true;
    }
  }
  @Emit()
  handleDelete(e: any) {
    return this.$emit("click", e);
  }
}
</script>

<style>
.modal-close {
  display: none !important;
}

.alert_box {
  width: 400px;
}

.alert_box .icon {
  border-radius: 50%;
  line-height: 97px;
}

.icon .icon-alter {
  fill: red;
}
</style>
