import { API, EMPTY } from "./../utils/constant";
import axios from "axios";
import { action, createModule, mutation } from "vuex-class-component";
import Toasted from "vue-toasted";
import Vue from "vue";
Vue.use(Toasted, {
  iconPack: "material",
});

const VuexModule = createModule({
  namespaced: "carInfo",
  strict: false,
  target: "nuxt",
  enableLocalWatchers: true,
});
export class CarStore extends VuexModule {
  car: any = {
    id: EMPTY,
    img: EMPTY,
    name: EMPTY,
    seat: EMPTY,
    fuel: EMPTY,
    fuel_type: EMPTY,
    fuel_consumption: EMPTY,
    transmission: EMPTY,
    distance: EMPTY,
    description: EMPTY,
    feature: EMPTY,
    price: EMPTY,
    type_car: EMPTY,
    model: EMPTY,
    owner: EMPTY,
    user_id: EMPTY,
    province: EMPTY,
    plate_number: EMPTY,
    available_date: Date,
  };
  loading: Boolean = false;
  searchingCar: any = {
    location: EMPTY,
    pickupDate: EMPTY,
    returnDate: EMPTY,
  };
  carPricing: any = {};
  result: any = [] || null;
  @mutation setCar(car: any) {
    this.car = car;
  }
  @mutation setImgCar(img: any) {
    this.car.img = img;
  }
  @mutation setCarOwner(owner: any) {
    this.car.owner = owner;
  }
  @mutation setCarUserId(user_id: any) {
    this.car.user_id = user_id;
  }
  @mutation setSearchingCar(searchingCar: any) {
    this.searchingCar = searchingCar;
  }
  @mutation setResult(result: any) {
    this.result = result;
  }
  @mutation clearCar(car: any) {
    this.car = car;
  }
  get getCars() {
    return this.car;
  }

  @action async handleSearchCar(car: any) {
    const expirationMs = 60 * 60 * 1000;
    const expirationTime = new Date().getTime() + expirationMs;
    try {
      if (
        car.location != EMPTY &&
        car.returnDate != EMPTY &&
        car.pickupDate != EMPTY
      ) {
        const res = await axios.post(
          `${process.env.baseURL + API.cars.search_car} `,
          car
        );
        this.result.push(res.data.cars);
        if (this.result.length === 1) {
          localStorage.setItem("car_result", JSON.stringify(this.result));
          Vue.toasted
            .success("Found!!", {
              icon: "check",
            })
            .goAway(2000);
        } else {
          this.result.shift();
          localStorage.setItem("car_result", JSON.stringify(this.result));
        }
      }
      if (car.location == EMPTY) {
        Vue.toasted
          .error("Please enter the location!!", {
            icon: "error_outline",
          })
          .goAway(3000);
      }
      if (car.pickupDate == EMPTY) {
        Vue.toasted
          .error("Please enter the pickup date!!", {
            icon: "error_outline",
          })
          .goAway(3000);
      }
      if (car.returnDate == EMPTY) {
        Vue.toasted
          .error("Please enter the return date!!", {
            icon: "error_outline",
          })
          .goAway(3000);
      }
    } catch (error: any) {
      const errMessage = JSON.stringify(error.response.data.msg);
      Vue.toasted
        .error(errMessage, {
          icon: "error_outline",
        })
        .goAway(3000);
    }
  }
  @action async removeCar(car: any) {
    try {
      await axios.delete(`${process.env.baseURL + API.cars.admin_delete_car}`, {
        headers: {
          Authorization: `${document.cookie}`,
        },
        data: {
          id: car.id,
          userId: car.user_id,
        },
      });
      alert(`The car ${car.name} with id: ${car.id} is deleted!!!`);
    } catch (error: any) {
      const errMessage = JSON.stringify(error.response.data.msg);
      alert(errMessage);
    }
  }
  @action async updateCarAdmin(car: any) {
    var newDate = car.available_date;
    const date = Date.parse(newDate) || 0;
    if (date === 0) {
      newDate = this.car.available_date;
    } else {
      newDate = car.available_date;
    }
    try {
      await axios.put(
        `${process.env.baseURL + API.cars.admin_update_car}`,
        {
          id: this.car.id,
          img: car.img,
          name: car.name,
          seat: car.seat,
          fuel: car.fuel,
          fuel_type: car.fuel_type,
          fuel_consumption: car.fuel_consumption,
          transmission: car.transmission,
          distance: car.distance,
          description: car.description,
          feature: car.feature,
          price: car.price,
          type_car: car.type_car,
          model: car.model,
          province: car.province,
          plate_number: car.plate_number,
          available_date: newDate,
          user_id: this.car.user_id,
        },
        {
          headers: {
            Authorization: `${document.cookie}`,
          },
        }
      );
      alert(`The Car ${this.car.name} is updated`);
      // alert(JSON.stringify(this.car));
    } catch (error: any) {
      const errMessage = JSON.stringify(error.response.data.msg);
      alert(errMessage);
    }
  }

  @action async addCarAdmin() {
    try {
      await axios.post(
        `${process.env.baseURL + API.cars.admin_add_car}`,
        this.car,
        {
          headers: {
            Authorization: `${document.cookie}`,
          },
        }
      );
      alert(`The Car ${this.car.name} is added`);
      // alert(JSON.stringify(this.car));
    } catch (error: any) {
      const errMessage = JSON.stringify(error.response.data.msg);
      alert(errMessage);
    }
  }
}
