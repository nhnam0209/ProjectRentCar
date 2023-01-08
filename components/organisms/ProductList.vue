<template>
  <div class="bg-gray-200">
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