<template>
    <div class="table users-table w-full bg-white">
    <div class="table-header m-4 ">
        <span>User Detail</span>
    </div>
    <div class="table-detail flex w-full items-center justify-center text-center">
        <div class="col">
            <div class="topic">
                <span class="">ID</span>
            </div>
            <div class="detail">
                <div v-for="user in users" :key="user._id" class="info">{{ user._id }}</div>
            </div>
        </div>
        <div class="col">
            <div class="topic">
                <span class="">First name</span>
            </div>
            <div class="detail">
                <div v-for="user in users" :key="user._id" class="info">{{ user.first_name }}</div>
            </div>
        </div>
        <div class="col">
            <div class="topic">
                <span class="">Last name</span>
            </div>
            <div class="detail">
                <div v-for="user in users" :key="user._id" class="info">{{ user.last_name }}</div>
            </div>
        </div>
        <div class="col">
            <div class="topic">
                <span class="">Email</span>
            </div>
            <div class="detail">
                <div v-for="user in users" :key="user._id" class="info">{{ user.email }}</div>
            </div>
        </div>
        <div class="col">
            <div class="topic">
                <span class="">Password</span>
            </div>
            <div class="detail">
                <div v-for="user in users" :key="user._id" class="info">{{ user.password }}</div>
            </div>
        </div>
    </div>
</div>
</template>


<script>
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  name: "UsersTable",
})
export default class extends Vue {
    data() {
      return {
        users: [],
      }
    };
    async fetch() {
      this.users = await fetch(
        'http://localhost:4000/usersinfo'
      ).then(res => res.json())
    }
}
</script>

<style>
.dashboard{
    background: #f5f5f5;
}

.dashboard-table{
    width: 1400px;
}

.table{
    width: 650px;
    z-index: 1;
    box-shadow: 0 5px 10px rgba(0,0,0,0.2);
    border-radius: 12px;
    padding-bottom: 16px;
}

.col{
    width: 100%;
}

.col-items{
    height: 50px;
}

.topic{
    background-color: #00a550;
    color: white;
    width: 100%;
    padding: 8px 12px;
}

.info{
    padding: 5px 0;
}
</style>