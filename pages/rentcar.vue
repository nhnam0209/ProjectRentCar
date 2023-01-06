<template>
  <Default>
    <template #content>
      <product-list></product-list>
    </template>
  </Default>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  name: "RentCarPage",
  layout: "rentcar-layout",
})
export default class extends Vue {}
</script>
