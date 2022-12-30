<template>
  <div
    class="dashboard w-full flex h-screen justify-center items-center bg-gray-500"
  >
    <div class="dashboard-table">
      <div class="button flex">
        <div class="">
          <button
            @click="toogleIsActive()"
            class="btn btn-update text-white m-6"
          >
            Add
          </button>
          <ModalUpdate v-if="isActive"></ModalUpdate>
        </div>
        <div class="">
          <button
            @click="toogleIsActiveDelete()"
            class="btn btn-close text-white m-6"
          >
            Delete
          </button>
          <ModalAlert v-if="isActive_delete"></ModalAlert>
        </div>
      </div>
      <div class="flex flex-col w-full">
        <UsersTable v-if="isManageUser"></UsersTable>
        <CarsTable v-if="isManageCar"></CarsTable>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({
  name: "DashboardTable",
})
export default class extends Vue {
  @Prop({ type: Boolean, default: false }) isManageUser!: Boolean;
  @Prop({ type: Boolean, default: false }) isManageCar!: Boolean;

  isActive = false;
  isActive_delete = false;
  toogleIsActive() {
    if (this.isActive == true) {
      this.isActive = false;
    } else {
      this.isActive = true;
    }
  }

  toogleIsActiveDelete() {
    if (this.isActive_delete == true) {
      this.isActive_delete = false;
    } else {
      this.isActive_delete = true;
    }
  }
}
</script>
