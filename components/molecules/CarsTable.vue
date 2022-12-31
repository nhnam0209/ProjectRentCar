<template>
  <div class="table users-table w-full bg-white px-4 my-6">
    <div class="table-header m-4 text-xl font-bold">
      <span>User Detail</span>
    </div>
    <div class="w-full text-center">
      <tr class="table-header">
        <th class="topic">ID</th>
        <th class="topic">Car Name</th>
        <th class="topic">Type Car</th>
        <th class="topic">Car Model</th>
        <th class="topic">Distance</th>
        <th class="topic">Price</th>
        <th class="topic">Owner</th>
        <th class="topic">User ID</th>
      </tr>
      <tr class="detail"  v-for="car in cars" :key="car.id">
        <td class="info">{{ car.id }}</td>
        <td class="info">{{ car.name }}</td>
        <td class="info">{{ car.type_car }}</td>
        <td class="info">{{ car.model }}</td>
        <td class="info">{{ car.distance }}</td>
        <td class="info">{{ car.price }}</td>
        <td class="info">{{ car.owner }}</td>
        <td class="info">{{ car.user_id }}</td>
      </tr>
    </div>
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

  async handleDeleteCar(car: any) {
    this.$vxm.car.removeCar(car);
  }

  async handleUpdate(car: any) {
    this.$vxm.car.updateCar(car);
  }
}
</script>
