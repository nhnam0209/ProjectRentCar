<template>
  <div class="relative border-bottom my-7">
    <RInput typeInput="text" class="input-focus" />
    <label class="label-input top-2/4 absolute text-lg">{{nameLabel}}</label>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "nuxt-property-decorator";
@Component({
  name: "RInputForm",
})
export default class extends Vue {
  @Prop({ type: String }) nameLabel!: string;
}
</script>
