<template>
  <div class="bg-product">
      <RentalLocation></RentalLocation>
      <div class="flex">
        <RentCarSideBar></RentCarSideBar>
        <ProductListCard></ProductListCard>
      </div>
    </div>
</template>
  

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
@Component({
  name: "Product",
})
export default class extends Vue {
  
}
</script>

<style>
.bg-product{
  background: #E8EAEF;
}
</style>