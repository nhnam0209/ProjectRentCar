<template>
  <div
    class="fixed top-0 bottom-0 right-0 left-0 items-center flex justify-center h-screen z-10 bg-black/70"
    :class="{'modal-close': isActive}"
  >
    <div class="flex justify-center items-center bg-white w-1/3 rounded-lg shadow overflow-hidden relative max-lg:w-1/2 max-md:w-2/3 max-sm:w-full max-sm:h-full">
      <div class="w-full">
        <div class="text-2xl text-center p-8 font-bold">Bank Account</div>
        <div class="">
            <IconX class="w-6 h-6 absolute top-2 right-3 cursor-pointer" @icon-x-click="toogleIsActive()"></IconX>
        </div>
        <div class="">
          <div class="my-4 mx-8">
            <div class="mb-2">
              <span class="text-xl font-medium">Card Type:</span>
            </div>
            <div class="">
              <select
                name=""
                id=""
                class="outline-none border border-solid border-black rounded-lg text-center text-lg p-1 w-full"
              >
                <option value="Visa">Visa</option>
                <option value="MasterCard">Master Card</option>
              </select>
            </div>
          </div>

          <div class="my-4 mx-8">
            <div class="mb-2">
              <span class="text-xl font-medium">Card Number:</span>
            </div>
            <div class="">
              <RInput
                class="outline-none border border-solid border-black rounded-lg w-full text-lg p-1"
              ></RInput>
            </div>
          </div>

          <div class="my-4 mx-8">
            <div class="mb-2">
              <span class="text-xl font-medium">Card Holder:</span>
            </div>
            <div class="">
              <RInput
                class="outline-none border border-solid border-black rounded-lg w-full text-lg p-1"
              ></RInput>
            </div>
          </div>

          <div class="my-4 mx-8">
            <div class="mb-2">
              <span class="text-xl font-medium">Card CCV:</span>
            </div>
            <div class="">
              <RInput
                name="password"
                class="outline-none border border-solid border-black rounded-lg w-full text-lg p-1"
              ></RInput>
            </div>
          </div>

          <div class="my-4 mx-8">
            <div class="mb-2">
              <span class="text-xl font-medium">Expiration Date:</span>
            </div>
            <div class="flex justify-between">
              <select
                name=""
                id=""
                class="outline-none border border-solid border-black rounded-lg text-center w-1/2 text-lg p-1"
              >
                <option value="default">Month</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
              <select
                name=""
                id=""
                class="outline-none border border-solid border-black rounded-lg text-center w-1/2 text-lg p-1 ml-4"
              >
                <option value="default">Year</option>
                <option value="1">17</option>
                <option value="2">18</option>
                <option value="3">19</option>
                <option value="4">20</option>
                <option value="5">21</option>
                <option value="6">22</option>
                <option value="7">23</option>
              </select>
            </div>
          </div>

          <div class="my-4 mx-8">
            <div class="mb-2">
                <RButton class="btn-assent w-full" nameBtn="Add Bank Account"></RButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
@Component({
  name: "AddBankAccount",
})
export default class extends Vue {
    isActive: boolean = false;

  toogleIsActive() {
    if (this.isActive == true) {
      this.isActive = false;
    } else {
      this.isActive = true;
    }
  }
}
</script>
