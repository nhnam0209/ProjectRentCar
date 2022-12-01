<template>
  <Default>
    <template #content>
      <Tutorial />
    </template>
  </Default>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  name: "LoginPage",
  layout: "rentcar-layout",
})
export default class extends Vue {}
</script>
