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
  car: any =
    [
      {
        id: "",
        name: "",
        seat: "",
        fuel: "",
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
      },
    ] || null;
  loading: Boolean = false;
  searchingCar: any = {
    location: EMPTY,
    pickupDate: Date,
    returnDate: Date,
  };
  result: any = [] || null;
  @mutation setCar(car: any) {
    this.car = car;
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
      const req = await axios.post("http://localhost:5000/api/cars/find", car);
      this.result.append(req);
      console.log(this.result);
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
  @action async updateCar(car: any) {
    console.log(car);
  }
}
