<template>
    <div class="dashboard w-full flex h-screen justify-center items-center bg-gray-500">
        <div class="dashboard-table">
            <div class="flex justify-between">
                <UsersTable></UsersTable>
                <CarsTable></CarsTable>
            </div>
            <div class="button-group flex justify-between">
                <div class="">
                    <RButton @btn-click="toogleIsActive()" class="btn-assent" nameBtn="Update">
                    </RButton>
                    <ModalUpdate v-if="isActive" ></ModalUpdate>
                </div>
                <div class="">
                    <RButton @btn-click="toogleIsActiveDelete()" class="btn-close" nameBtn="Delete">
                    </RButton>
                    <ModalAlert v-if="isActive_delete" ></ModalAlert>
                </div>
            </div>
        </div>
    </div>
 
</template>

<script>
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  name: "DashboardTable",
})
export default class extends Vue {
    isActive = false;
    isActive_delete = false;
    toogleIsActive(){
        if(this.isActive == true) {
            this.isActive = false
        }
        else {
            this.isActive = true
        }
    };

    toogleIsActiveDelete(){
        if(this.isActive_delete == true) {
            this.isActive_delete = false
        }
        else {
            this.isActive_delete = true
        }
    }
}
</script>

