<template>
  <Default>
    <template #content>
      <PaymentPage class="mt-16 max-lg:mt-0"></PaymentPage>
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
