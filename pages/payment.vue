<template>
  <Default>
    <template #content>
      <PaymentPage></PaymentPage>
    </template>
  </Default>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import Default from "~/layout/default.vue";

@Component({
  name: "Payment",
  layout: "rentcar-layout",
})
export default class extends Vue {}
</script>
