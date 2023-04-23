<template>
  <div class="background-modal block" :class="{'!hidden': isActive}">
    <form
      action=""
      class="signup-form justify-center items-center bg-white rounded-xl shadow-xl relative"
    >
      <span
        class="absolute top-1 right-1 cursor-pointer"
        @click="toogleIsActive()"
      >
        <icon-x class="w-6 h-6"></icon-x>
      </span>
      <div class="p-10">
        <header class="title-signup text-3xl font-bold mt-7">
          <span>Update Car Information</span>
        </header>
        <div class="grid grid-cols-2 gap-8 w-full">
          <div>
            <div class="relative border-bottom my-7">
              <input
                type="file"
                class="input-focus"
                @change="onFileChange"
                accept=".jpg, .jpeg, .png"
              />
              <label class="label-input top-2/4 absolute text-lg"
                >Car Image:</label
              >
            </div>
            <div class="relative border-bottom my-7">
              <input
                type="text"
                class="input-focus"
                v-model="car.name"
                :placeholder="carInfo.name"
              />
              <label class="label-input top-2/4 absolute text-lg">Name:</label>
            </div>
            <div class="relative border-bottom my-7">
              <input
                type="text"
                class="input-focus"
                v-model="car.seat"
                :placeholder="carInfo.seat"
              />
              <label class="label-input top-2/4 absolute text-lg">Seat:</label>
            </div>
            <div class="relative border-bottom my-7">
              <input
                type="text"
                class="input-focus"
                v-model="car.fuel"
                :placeholder="carInfo.fuel"
              />
              <label class="label-input top-2/4 absolute text-lg"
                >Fuel (Litre):</label
              >
            </div>
            <div class="relative border-bottom my-7">
              <input
                type="text"
                class="input-focus"
                v-model="car.fuel_type"
                :placeholder="carInfo.fuel_type"
              />
              <label class="label-input top-2/4 absolute text-lg"
                >Fuel Type:</label
              >
            </div>
            <div class="relative border-bottom my-7">
              <input
                type="text"
                class="input-focus"
                :placeholder="carInfo.fuel_consumption"
                v-model="car.fuel_consumption"
              />
              <label class="label-input top-2/4 absolute text-lg"
                >Fuel Consumption:</label
              >
            </div>
            <div class="relative border-bottom my-7">
              <input
                type="text"
                class="input-focus"
                :placeholder="carInfo.transmission"
                v-model="car.transmission"
              />
              <label class="label-input top-2/4 absolute text-lg"
                >Transmission:</label
              >
            </div>
            <div class="relative border-bottom my-7">
              <input
                type="text"
                class="input-focus"
                v-model="car.distance"
                :placeholder="carInfo.distance"
              />
              <label class="label-input top-2/4 absolute text-lg"
                >Distance:</label
              >
            </div>
            <div class="relative border-bottom my-7">
              <input
                type="text"
                class="input-focus"
                :placeholder="carInfo.description"
                v-model="car.description"
              />
              <label class="label-input top-2/4 absolute text-lg"
                >Description:</label
              >
            </div>
            <div class="relative border-bottom my-7">
              <input
                type="text"
                class="input-focus"
                v-model="car.feature"
                :placeholder="carInfo.feature"
              />
              <label class="label-input top-2/4 absolute text-lg"
                >Feature:</label
              >
            </div>
            <div class="relative border-bottom my-7">
              <input
                type="text"
                class="input-focus"
                v-model="car.price"
                :placeholder="carInfo.price"
              />
              <label class="label-input top-2/4 absolute text-lg"
                >Price per day:</label
              >
            </div>
            <div class="relative border-bottom my-7">
              <input
                type="text"
                class="input-focus"
                v-model="car.type_car"
                :placeholder="carInfo.type_car"
              />
              <label class="label-input top-2/4 absolute text-lg"
                >Type Car:</label
              >
            </div>
            <div class="relative border-bottom my-7">
              <input
                type="text"
                class="input-focus"
                v-model="car.model"
                :placeholder="carInfo.model"
              />
              <label class="label-input top-2/4 absolute text-lg">Model:</label>
            </div>
          </div>
          <div>
            <div class="relative border-bottom my-7">
              <input
                type="text"
                class="input-focus"
                v-model="car.province"
                :placeholder="carInfo.province"
              />
              <label class="label-input top-2/4 absolute text-lg"
                >Province:</label
              >
            </div>
            <div class="relative border-bottom my-7">
              <input
                type="text"
                class="input-focus"
                v-model="car.plate_number"
                :placeholder="carInfo.plate_number"
              />
              <label class="label-input top-2/4 absolute text-lg"
                >Plate Number:</label
              >
            </div>
            <div class="relative border-bottom my-7">
              <input
                type="date"
                class="input-focus"
                v-model="car.available_date"
              />
              <label class="label-input top-2/4 absolute text-lg"
                >Available Date:</label
              >
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 w-full">
          <div class="button-group flex justify-between w-full px-7">
            <RButton
              class="btn-success"
              label="Add"
              @click="handleUpdate(car)"
            ></RButton>
            <RButton class="btn-close" label="Close"></RButton>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { EMPTY } from "~/utils/constant";
@Component({
  name: "ModalUpdateCar",
})
export default class extends Vue {
  @Prop({}) carInfo!: any;
  isActive: Boolean = false;
  cars: any = [];
  image: any = EMPTY;

  toogleIsActive() {
    this.isActive ? (this.isActive = false) : (this.isActive = true);
  }

  async handleUpdate(car: any) {
    this.car.id = this.carInfo.id;
    this.car.user_id = this.carInfo.user_id;
    if (car.available_date == "0000-00-00") {
      this.car.available_date = this.carInfo.available_date;
    }
    this.$vxm.car.updateCarAdmin(car);
  }

  async convertBase64(file: any) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }

  async onFileChange(e: any) {
    var files = e.target.files[0] || e.dataTransfer.files[0];
    if (files.size >= 1024 && files.size < 1048576) {
      const base64 = await this.convertBase64(files);
      this.image = base64;
      this.$vxm.car.setImgCar(this.image);
    } else {
      alert("This file is too big");
      files = "";
    }
  }

  get car() {
    return this.$vxm.car.car;
  }

  set car(value: any) {
    this.$vxm.car.setCar(value);
  }
}
</script>
