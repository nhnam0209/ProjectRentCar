<template>
  <div class="">
    <div class="py-10" :class="{ 'modal-close': isActive || isActiveReturn }">
      <div class="w-full flex items-center justify-center my-10">
        <div
          class="w-1/2 flex items-center justify-between shadow border border-solid rounded-xl overflow-hidden border-black text-center max-sm:w-full max-md:w-2/3"
        >
          <div
            class="p-2 border-r border-solid border-black text-xl font-bold w-1/2 text-white bg-[#379683]"
          >
            Infomation
          </div>
          <div
            class="p-2 border-solid border-black text-xl font-bold w-1/2 text-white bg-[#379683]"
          >
            Rental
          </div>
        </div>
      </div>
      <div class="w-full flex items-center justify-center">
        <div
          class="bg-white w-1/2 p-4 rounded-lg shadow max-md:w-full max-lg:w-2/3"
        >
          <div class="m-4">
            <h6 class="text-xl font-bold">Default rental unit price</h6>
            <p class="text-base text-gray-400 mb-3">
              Rates apply for all days.
            </p>
            <input
              class="border border-solid border-black mr-2 rounded-xl p-1 h-full text-lg outline-none bg-none w-2/5"
              v-model="cars.price"
            />USD
          </div>
          <div class="m-4">
            <h6 class="text-xl font-bold mb-3">Distance</h6>
            <input
              class="border border-solid border-black mr-2 rounded-xl p-1 h-full text-lg outline-none bg-none w-2/5"
              v-model="cars.distance"
            />
          </div>
          <div class="m-4">
            <h6 class="text-xl font-bold mb-3">Province</h6>
            <input
              class="border border-solid border-black mr-2 rounded-xl p-1 h-full text-lg outline-none bg-none w-2/5"
              v-model="cars.province"
            />
          </div>
          <div class="m-4">
            <h6 class="text-xl font-bold mb-3">Available Date</h6>
            <input
              class="border border-solid border-black mr-2 rounded-xl p-1 h-full text-lg outline-none bg-none w-2/5"
              v-model="cars.available_date"
              type="date"
            />
          </div>
          <div class="m-4">
            <h6 class="text-xl font-bold">Photos</h6>
            <p class="text-base text-gray-400 mb-3">
              Post multiple pictures at different angles to increase your
              vehicle's information.
            </p>
            <input
              type="file"
              class="p-3 my-3"
              @change="onFileChange"
              accept=".jpg, .jpeg, .png"
            />
          </div>

          <div class="m-4 flex justify-between items-center">
            <RButton
              class="bg-gray-400 w-full mr-4"
              label="Return"
              @btn-click="toogleIsActiveReturn()"
            ></RButton>
            <RButton
              class="btn-success w-full"
              label="Complete"
              @btn-click="handleAddCarUser()"
            ></RButton>
          </div>
        </div>
      </div>
    </div>
    <AddNewCar v-if="isActiveReturn"></AddNewCar>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import axios from "axios";
import { API, EMPTY } from "~/utils/constant";
import {ImageMixins} from "~/utils/imageService"

@Component({
  name: "RentalCarForm",
  mixins:[ImageMixins]
})
export default class extends Vue {
  @Prop({}) cars: any;
  @Prop({}) userInfo: any;
  isActive = false;
  isActiveReturn = false;
  image: any = EMPTY;


  async handleAddCarUser() {
    try {
      this.$toasted.show("Car is adding....")
      await axios.post(
        `${process.env.baseURL + API.cars.add_car}`,
        {
          plate_number: this.cars.plate_number,
          type_car: this.cars.type_car,
          name: this.cars.type_car + " " + this.cars.name,
          seat: this.cars.seat,
          fuel: this.cars.fuel,
          fuel_type: this.cars.fuel_type,
          fuel_consumption: this.cars.fuel_consumption,
          transmission: this.cars.transmission,
          distance: this.cars.distance,
          description: this.cars.description,
          price: this.cars.price,
          owner: this.userInfo.username,
          user_id: this.userInfo.id,
          province: this.cars.province,
          available_date: this.cars.available_date,
          img: this.image,
          status: this.cars.status,
          created_at: this.cars.created_at,
          updated_at: this.cars.updated_at,
          deleted_at: this.cars.deleted_at,
        },
        {
          headers: {
            Authorization: `${document.cookie}`,
          },
        }
      );
      this.$toasted.success("Car is added successfully")
      // alert(JSON.stringify(this.car));
    } catch (error: any) {
      const errMessage = JSON.stringify(error.response.data.msg);
      alert(errMessage);
    }
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

  toogleIsActiveReturn() {
    if (this.isActiveReturn == true) {
      this.isActiveReturn = false;
    } else {
      this.isActiveReturn = true;
    }
  }
}
</script>
