import { EMPTY } from "./../utils/constant";
import axios from "axios";
import { action, createModule, mutation } from "vuex-class-component";
const VuexModule = createModule({
  namespaced: "carInfo",
  strict: false,
  target: "nuxt",
  enableLocalWatchers: true,
});
export class CarStore extends VuexModule {
  car: any = {
    id: "",
    img: "",
    name: "",
    seat: "",
    fuel: "",
    fuel_type: "",
    fuel_consumption: "",
    transmission: "",
    distance: "",
    description: "",
    feature: "",
    price: "",
    type_car: "",
    model: "",
    owner: "",
    user_id: "",
    province: "",
    plate_number: "",
    available_date: Date,
  };
  loading: Boolean = false;
  searchingCar: any = {
    location: EMPTY,
    pickupDate: Date,
    returnDate: Date,
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
    try {
      if (car.location != "" && car.returnDate != "" && car.pickupDate != "") {
        const req = await axios.post(
          "http://localhost:5000/api/cars/find",
          car
        );
        this.result.push(req.data.cars);
        if (this.result.length === 1) {
          localStorage.setItem("car_result", JSON.stringify(this.result));
        } else {
          this.result.shift();
          localStorage.setItem("car_result", JSON.stringify(this.result));
        }
      } else {
        alert("Please enter location, pickup date and return date!!!");
      }
    } catch (error: any) {
      const errMessage = JSON.stringify(error.response.data.msg);
      alert(errMessage);
    }
  }
  @action async removeCar(car: any) {
    try {
      await axios.delete("http://localhost:5000/api/cars/deleteAdmin", {
        headers: {
          Authorization: `${document.cookie}`,
        },
        data: {
          id: car.id,
          userId: car.user_id,
        },
      });
      alert(`The car ${car.name} with id: ${car.id} is deleted!!!`);
      setTimeout("location.reload(true)", 100);
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
        "http://localhost:5000/api/cars/updateCarAdmin",
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
      await axios.post("http://localhost:5000/api/cars/addCarAdmin", this.car, {
        headers: {
          Authorization: `${document.cookie}`,
        },
      });
      alert(`The Car ${this.car.name} is added`);
      // alert(JSON.stringify(this.car));
    } catch (error: any) {
      const errMessage = JSON.stringify(error.response.data.msg);
      alert(errMessage);
    }
  }
}
