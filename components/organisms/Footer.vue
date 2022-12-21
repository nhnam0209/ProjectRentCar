<template>
    <footer class="footer flex px-12 justify-between bg-black w-full">
            <div class="footer-column py-5 text-center text-white">
                <div class="footer-heading font-bold text-2xl">More Information</div>
                <div class="footer-items text-lg mx-4">
                    <a href="" class="">Contact Us</a >
                    <a href="" class="">Rent Car in mobile</a >
                    <a href="" class="">Find a rental location</a>
                </div>
            </div>
            <div class="footer-column py-5 text-center text-white">
                <div class="footer-heading font-bold text-2xl">Business center</div>
                <div class="footer-items text-lg mx-4">
                    <a class="">Travel agents</a>
                    <a class="">Tour operators</a>
                    <a class="">Corporate account</a>
                </div>
            </div>
            <div class="footer-column py-5 text-center text-white">
                <div class="footer-heading font-bold text-2xl">Rent car Mobidivty Group</div>
                <div class="footer-items text-lg mx-4">
                    <a href="" class="">About</a>
                    <a href="" class="">Careers</a>
                    <a href="" class="">Gold Car</a>
                </div>
            </div>
    </footer>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import VueScreen from "vue-screen";
Vue.use(VueScreen);

@Component({
  name: "RentCarLayout",
})
export default class extends Vue {}
</script>

<style>
.footer-items a{
    display: block;
    color: rgb(163, 158, 158);
}
</style>