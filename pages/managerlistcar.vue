<template>
    <Default>
      <template #content>
        <NavigationBarMyCar class="mt-16 max-lg:mt-0"></NavigationBarMyCar>
        <ListCars></ListCars>
      </template>
    </Default>
  </template>
  
  <script lang="ts">
  import { Component, Vue } from "nuxt-property-decorator";
  
  @Component({
    name: "MyCarPage",
    layout: "rentcar-layout",
  })
  export default class extends Vue {}
  </script>
  