<template>
  <div class="table cars-table bg-white">
    <div class="table-header m-4">
      <span>Cars Detail</span>
    </div>
    <div
      class="table-detail flex w-full items-center justify-center text-center"
    >
      <div class="col text-center">
        <div class="topic">
          <span class="">ID</span>
        </div>
        <div class="detail">
          <div v-for="car in cars" :key="car.id" class="info">
            {{ car.id }}
          </div>
        </div>
      </div>
      <div class="col">
        <div class="topic">
          <span class="">Name</span>
        </div>
        <div class="detail">
          <div v-for="car in cars" :key="car.id" class="info">
            {{ car.name }}
          </div>
        </div>
      </div>
      <div class="col">
        <div class="topic">
          <span class="">Type Car</span>
        </div>
        <div class="detail">
          <div v-for="car in cars" :key="car.id" class="info">
            {{ car.type_car }}
          </div>
        </div>
      </div>
      <div class="col">
        <div class="topic">
          <span class="">Car Model</span>
        </div>
        <div class="detail">
          <div v-for="car in cars" :key="car.id" class="info">
            {{ car.model }}
          </div>
        </div>
      </div>
      <div class="col">
        <div class="topic">
          <span class="">Distance</span>
        </div>
        <div class="detail">
          <div v-for="car in cars" :key="car.id" class="info">
            {{ car.distance }}
          </div>
        </div>
      </div>
      <div class="col">
        <div class="topic">
          <span class="">Price</span>
        </div>
        <div class="detail">
          <div v-for="car in cars" :key="car.id" class="info">
            {{ car.price }}
          </div>
        </div>
      </div>
      <div class="col">
        <div class="topic">
          <span class="">Owner</span>
        </div>
        <div class="detail">
          <div v-for="car in cars" :key="car.id" class="info">
            {{ car.owner }}
          </div>
        </div>
      </div>
      <div class="col">
        <div class="topic">
          <span class="">User ID</span>
        </div>
        <div class="detail">
          <div v-for="car in cars" :key="car.id" class="info">
            {{ car.user_id }}
          </div>
        </div>
      </div>
      <div class="col">
        <div class="topic">
          <span class="">Action</span>
        </div>
        <div class="detail">
          <div v-for="car in cars" :key="car.id" class="info">
            <div class="button flex">
              <div class="">
                <button
                  @click="handleUpdate(car)"
                  class="btn btn-update text-white m-6"
                >
                  Update
                </button>
                <ModalUpdate v-if="isActive"></ModalUpdate>
              </div>
              <div class="">
                <button
                  @click="handleDeleteCar(car)"
                  class="btn btn-close text-white m-6"
                >
                  Delete
                </button>
                <ModalAlert v-if="isActive_delete"></ModalAlert>
              </div>
            </div>
          </div>
        </div>
      </div>
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
