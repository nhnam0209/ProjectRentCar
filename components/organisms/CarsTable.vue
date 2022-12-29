<template>
  <div class="table cars-table bg-white ">
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
          <div v-for="car in cars" :key="car._id" class="info">
            {{ car._id }}
          </div>
        </div>
      </div>
      <div class="col">
        <div class="topic">
          <span class="">Name</span>
        </div>
        <div class="detail">
          <div v-for="car in cars" :key="car._id" class="info">
            {{ car.name }}
          </div>
        </div>
      </div>
      <div class="col">
        <div class="topic">
          <span class="">Auto Marker</span>
        </div>
        <div class="detail">
          <div v-for="car in cars" :key="car._id" class="info">
            {{ car.auto_maker }}
          </div>
        </div>
      </div>
      <div class="col">
        <div class="topic">
          <span class="">Type Car</span>
        </div>
        <div class="detail">
          <div v-for="car in cars" :key="car._id" class="info">
            {{ car.type_car }}
          </div>
        </div>
      </div>
      <div class="col">
        <div class="topic">
          <span class="">Distance</span>
        </div>
        <div class="detail">
          <div v-for="car in cars" :key="car._id" class="info">
            {{ car.distance }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  name: "CarsTable",
})
export default class extends Vue {
    data() {
      return {
        cars: [],
      }
    };
    async fetch() {
      this.cars = await fetch(
        'http://localhost:4000/Carsinfo'
      ).then(res => res.json())
    }
}
</script>