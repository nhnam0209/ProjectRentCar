<template>
  <transition name="fade">
    <div class="toast" v-if="isShow">
      {{ message }}
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
@Component({
  name: "RToast",
})
export default class extends Vue {
  @Prop({ type: String, default: "" }) message!: string;
  @Prop({ type: Boolean, default: false }) isShow!: boolean;

  showToast(message: string) {
    this.message = message;
    this.isShow = true;
    setTimeout(() => {
      this.isShow = false;
    }, 3000);
  }
}
</script>

<style>
.toast {
  position: fixed;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: #fff;
  padding: 1rem;
  border-radius: 0.5rem;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
