<template>
  <Default>
    <template #content>
      <div class="">
        <div>
          <h1 class="uppercase text-center">Let's become a Rental Car Member</h1>
        </div>
        <register-form />
      </div>
    </template>
  </Default>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  name: "RegisterPage",
  layout: "rentcar-layout",
})
export default class extends Vue {}
</script>
