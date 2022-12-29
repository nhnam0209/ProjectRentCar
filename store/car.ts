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
  order: any = [] || null;
  loading: Boolean = false;
  @mutation setCar(car: any) {
    this.car = car;
  }
  @mutation setOrder(order: any) {
    this.order = order;
  }
  @mutation clearCar(car: any) {
    this.car = car;
  }
  get getCars() {
    return this.car;
  }
  get getOrder() {
    return this.order;
  }
  // @action async addtoCart(car:any){
  //     this.loading =!false
  //     setTimeout(()=>{this.loading=!true},2000)
  //     this.setcar(car)
  //     const cartData = this.cart
  //     let index = cartData.findIndex((object:any)=>{
  //         return object.id === car.id
  //     });
  //     if((car.quantity < car.storage)||(car.quantity == car.storage)){
  //         if (index == -1){
  //             this.cart.push(car)
  //             this.setCart(this.cart)
  //         }else if(index != -1)
  //         {
  //             if(car.id == cartData[index].id){
  //                 if(car.quantity < cartData[index].storage){
  //                     const oldValue = cartData[index]
  //                     const newValue = car.quantity + oldValue.quantity
  //                     oldValue.quantity = newValue
  //                     this.setCart(cartData)
  //                 }
  //             }
  //         }
  //     }else{
  //     }
  // }
  @action async removeAllCart(car: any) {
    location.reload();
    this.clearCar(car);
  }
  @action async removeCar(car: any) {
    //console.log(car.id)
    // const carData = this.car
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
    } catch (error) {
      console.log(error);
      alert("Something wrong");
    }

    // const indexOfData = carData.findIndex((object:any)=>{
    //     return object.id === car.id
    // })
    // if(indexOfData !== -1){
    //     carData.splice(indexOfData,1)
    //
    // this.setCar(carData)
  }
  @action async fletchData() {
    //@ts-ignore
    document.getElementById("popupForm")?.style.display = "block";
  }
  @action async Close() {
    //@ts-ignore
    document.getElementById("popupForm")?.style.display = "none";
  }
  // @action async checkOut(){
  //     this.loading =!false
  //     setTimeout(()=>{this.loading=!true},1000)
  //     this.order.push(this.cart)
  //     const user = this.userInfo
  //     const userModify = JSON.stringify(user)
  //     this.order.push(userModify)
  //     const order = this.order
  //     try{
  //         const userOrder = await axios.post('http://localhost:3000/api/cart/order',order);
  //         this.setOrder(order)
  //         this.cart = []
  //         this.order = []
  //         this.setCart(this.cart)
  //         this.setOrder(this.order)
  //         location.reload();
  //         alert("Thanks for choosing us")
  //     }catch(error:any){
  //         console.error(error.message);
  //     }
  // }
}
