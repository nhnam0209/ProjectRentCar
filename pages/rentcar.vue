<template>
  <Default>
    <template #content>
      <product-list class="h-full" :is-mobile="isMobile"></product-list>
    </template>
  </Default>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  name: "RentCarPage",
  layout: "rentcar-layout",
})
export default class extends Vue {
  get isMobile() {
    return this.$screen.width < 1024;
  }
}
</script>
