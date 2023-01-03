<template>
  <div class="background-modal block">
    <form
      action=""
      class="signup-form justify-center items-center bg-white rounded-xl shadow-xl"
      :class="{ 'modal-close': isActive }"
    >
      <div class="p-6">
        <header class="title-signup text-3xl font-bold mt-7 text-center">
          <span>Add More Car</span>
        </header>
        <div class="relative border-bottom my-7">
          <RInput typeInput="text" class="input-focus" />
          <RLabel nameLabel="Car Name:"></RLabel>
        </div>
        <div class="relative border-bottom my-7">
          <RInput typeInput="text" class="input-focus" />
          <RLabel nameLabel="Type Car:"></RLabel>
        </div>
        <div class="relative border-bottom my-7">
          <RInput typeInput="text" class="input-focus" />
          <RLabel nameLabel="Car Model:"></RLabel>
        </div>
        <div class="relative border-bottom my-7">
          <RInput typeInput="text" class="input-focus" />
          <RLabel nameLabel="Distance:"></RLabel>
        </div>
        <div class="relative border-bottom my-7">
          <RInput typeInput="text" class="input-focus" />
          <RLabel nameLabel="Price:"></RLabel>
        </div>
        <div class="relative border-bottom my-7">
          <RInput typeInput="text" class="input-focus" />
          <RLabel nameLabel="Owner:"></RLabel>
        </div>
      </div>
      <div class="button-group flex justify-between w-full px-7">
        <RButton class="btn-assent" nameBtn="Update"></RButton>
        <RButton class="btn-close" nameBtn="Close"></RButton>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
@Component({
  name: "AddCarForm",
})
export default class extends Vue {
  isActive: Boolean = false;
  cars: any = [];

  async handleDeleteCar(car: any) {
    this.$vxm.car.removeCar(car);
  }

  async handleUpdate(car: any) {
    this.$vxm.car.updateCar(car);
  }
}
</script>
