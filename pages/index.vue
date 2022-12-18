<template>
  <Default>
    <template #content>
      <div class="background-home flex justify-center items-center flexed h-screen">
        <form action="" class="booking-form">
          <div class="type-car flex justify-between items-center">
            <div class="vihecle">
              <div class="vihecle-filter ">
                <div class="title-vihecle-filter py-2">
                  <span class="font-bold text-lg">What type of vihecle?</span>
                </div>
                <div class="vihecle-option flex justify-center items-center">
                  <div class="vihecle-type flex justify-center items-center">
                    <img src="../static/img/type-car/cars-filter.bdb1eda.png" alt="" class="type-car-img">
                    <p class="type-car-label">Car</p>
                  </div>
                  <div class="vihecle-type flex justify-center items-center">
                    <img src="../static/img/type-car/vans-trucks-filter.2319eb0.png" alt="" class="type-car-img">
                    <p class="type-car-label">Van & Trucks</p>
                  </div>
                  <div class="vihecle-type flex justify-center items-center">
                    <img src="../static/img/type-car/prestige-filter.94613cf.png" alt="" class="type-car-img">
                    <p class="type-car-label">Prestisge</p>
                  </div>
                </div>
              </div>
            </div>
            <div class=""></div>
          </div>
          <div class="info-hire-car my-8">
            <div class="dateime-pickup-car inline-block">
              <div class="station-input-pickup w-full">
                <div class="title-pickup-input py-2">
                  <span class="font-bold text-lg">Pick up & Return location</span>
                </div>
                <div class="pickup-input flex ">
                  <div class="icon-pickup-input flex justify-center items-center">
                    <fa class="icon-pickup" :icon="['fas', 'location-pin']" />
                  </div>
                  <input type="text" class="label-input w-full " placeholder="Pick up & Return location">
                </div>
              </div>

              <div class="input-datetime-pickup-and-return flex justify-between items-center">
                <div class="station-input-pickup w-full">
                  <div class="title-pickup-input py-2">
                    <span class="font-bold text-lg">Pick up date & time</span>
                  </div>
                  <div class="pickup-input flex justify-center">
                    <div class="icon-pickup-input flex justify-center items-center">
                      <fa class="icon-pickup" :icon="['fas', 'calendar']" />
                    </div>
                    <div class="input-date flex justify-center items-center">
                      <input type="text" class="label-input label-input-date partition w-full" placeholder="Return date">
                    </div>
                    <div class="input-time flex justify-center items-center">
                      <input type="text" class=" label-input label-input-time w-full" placeholder="Time">
                    </div>
                  </div>
                </div>
  
                <div class="station-input-pickup w-full">
                  <div class="title-pickup-input py-2">
                    <span class="font-bold text-lg">Return date & time</span>
                  </div>
                  <div class="pickup-input flex justify-center">
                    <div class="icon-pickup-input flex justify-center items-center">
                      <fa class="icon-pickup" :icon="['fas', 'calendar']" />
                    </div>
                    <div class="input-date flex justify-center items-center">
                      <input type="text" class="label-input label-input-date partition w-full" placeholder="Return date">
                    </div>
                    <div class="input-time flex justify-center items-center">
                      <input type="text" class="label-input label-input-time w-full" placeholder="Time">
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div class="info-customer flex justify-between items-center">
            <div class="info-customer-age-country">
              <div class="age-customer flex justify-center items-center">
                <span class="info-label text-lg">I am</span>
                <div class="select-age">
                  <span class="age-label font-bold">26+</span>
                  <fa class="icon-pickup" :icon="['fas', 'caret-down']" />
                </div>
              </div>
            </div>
            <div class="info-customer-age-country">
              <div class="country-customer flex justify-center items-center">
                <span class="info-label text-lg">I live in</span>
                <div class="select-country">
                  <span class="country-label font-bold"> Viet Nam</span>
                  <fa class="icon-pickup" :icon="['fas', 'caret-down']" />
                </div>
              </div>
            </div>
            <div class="flex justify-center items-center">
              <div class="button-search flex justify-center items-center">
                <button class="btn-search text-lg font-bold">Search</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </template>
  </Default>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  name: "HomePage",
  layout: "rentcar-layout",
})
export default class extends Vue {}
</script>

<style>
.background-home{
  background-image: url(../static/img/home-page.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.booking-form{
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  overflow: hidden;
  animation: slidein-Homepage 2s ease;
  opacity: .9;
  width: 1000px;

}

.vihecle-option{
  border: 1px solid rgb(107 114 128);
  border-radius: 12px;
  overflow: hidden;
  height: 50px;
}

.vihecle-type{
  padding: 5px 20px;
  cursor: pointer;
  position: relative;
  z-index: 1;
  height: 100%;
}

.vihecle-type::before{
  content: "";
  position: absolute;
  left: 0;
  height: 100%;
  width: 0%;
  background: #00a550;
  opacity: .9;
  transition: all 0.5s ease;
  z-index: -1;
}

.vihecle-type:hover::before{
  width: 100%;
}

.type-car-img{
  height: 21px;
  padding-right: 15px;
}

.station-input-pickup:first-child{
  margin-right: 20px;
}

.station-input-pickup:last-child{
  margin-left: 20px;
}

.pickup-input{
  border: 1px solid rgb(107 114 128);
  border-radius: 12px;
  overflow: hidden;
  height: 50px;
}

.icon-pickup-input{
  padding: 0 10px;
  font-size: 20px;
  color: #00a550;
}

.label-input{
  height: 100%;
  outline: none;
  border: none;
  z-index: 1;
}

.label-input-date{
  border-right: 1px solid rgb(107 114 128);
}

.input-time{
  padding-left: 6px;
}

.info-label{
  padding: 0 6px;
}

.icon-pickup{
  color: #00a550;
  cursor: pointer;
}

.button-search{
  width: 260px;
  height: 50px;
  background: #ffdc00;
  border: 1px solid rgb(107 114 128);
  border-radius: 10px;
  overflow: hidden;
}

.btn-search{
  width: 100%;
  height: 100%;
}
@keyframes slidein-Homepage {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }

  to {
    opacity: .9;
    transform: translateY(0%);
  }
}

@media(max-width: 1190px){
.booking-form{
  width: 50%;
}
.dateime-pickup-car{
  display: block;
}
.station-input-pickup:last-child{
  margin-left: 0;
}

.info-customer{
  display: block;
}

.input-datetime-pickup-and-return{
  display: block;
}
}

@media(max-width: 920px){
  .vihecle-option{
    display: block;
    height: 100%;
  }

  .vihecle-type{
    padding: 10px 0;
  }

}
</style>
