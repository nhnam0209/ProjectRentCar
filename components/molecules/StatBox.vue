<template>
    <div class="py-4">
        <div class="grid grid-cols-2 gap-4 mx-5">
            <div class="bg-white shadow rounded-xl px-6 py-5">
                <div class="text-xl text-slate-500 font-medium block mb-2">Income</div>
                <div class="text-2xl font-bold text-green-500">$552.95</div>
            </div>

            <div class="bg-white shadow rounded-xl px-6 py-5">
                <div class="text-xl text-slate-500 font-medium block mb-2">Expenses</div>
                <div class="text-2xl font-bold text-green-500">$552.95</div>
            </div>

            <div class="bg-white shadow rounded-xl px-6 py-5">
                <div class="text-xl text-slate-500 font-medium block mb-2">Income</div>
                <div class="text-2xl font-bold text-green-500">$552.95</div>
            </div>

            <div class="bg-white shadow rounded-xl px-6 py-5">
                <div class="text-xl text-slate-500 font-medium block mb-2">Income</div>
                <div class="text-2xl font-bold text-green-500">$552.95</div>
            </div>
        </div>

    </div>
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  name: "StatBox",
})
export default class extends Vue {}
</script>