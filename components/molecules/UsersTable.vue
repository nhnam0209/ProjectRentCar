<template>
  <div class="table users-table w-full bg-white px-4 my-6">
    <div class="table-header m-4 text-xl font-bold">
      <span>User Detail</span>
    </div>
    <div class="w-full text-center">
      <tr class="table-header">
        <th class="topic">ID</th>
        <th class="topic">First Name</th>
        <th class="topic">Last name</th>
        <th class="topic">Email</th>
        <th class="topic">Username</th>
        <th class="topic">Last Login</th>
      </tr>
      <div class="table-body" v-for="user in users" :key="user.id">
        <tr class="detail">
          <td class="info">{{ user.id }}</td>
          <td class="info">{{ user.first_name }}</td>
          <td class="info">{{ user.last_name }}</td>
          <td class="info">{{ user.email }}</td>
          <td class="info">{{ user.username }}</td>
          <td class="info">{{ user.last_login }}</td>
          <td class="info">
            
          </td>
        </tr>
        
      </div>
    </div>
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
  isActive = false;
  isActive_delete = false;

  async created() {
    try {
      if (document.cookie) {
        const userRes = await axios.get(
          "http://localhost:5000/api/user/findall",
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
    this.$vxm.user.updateUser(user);
  }
}
</script>

<style>
.dashboard {
  background: #f5f5f5;
}

.table {
  z-index: 1;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  padding-bottom: 16px;
}

.topic {
  background-color: #00a550;
  color: white;
  padding: 8px 12px;
}

.info {
  padding: 5px;
}
</style>
