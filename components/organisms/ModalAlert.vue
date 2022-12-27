<template>
    <div class="background-modal block">
        <form class="alert_box flex justify-center items-center flex-col bg-white rounded-xl shadow-xl" :class="{'modal-close': isActive}">
        <div class="icon">
            <fa class="" :icon="['fas', 'exclamation']" />
        </div>
        <header class="font-bold text-xl py-4">Confirm</header>
        <p class="text-lg">Are you sure to  delete this User(Car)?</p>
        <div class="btns flex justify-between items-center p-4 w-full">
          <button class="btn" >Yes, Delete!</button>
          <button class="btn btn-close" @click="toogleIsActive()">Cancel</button>
        </div>
      </form>
    </div>
  </template>
  
  <script lang="ts">
  import { Component, Vue } from "nuxt-property-decorator";
  @Component({
    name: "ModalAlert",
  })
  export default class extends Vue {
  isActive: Boolean = false;
  toogleIsActive(){
        if(this.isActive == true) {
            this.isActive = false
        }
        else {
            this.isActive = true
        }
    };

  }
  </script>
  
  <style>
  .background-modal{
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    align-items: center;
    justify-content: center;
    display: flex;
    z-index: 2;
  }

  .modal-close{
    display: none;
  }

  .alert_box{
    width: 400px;
    padding: 30px;
  }

  .alert_box .icon{
  height: 100px;
  width: 100px;
  color: #f23b26;
  border: 3px solid #f23b26;
  border-radius: 50%;
  line-height: 97px;
  font-size: 50px;
  text-align: center;
}
  
.btn-close{
    background-color: crimson !important;
}
  
.btn-close,
.btn-update{
    border-radius: 12px;
    padding: 0 10px;
}

.btn-close:checked{
  display: none;
}
  
  </style>
  