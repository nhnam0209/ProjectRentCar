<template>
  <div class="fixed right-0 top-0 bottom-0 left-0 z-[99] bg-black/70 flex justify-center items-center">
    <form
      action=""
      class="signup-form justify-center items-center bg-white rounded-xl shadow"
      :class="{ 'modal-close': isActive }"
    >
      <div class="p-10">
        <header class="title-signup text-3xl font-bold mt-7">
          <span>Add Car</span>
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
                placeholder="Toyota 2022"
              />
              <label class="label-input top-2/4 absolute text-lg">Name:</label>
            </div>
            <div class="relative border-bottom my-7">
              <input
                type="text"
                class="input-focus"
                v-model="car.seat"
                placeholder="4"
              />
              <label class="label-input top-2/4 absolute text-lg">Seat:</label>
            </div>
            <div class="relative border-bottom my-7">
              <input
                type="text"
                class="input-focus"
                v-model="car.fuel"
                placeholder="5"
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
                placeholder="Diesel"
              />
              <label class="label-input top-2/4 absolute text-lg"
                >Fuel Type:</label
              >
            </div>
            <div class="relative border-bottom my-7">
              <input
                type="text"
                class="input-focus"
                placeholder="4"
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
                placeholder="Automation"
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
                placeholder="500"
              />
              <label class="label-input top-2/4 absolute text-lg"
                >Distance:</label
              >
            </div>
            <div class="relative border-bottom my-7">
              <input
                type="text"
                class="input-focus"
                v-model="car.description"
              />
              <label class="label-input top-2/4 absolute text-lg"
                >Description:</label
              >
            </div>
            <div class="relative border-bottom my-7">
              <input type="text" class="input-focus" v-model="car.feature" />
              <label class="label-input top-2/4 absolute text-lg"
                >Feature:</label
              >
            </div>
            <div class="relative border-bottom my-7">
              <input type="text" class="input-focus" v-model="car.price" />
              <label class="label-input top-2/4 absolute text-lg"
                >Price per day:</label
              >
            </div>
            <div class="relative border-bottom my-7">
              <input type="text" class="input-focus" v-model="car.type_car" />
              <label class="label-input top-2/4 absolute text-lg"
                >Type Car:</label
              >
            </div>
            <div class="relative border-bottom my-7">
              <input type="text" class="input-focus" v-model="car.model" />
              <label class="label-input top-2/4 absolute text-lg">Model:</label>
            </div>
          </div>
          <div>
            <div class="relative border-bottom my-7">
              <input type="text" class="input-focus" v-model="car.province" />
              <label class="label-input top-2/4 absolute text-lg"
                >Province:</label
              >
            </div>
            <div class="relative border-bottom my-7">
              <input
                type="text"
                class="input-focus"
                v-model="car.plate_number"
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
              @click="handleAddCar()"
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
import {ImageMixins} from "~/utils/imageService"

@Component({
  name: "ModalUpdate",
  mixins:[ImageMixins]

})
export default class extends Vue {
  @Prop() userInfo!: any;
  isActive: Boolean = false;
  image: any = EMPTY;

  handleAddCar() {
    this.userInfo.fullname == " " || this.userInfo.fullname == undefined
      ? (this.carOwner = "admin")
      : (this.carOwner = this.userInfo.fullname);
    this.carUserId = this.userInfo.id;
    this.$vxm.car.addCarAdmin();
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
      const base64 = await ImageMixins.convertBase64(files);
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

  get carOwner() {
    return this.car.owner;
  }

  set carOwner(value: any) {
    this.$vxm.car.setCarOwner(value);
  }

  get carUserId() {
    return this.car.user_id;
  }

  set carUserId(value: any) {
    this.$vxm.car.setCarUserId(value);
  }
}
</script>
