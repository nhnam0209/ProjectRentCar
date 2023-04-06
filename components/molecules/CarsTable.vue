<template>
  <div class="shadow-xl rounded-xl z-10 pb-4 w-full bg-white px-4 my-6">
    <div class="m-4 text-xl font-bold">
      <span>Cars Detail</span>
    </div>
    <table class="w-full text-center">
      <tr class="table-header">
        <th class="bg-[#379683] text-white py-2 px-3">ID</th>
        <th class="bg-[#379683] text-white py-2 px-3">Car Name</th>
        <th class="bg-[#379683] text-white py-2 px-3">Type Car</th>
        <th class="bg-[#379683] text-white py-2 px-3">Car Model</th>
        <th class="bg-[#379683] text-white py-2 px-3">Distance</th>
        <th class="bg-[#379683] text-white py-2 px-3">Price</th>
        <th class="bg-[#379683] text-white py-2 px-3">Owner</th>
        <th class="bg-[#379683] text-white py-2 px-3">User ID</th>
        <th class="bg-[#379683] text-white py-2 px-3">Action</th>
      </tr>
      <tr v-if="cars.length > 0" class="" v-for="car in cars" :key="car.id">
        <td class="p-2">{{ car.id }}</td>
        <td class="p-2">{{ car.name }}</td>
        <td class="p-2">{{ car.type_car }}</td>
        <td class="p-2">{{ car.model }}</td>
        <td class="p-2">{{ car.distance }}</td>
        <td class="p-2">{{ car.price }}</td>
        <td class="p-2">{{ car.owner }}</td>
        <td class="p-2">{{ car.user_id }}</td>
        <td class="p-2">
          <div class="icon-group flex">
            <div @click="handleUpdate(car)">
              <iconAdd
                class="h-6 w-6 px-1 mx-1 cursor-pointer"
                @icon-add-click="toogleIsActive()"
              ></iconAdd>
            </div>
            <ModalUpdateCar
              v-if="isActive"
              :car-info="carInfo"
            ></ModalUpdateCar>
            <div @click="handleDeleteCar(car)">
              <iconDelete
                class="h-6 w-6 px-1 mx-1 cursor-pointer"
                @icon-delete-click="toogleIsActiveDelete()"
              >
              </iconDelete>
            </div>
          </div>
        </td>
      </tr>
      <tr v-else>
        <span>There is no car avaiable!!</span>
      </tr>
    </table>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import axios from "axios";

@Component({
  name: "CarsTable",
})
export default class extends Vue {
  cars: any = [];
  carInfo: any = {};
  isActive = false;
  isActive_delete = false;

  async created() {
    try {
      if (document.cookie) {
        const carRes = await axios.get(
          "http://localhost:5000/api/cars/findallAdmin",
          {
            headers: {
              Authorization: `${document.cookie}`,
            },
          }
        );
        this.cars = carRes.data.cars;
      } else {
        this.$router.push("/login");
        setTimeout("location.reload(true)", 100);
      }
    } catch (error) {
      this.$router.push("/dashboardadmin");
      setTimeout("location.reload(true)", 100);
    }
  }

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

  async handleDeleteCar(car: any) {
    this.$vxm.car.removeCar(car);
  }

  async handleUpdate(car: any) {
    this.carInfo = car;
  }
}
</script>
