<template>
  <div
    class="shadow-xl rounded-xl z-10 pb-4 w-full bg-white px-4 my-6 overflow-x-auto"
  >
    <div class="m-4 text-xl font-bold">
      <span>User Detail</span>
    </div>
    <table class="w-full text-center">
      <tr class="w-full">
        <th class="bg-[#379683] text-white py-2 px-3">ID</th>
        <th class="bg-[#379683] text-white py-2 px-3">First Name</th>
        <th class="bg-[#379683] text-white py-2 px-3">Last name</th>
        <th class="bg-[#379683] text-white py-2 px-3">Email</th>
        <th class="bg-[#379683] text-white py-2 px-3">Username</th>
        <th class="bg-[#379683] text-white py-2 px-3">Last Login</th>
        <th class="bg-[#379683] text-white py-2 px-3">Action</th>
      </tr>
      <tr class="" v-for="user in users" :key="user.id">
        <td class="p-2">{{ user.id }}</td>
        <td class="p-2">{{ user.first_name }}</td>
        <td class="p-2">{{ user.last_name }}</td>
        <td class="p-2">{{ user.email }}</td>
        <td class="p-2">{{ user.username }}</td>
        <td class="p-2">{{ user.last_login }}</td>
        <td class="p-2">
          <div class="icon-group flex">
            <div @click="handleUpdate(user)">
              <iconAdd
                class="h-6 w-6 px-1 mx-1 cursor-pointer"
                @icon-add-click="toogleIsActive()"
              ></iconAdd>
            </div>
            <ModalUpdate v-if="isActive" :user-info="userInfo"></ModalUpdate>
            <div @click="handleDeleteUser(user)">
              <iconDelete
                class="h-6 w-6 px-1 mx-1 cursor-pointer"
                @icon-delete-click="toogleIsActiveDelete()"
              >
              </iconDelete>
            </div>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  name: "UsersTable",
})
export default class extends Vue {
  users: any = [];
  userInfo: any = {};
  isActive = false;
  isActive_delete = false;

  toogleIsActive() {
    if (this.isActive == true) {
      this.isActive = false;
    } else {
      this.isActive = true;
    }
  }

  toogleIsActiveDelete() {
    if (this.isActive_delete == true) {
      this.isActive_delete = false;
    } else {
      this.isActive_delete = true;
    }
  }

  async created() {
    try {
      if (document.cookie) {
        const userRes = await axios.get(
          "http://localhost:5000/api/user/find_all",
          {
            headers: {
              Authorization: `${document.cookie}`,
            },
          }
        );
        this.users = userRes.data.user;
      } else {
        this.$router.push("/login");
        setTimeout("location.reload(true)", 100);
      }
    } catch (error) {
      this.$router.push("/dashboardadmin");
      setTimeout("location.reload(true)", 100);
    }
  }
  async handleDeleteUser(user: any) {
    this.$vxm.user.removeUser(user);
  }

  async handleUpdate(user: any) {
    this.userInfo = user;
    console.log(this.userInfo);

    // this.$vxm.user.updateUser(user);
  }
}
</script>
