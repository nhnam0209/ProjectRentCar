<template>
    <Default>
      <template #content>
        <NavigationBarMyCar></NavigationBarMyCar>
        <CarsSchedule></CarsSchedule>
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
  