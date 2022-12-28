<template>
    <input :type="typeInput" class="w-full px-1.5 h-10 text-lg border-none outline-none bg-none" :placeholder="placeholderInput" required>
</template>

<script lang="ts">
import {Component,Emit,Prop,Vue} from 'nuxt-property-decorator';
@Component({
    name: "Input"
})
export default class extends Vue {
    @Prop({type: String}) typeInput !:string
    @Prop({type: String}) placeholderInput !: string
}
</script>

<style>
.input-focus:focus ~ .label-input,
.input-focus:valid ~ .label-input {
  top: -20px;
  color: #00a550;
}

.station-input-pickup:first-child{
  margin-right: 20px;
}

.station-input-pickup:last-child{
  margin-left: 20px;
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
</style>


