<template>
  <Default>
    <template #content>
      <!-- About Rental Car information -->
      <banner>
        <template #leftContainer>fdsafbashf</template>
        <template #rightContainer>asdad</template>
      </banner>
      <!-- About Contract information & Add some random phone number/email/address -->
      <banner>
        <template #leftContainer>fdsafbashf</template>
        <template #rightContainer>asdad</template>
      </banner>
    </template>
  </Default>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  name: "AboutUsPage",
  layout: "rentcar-layout",
  head() {
    return {
      title: "About Us",
    };
  },
})
export default class extends Vue {}
</script>
