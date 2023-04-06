<template>
  <div :class="[containerClass, 'mx-4 py-4']">
    <div
      :class="[
        wrapperClass,
        'grid grid-cols-1 lg:grid-cols-2  space-y-14 lg:space-y-0 lg:space-x-10 items-center relative text-center lg:text-left',
      ]"
    >
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
