<template>
  <div class="border p-3 flex justify-center mx-auto w-fit">
    <div>
      <div class="flex space-x-1">
        <label for="">Username: </label>
        <input class="border border-gray-300" type="text" v-model="username"/>
      </div>
      <div class="flex space-x-5">
        <label for="">Password: </label>
        <input class="border border-gray-300" type="password" v-model="password"/>
      </div>
      <button class="bg-blue-400 text-white p-2 rounded-lg" @click="handleLogin()">Login</button>
      <a href="/register">Don't have account? Register for free</a>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { Component, Vue } from "nuxt-property-decorator";
@Component({
  name: "LoginForm",
})
export default class extends Vue {
    username: String = ""
    password: String = ""
    isLogin: Boolean = false

    async handleLogin() {
      const data = {
       'username': this.username,
       'password': this.password,
      }
      try {
        const res = await axios.post("http://localhost:5000/api/login/", data)
        if(res.data.is_admin){
          setTimeout(window.location.href = ('/dashboard'),5000)
        } else {
           setTimeout(window.location.href = ('/'),5000)
        }
        // this.isLogin = true
        // setTimeout(window.location.href = ('/'),5000)
      }catch(err) {
        console.error;
        console.log("Something's wrong!!!")
      }
    }
}
</script>
