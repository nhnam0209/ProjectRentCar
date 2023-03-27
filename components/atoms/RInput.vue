<template>
  <input
    class="h-full text-lg outline-none bg-none"
    :placeholder="placeholderInput"
    :name="nameInput"
  />
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "nuxt-property-decorator";
@Component({
  name: "RInput",
})
export default class extends Vue {
  @Prop({ type: String }) placeholderInput!: string;
  @Prop({ type: String }) nameInput!: string;
}
</script>

<style>
input[type="date"]::-webkit-inner-spin-button,
/* input[type="date"]::-webkit-calendar-picker-indicator {
  display: none;
  -webkit-appearance: none;
} */

.input-focus:focus ~ .label-input,
.input-focus:valid ~ .label-input {
  top: -20px;
  color: #5cdb95;
}

.station-input-pickup:first-child {
  margin-right: 20px;
}

.station-input-pickup:last-child {
  margin-left: 20px;
}
</style>
