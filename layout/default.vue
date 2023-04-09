<template>
  <div>
    <slot name="header">
      <navigation-bar-desktop v-if="!isMobile" />
      <side-bar-mobile v-else />
    </slot>
    <slot name="content">
      <Nuxt />
    </slot>
    <slot name="footer">
      <Footer />
    </slot>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import VueScreen from "vue-screen";
Vue.use(VueScreen);

@Component({
  name: "RentCarLayout",
})
export default class extends Vue {
  get isMobile() {
    return this.$screen.width < 1024;
  }
}
</script>
