<template>
  <div class="w-full flex h-screen justify-center items-center bg-gray-200">
    <div class="dashboard-table">
      <div class="button flex">
        <div class="">
          <RButton
            nameBtn="Add"
            @btn-click="toogleIsActive()"
            class="btn-assent m-6"
          >
          </RButton>
          <modal-add-user-from-admin
            class="z-50"
            v-if="isActive && isManageUser"
          ></modal-add-user-from-admin>
          <modal-add-car-from-admin
            class="z-50"
            v-if="isActive && isManageCar"
          ></modal-add-car-from-admin>
        </div>
        <!-- <div class="">
          <RButton
          nameBtn="Delete"
            @btn-click="toogleIsActiveDelete()"
            class="btn-close m-6"
          >
          </RButton>
          <ModalAlert v-if="isActive_delete"></ModalAlert>
        </div> -->
      </div>
      <div class="flex flex-col w-full">
        <UsersTable
          v-if="isManageUser"
          :class="isActive ? 'z-0' : 'z-auto'"
        ></UsersTable>
        <CarsTable
          v-if="isManageCar"
          :class="isActive ? 'z-0' : 'z-auto'"
        ></CarsTable>
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
