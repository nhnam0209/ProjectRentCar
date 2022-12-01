<!-- <template>
  <div>
    <slot name="header">
      <navigation-bar-desktop />
    </slot>
    <div>
      <div class="">
        <h1 v-if="statusCode() === 404"></h1>
      </div>
    </div>
    <slot name="footer"> </slot>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";
import VueScreen from "vue-screen";
Vue.use(VueScreen);

@Component({
  name: "RentCarLayout",
})
export default class extends Vue {
  @Prop({ type: Object, default: null }) error!: Object;

  statusCode(){
    return(this.error && this.error.statusCode)
  }
}
</script> -->
