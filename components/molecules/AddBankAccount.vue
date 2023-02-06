<template>
  <div
    class="fixed top-0 bottom-0 right-0 left-0 items-center flex justify-center h-screen z-10 bg-black/70"
    :class="{ 'modal-close': isActive }"
  >
    <form
      class="flex justify-center items-center bg-white w-1/3 rounded-lg shadow overflow-hidden relative max-lg:w-1/2 max-md:w-2/3 max-sm:w-full max-sm:h-full"
    >
      <div class="w-full">
        <div class="text-2xl text-center p-8 font-bold">Bank Account</div>
        <div class="">
          <IconX
            class="w-6 h-6 absolute top-2 right-3 cursor-pointer"
            @icon-x-click="toogleIsActive()"
          ></IconX>
        </div>
        <div class="">
          <div class="my-4 mx-8">
            <div class="mb-2">
              <span class="text-xl font-medium">Card Number:</span>
            </div>
            <div class="">
              <input
                class="outline-none border border-solid border-black rounded-lg w-full text-lg p-1"
                v-model="bankAccountInfo.bank_account"
              />
            </div>
          </div>

          <div class="my-4 mx-8">
            <div class="mb-2">
              <span class="text-xl font-medium">Card Holder:</span>
            </div>
            <div class="">
              <input
                class="outline-none border border-solid border-black rounded-lg w-full text-lg p-1"
                v-model="bankAccountInfo.full_name"
              />
            </div>
          </div>

          <div class="my-4 mx-8">
            <div class="mb-2">
              <span class="text-xl font-medium">Expiration Date:</span>
            </div>
            <div class="flex justify-between">
              <div class="">
                <input
                  name="password"
                  class="outline-none border border-solid border-black rounded-lg w-full text-lg p-1"
                  v-model="bankAccountInfo.expire_date"
                />
              </div>
            </div>
          </div>

          <div class="my-4 mx-8">
            <div class="mb-2">
              <RButton
                class="btn-assent w-full"
                nameBtn="Add Bank Account"
                @btn-click="handleWithdrawn()"
              ></RButton>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import axios from "axios";

@Component({
  name: "AddBankAccount",
})
export default class extends Vue {
  @Prop({}) bankAccountInfo: any = [];
  @Prop({}) userInfo!: any;
  isActive: boolean = false;

  async handleWithdrawn() {
    try {
      await axios.post(
        "http://localhost:5000/api/bankaccount/add",
        {
          user_id: this.userInfo.id,
          username: this.userInfo.username,
          full_name: this.bankAccountInfo.full_name,
          bank_account: this.bankAccountInfo.bank_account,
          expire_date: this.bankAccountInfo.expire_date,
          status: this.bankAccountInfo.status,
          create_at: this.bankAccountInfo.create_at,
          update_at: this.bankAccountInfo.update_at,
        },
        {
          headers: {
            Authorization: `${document.cookie}`,
          },
        }
      );
      alert(`The Bank account created successfully`);
      location.reload();
      // alert(JSON.stringify(this.car));
    } catch (error: any) {
      const errMessage = JSON.stringify(error.response.data.msg);
      alert(errMessage);
    }
  }

  toogleIsActive() {
    if (this.isActive == true) {
      this.isActive = false;
    } else {
      this.isActive = true;
    }
  }
}
</script>
