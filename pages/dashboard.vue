<template>
  <dashboard-table>
  </dashboard-table>
</template>

<script lang="ts">
import { anyTypeAnnotation } from "@babel/types";
import { Component, Vue } from "nuxt-property-decorator";
import DashboardTable from "~/components/organisms/DashboardTable.vue";
@Component({
  components: { DashboardTable },
  name: "Dashboard",
  layout: "rentcar-layout",
})
export default class extends Vue {
}
</script>
