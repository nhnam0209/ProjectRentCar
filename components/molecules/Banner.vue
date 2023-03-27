<template>
  <div :class="[containerClass, 'h-full mx-4 py-4']">
    <div :class="[wrapperClass, 'grid grid-cols-1 lg:grid-cols-2']">
      <div>
        <slot name="leftContainer"></slot>
      </div>
      <div>
        <slot name="rightContainer"></slot>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  name: "Banner",
})
export default class extends Vue {
  @Prop({ type: String }) containerClass!: string;
  @Prop({ type: String }) wrapperClass!: string;
}
</script>
