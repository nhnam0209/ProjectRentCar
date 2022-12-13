<template>
  <div class="border p-3 flex justify-center mx-auto w-fit">
    <div>
      <div class="flex space-x-1">
        <label for="">Fisrt Name:</label>
        <input class="border border-gray-300" type="text" v-model="first_name"/>
      </div>
      <div class="flex space-x-5">
        <label for="">Last Name:</label>
        <input class="border border-gray-300" type="text" v-model="last_name"/>
      </div>
      <div class="flex space-x-5">
        <label for="">Email:</label>
        <input class="border border-gray-300" type="email" v-model="email"/>
      </div>
      <div class="flex space-x-5">
        <label for="">Username:</label>
        <input class="border border-gray-300" type="text" v-model="username"/>
      </div>
      <div class="flex space-x-5">
        <label for="">Password:</label>
        <input class="border border-gray-300" type="password" v-model="password"/>
      </div>
      <button class="bg-blue-400 text-white p-2 rounded-lg" @click="signupHandle()">Submit</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import axios from "axios";
@Component({
  name: "RegisterForm",
})
export default class extends Vue {
    first_name:String = ""
    last_name:String = ""
    email: String = ""
    username: String = ""
    password: String = ""
    

    async signupHandle() {
      const data = {
        'first_name': this.first_name,
        'last_name': this.last_name,
        'email': this.email,
        'username': this.username,
        'password': this.password
      }
      console.log(data)
      try {
        const res = await axios.post("http://localhost:5000/register/add", data);
        console.log(res)

      }catch(err){
        console.error;
      }

    }
}
</script>
