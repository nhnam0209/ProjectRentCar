<template>
    <Default>
      <template #content>
        <NavigationBarMyCar></NavigationBarMyCar>
        <ListCars class="bg-gray-200"></ListCars>
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
  