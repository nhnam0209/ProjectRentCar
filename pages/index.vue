<template>
  <Default>
    <template #content>
      <div class="">
        <div>
          <h1 class="uppercase text-center">Welcome to Rental Car</h1>
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
  name: "HomePage",
  layout: "rentcar-layout",
})
export default class extends Vue {}
</script>
