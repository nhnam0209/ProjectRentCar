<template>
  <div class="table users-table w-full bg-white">
    <div class="table-header m-4">
      <span>User Detail</span>
    </div>
    <div
      class="table-detail flex w-full items-center justify-center text-center"
    >
      <div class="col">
        <div class="topic">
          <span class="">ID</span>
        </div>
        <div class="detail">
          <div v-for="user in users" :key="user.id" class="info">
            {{ user.id }}
          </div>
        </div>
      </div>
      <div class="col">
        <div class="topic">
          <span class="">First name</span>
        </div>
        <div class="detail">
          <div v-for="user in users" :key="user.id" class="info">
            {{ user.first_name }}
          </div>
        </div>
      </div>
      <div class="col">
        <div class="topic">
          <span class="">Last name</span>
        </div>
        <div class="detail">
          <div v-for="user in users" :key="user.id" class="info">
            {{ user.last_name }}
          </div>
        </div>
      </div>
      <div class="col">
        <div class="topic">
          <span class="">Email</span>
        </div>
        <div class="detail">
          <div v-for="user in users" :key="user.id" class="info">
            {{ user.email }}
          </div>
        </div>
      </div>
      <div class="col">
        <div class="topic">
          <span class="">Username</span>
        </div>
        <div class="detail">
          <div v-for="user in users" :key="user.id" class="info">
            {{ user.username }}
          </div>
        </div>
      </div>
      <div class="col">
        <div class="topic">
          <span class="">Last Login</span>
        </div>
        <div class="detail">
          <div v-for="user in users" :key="user.id" class="info">
            {{ user.last_login }}
          </div>
        </div>
      </div>
      <div class="col">
        <div class="topic">
          <span class="">Action</span>
        </div>
        <div class="detail">
          <div v-for="user in users" :key="user.id" class="info">
            <div class="button flex">
              <div class="">
                <button
                  @click="handleUpdate(user)"
                  class="btn btn-update text-white m-6"
                >
                  Update
                </button>
                <ModalUpdate v-if="isActive"></ModalUpdate>
              </div>
              <div class="">
                <button
                  @click="handleDeleteUser(user)"
                  class="btn btn-close text-white m-6"
                >
                  Delete
                </button>
                <ModalAlert v-if="isActive_delete"></ModalAlert>
              </div>
            </div>
          </div>
        </div>
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

.dashboard-table {
  width: 1400px;
}

.table {
  width: 650px;
  z-index: 1;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  padding-bottom: 16px;
}

.col {
  width: 100%;
}

.col-items {
  height: 50px;
}

.topic {
  background-color: #00a550;
  color: white;
  width: 100%;
  padding: 8px 12px;
}

.info {
  padding: 5px 0;
}
</style>
