<template>
  <Default>
    <template #content>
      <NavigationBarMyCar></NavigationBarMyCar>
      <CarsSchedule :cars-schedule="carsSchedule" :cars="cars"></CarsSchedule>
    </template>
  </Default>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import axios from "~/utils/myAxios";

@Component({
  name: "MyCarPage",
  layout: "rentcar-layout",
})
export default class extends Vue {
  carsSchedule: any = [];
  isLogin: Boolean = false;
  userInfo: any = {};
  cars: any =[];

  async created() {
    try {
      if (document.cookie) {
        const res = await axios.get(
          "http://localhost:5000/api/auth/verifylogin",
          {
            headers: {
              Authorization: `${document.cookie}`,
            },
          }
        );
        this.isLogin = true;
        this.userInfo = res.data[0];

        const carsScheduleRes = await axios.post(
          "http://localhost:5000/api/cars//findTransactionsbyId",
          {
            user_id: this.userInfo.id,
          },
          {
            headers: {
              Authorization: `${document.cookie}`,
            },
          }
        );
        this.carsSchedule = carsScheduleRes.data.carTransaction;

        const carsRes = await axios.post(
          "http://localhost:5000/api/cars//findbyId",
          {
            user_id: this.userInfo.id,
          },
          {
            headers: {
              Authorization: `${document.cookie}`,
            },
          }
        );
        this.cars = carsRes.data.cars;
      } else {
        this.$router.push("/login");
        setTimeout("location.reload(true)", 100);
      }
    } catch (error) {
      this.isLogin = false;
      this.$router.push("/login");
      setTimeout("location.reload(true)", 100);
    }
  }

  get car(){
    return this.$vxm.car.carInfo
  }

  set car(value: any){
    this.$vxm.car.setCar(value)
  }
}
</script>
