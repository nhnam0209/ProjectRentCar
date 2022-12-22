import { EMPTY } from './../utils/constant';
import axios from "axios";
import { action, createModule, mutation } from "vuex-class-component";

const VuexModule = createModule({
    namespaced: "userInfo",
    strict: false,
    target: "nuxt",
    enableLocalWatchers: true,
})
export class UserStore extends VuexModule{
    userInfo: any ={
        first_name: EMPTY,
        last_name: EMPTY,
        full_name: EMPTY ,
        email: EMPTY,  
        username: EMPTY,    
        password: EMPTY,
    } || null
    token: any = EMPTY
    userLogin: any={
        username: EMPTY,
        password: EMPTY,
    } || null
    loading: boolean = false;
    @mutation setUserInfo(userInfo:any) {
        this.userInfo.full_name = this.userInfo.first_name + ' ' +this.userInfo.last_name,
        this.userInfo = userInfo
    }
    @mutation setUserLogin(userLogin:any) {
        this.userLogin = userLogin
    }
    @mutation setToken(token:any) {
        this.token = token
    }
    @mutation resetUserLogin(userLogin:any) {
        Object.assign(userLogin, this.userLogin)
    }
    @mutation resetToken(token:any) {
        token = this.token
        token = EMPTY
    }
    
    @action async handleRegister() {
        function completed(){
            alert('Your profile was registed!!')
        }
        const TIME_OUT_SUBMIT = 1000
        this.loading =!false 
        setTimeout(()=>{this.loading=!true},TIME_OUT_SUBMIT)
        setTimeout(completed,TIME_OUT_SUBMIT)
        this.setUserInfo(this.userInfo)
        try{
            await axios.post("http://localhost:5000/api/auth/register", this.userInfo);
        }catch(error:any){
            console.error(error.message);
        }
    }

    @action async handleLogin(){
        try {
            const res = await axios.post("http://localhost:5000/api/auth/login", this.userLogin);
            this.setToken(res.data.token)
            const token = axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`
            document.cookie = `Authorization = ${token}` 
        } catch (error:any) {
            console.error(error.message);
        }
    }

    @action async handleLogOut() {
        try{
            this.resetToken(this.token)
            this.resetUserLogin(this.userInfo)
            const token = axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`
            document.cookie = `Authorization = ${token}` 
        }catch(error: any) {
            console.error(error.message);
        }
    }

    get gotUserInfo(){
        return this.userInfo
    }
}