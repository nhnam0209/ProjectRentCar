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
    </div>
  </div>
</template>

<script>
import { Component, Vue } from "nuxt-property-decorator";
import axios from "axios";

@Component({
  name: "CarsTable",
})
export default class extends Vue {
  data() {
    return {
      cars: [],
    };
  }
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
      this.$router.push("/");
      setTimeout("location.reload(true)", 100);
    }
  }
}
</script>
