<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" @click="iconDeleteClick()">
    <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
    <path
      d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"
    />
  </svg>
</template>

<script lang="ts">
import { Component,Emit, Vue } from "nuxt-property-decorator";
@Component({
  name: "IconDelete",
})
export default class extends Vue {
  @Emit()   
  iconDeleteClick(){
    return this.iconDeleteClick
  }
}
</script>
