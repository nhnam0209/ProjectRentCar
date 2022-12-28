<template>
    <button @click="btnClick()" class="text-white text-lg font-bold my-7 rounded-xl p-3 text-center">
        {{ nameBtn }}
    </button>
</template>

<script lang="ts">
import {Component,Emit,Prop,Vue} from 'nuxt-property-decorator';
@Component({
    name: "Button"
})
export default class extends Vue {
    @Prop({type: String}) nameBtn !:string

    @Emit()
        
    btnClick(){
        return this.btnClick
    }
}

</script>

<style>
.button-group{
    width: 300px;
}
.btn-close{
    background-color: rgb(212, 41, 76) !important;
}
.btn-close:hover{
    background-color: rgb(238, 8, 54);
    transition: 0.5s;
}
.btn-assent {
    background: #00a550;
}
.btn-assent:hover {
    background: #009548;
    transition: 0.5s;
}
.btn-search{
    width: 100%;
    height: 100%;
}
.button-search{
    width: 260px;
    height: 50px;
    background: #ffdc00;
    border: 1px solid rgb(107 114 128);
    border-radius: 10px;
    overflow: hidden;
}
</style>