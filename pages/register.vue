<template>
  <Default>
    <template #content>
      <RegisterForm />
    </template>
  </Default>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  name: "RegisterPage",
  layout: "rentcar-layout",
  head() {
    return {
      title: "Register",
    };
  },
})
export default class extends Vue {}
</script>
