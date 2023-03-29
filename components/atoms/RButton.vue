<template>
  <button
    @click="btnClick($event)"
    class="text-white text-lg font-bold my-7 rounded-xl p-3 text-center"
    :class="[isDisabled ? 'bg-[#ebebe4] text-[#ccc]' : '']"
    type="submit"
    :disabled="isDisabled"
  >
    {{ label }}
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "nuxt-property-decorator";
@Component({
  name: "RButton",
})
export default class extends Vue {
  @Prop({ type: String }) label!: string;
  @Prop({ type: Boolean, default: false }) isDisabled!: boolean;

  @Emit()
  btnClick(e: any) {
    return this.$emit("click", e);
  }
}
</script>

<style>
.button-group {
  width: 300px;
}
.btn-close {
  background-color: #fc4445;
  border-radius: 10px;
}
.btn-close:hover {
  background-color: rgb(238, 8, 54);
  transition: 0.5s;
}
.btn-success {
  background: #009548;
  border-radius: 10px;
}
.btn-success:hover {
  background: #5cdb95;
  transition: 0.5s;
}
.btn-size {
  width: 100%;
  height: 100%;
}
.button-search {
  width: 260px;
  height: 50px;
  background: #ffdc00;
  border-radius: 10px;
  overflow: hidden;
}

.button-search:hover {
  background: #eacb00;
}
</style>
