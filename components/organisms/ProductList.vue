<template>
  <div class="bg-product">
    <RentalLocation></RentalLocation>
    <div class="flex h-full" v-if="searchResult.length > 0">
      <RentCarSideBar></RentCarSideBar>
      <ProductListCard :car-result="searchResult"></ProductListCard>
    </div>
    <div v-else class="h-[700px]">
      <div>Please enter the search box to have the car for rent</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
@Component({
  name: "Product",
})
export default class extends Vue {
  get searchResult() {
    return this.$vxm.car.result;
  }
}
</script>

<style>
.bg-product {
  background: #e8eaef;
}
</style>
