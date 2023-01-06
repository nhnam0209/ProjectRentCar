<template>
    <label class="label-input top-2/4 absolute text-lg">{{ nameLabel }}</label>
</template>
  
<script lang="ts">
import {Component,Emit,Prop,Vue} from 'nuxt-property-decorator';
@Component({
    name: "RLabel"
})
export default class extends Vue {
    @Prop({type: String}) nameLabel !:string
}
</script>

<style>
.label-input {
  top: -10px;
  left: 0px;
  color: #b2b2b2;
}

.sidebar-label{
    position: initial!important;
    color: black !important;
}
</style>

