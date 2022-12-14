<template>
  <Default>
    <template #content>
      <div class="">
        <div>
          <h1 class="uppercase text-center">Welcome to Dashboard</h1>
        </div>
        <div>
          <search-form class="mx-auto "/>
        </div>
      </div>
    </template>
  </Default>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  name: "Dashboard",
  layout: "rentcar-layout",
})
export default class extends Vue {}
</script>
