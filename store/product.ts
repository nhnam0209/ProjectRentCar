import axios  from 'axios';
import { action, createModule, mutation } from 'vuex-class-component';
const VuexModule = createModule({
    namespaced: "productInfo",
    strict: false,
    target: "nuxt",
    enableLocalWatchers: true,
})
export class ProductStore extends VuexModule{
    product: any= [{
        id: '',
        title: '',
        price: '',
        desc: '',
        quantity:'',
    }] || null
    order: any =[] || null
    loading: Boolean = false
    @mutation setProduct(product: any){
        this.product = product
    }
    @mutation setOrder(order:any){
        this.order = order
    }
    get getProducts(){
        return this.product
    }
    get getOrder(){
        return this.order
    }
    // @action async addtoCart(product:any){
    //     this.loading =!false 
    //     setTimeout(()=>{this.loading=!true},2000)
    //     this.setProduct(product)
    //     const cartData = this.cart
    //     let index = cartData.findIndex((object:any)=>{
    //         return object.id === product.id
    //     });
    //     if((product.quantity < product.storage)||(product.quantity == product.storage)){
    //         if (index == -1){ 
    //             this.cart.push(product)
    //             this.setCart(this.cart)
    //         }else if(index != -1)
    //         {
    //             if(product.id == cartData[index].id){
    //                 if(product.quantity < cartData[index].storage){
    //                     const oldValue = cartData[index]
    //                     const newValue = product.quantity + oldValue.quantity
    //                     oldValue.quantity = newValue
    //                     this.setCart(cartData)
    //                 }
    //             }
    //         }
    //     }else{
    //     }
    // }
    // @action async removeAllCart(cart:any) {
    //     location.reload();
    //     this.clearCart(cart)
    // }
    // @action async removeProduct(product:any){
    //     //console.log(product.id)
    //     const cartData = this.cart
    //     const indexOfData = cartData.findIndex((object:any)=>{
    //         return object.id === product.id
    //     })
    //     if(indexOfData !== -1){
    //         cartData.splice(indexOfData,1)
    //     }
    //     this.setCart(cartData)
    // }
    @action async fletchData(){
        //@ts-ignore
        document.getElementById("popupForm")?.style.display ="block"
    }
    @action async Close(){
         //@ts-ignore
         document.getElementById("popupForm")?.style.display ="none"
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