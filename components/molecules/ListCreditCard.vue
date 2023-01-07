<template>
    <div class="">
        <div class="">
            <span class="font-bold text-2xl">My Card</span>
        </div>
        <div class="">
            <div class="card-block bg-dark">
                                <div class="card-main">
                                    <div class="card-button dropdown">
                                        <button type="button" class="btn btn-link btn-icon" data-bs-toggle="dropdown">
                                            <ion-icon name="ellipsis-horizontal" role="img" class="md hydrated" aria-label="ellipsis horizontal"></ion-icon>
                                        </button>
                                        <div class="dropdown-menu dropdown-menu-end">
                                            <a class="dropdown-item" href="#">
                                                <ion-icon name="pencil-outline" role="img" class="md hydrated" aria-label="pencil outline"></ion-icon>Edit
                                            </a>
                                            <a class="dropdown-item" href="#">
                                                <ion-icon name="close-outline" role="img" class="md hydrated" aria-label="close outline"></ion-icon>Remove
                                            </a>
                                            <a class="dropdown-item" href="#">
                                                <ion-icon name="arrow-up-circle-outline" role="img" class="md hydrated" aria-label="arrow up circle outline"></ion-icon>Upgrade
                                            </a>
                                        </div>
                                    </div>
                                    <div class="balance">
                                        <span class="label">BALANCE</span>
                                        <h1 class="title">$ 1,256,90</h1>
                                    </div>
                                    <div class="in">
                                        <div class="card-number">
                                            <span class="label">Card Number</span>
                                            •••• 9905
                                        </div>
                                        <div class="bottom">
                                            <div class="card-expiry">
                                                <span class="label">Expiry</span>
                                                12 / 25
                                            </div>
                                            <div class="card-ccv">
                                                <span class="label">CCV</span>
                                                553
                                            </div>
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
  name: "ListCreditCard",
})
export default class extends Vue {}
</script>