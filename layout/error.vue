<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">
      {{ error.statusCode }} - Page not found
    </h1>
    <h1 v-else>{{ error.statusCode }} - An error occurred</h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import VueScreen from "vue-screen";
Vue.use(VueScreen);

@Component({
  name: "error-layout",
  layout: "error-layout",
})
export default class extends Vue {
  @Prop({}) error!: any;
  get isMobile() {
    return this.$screen.width < 1024;
  }
}
</script>
