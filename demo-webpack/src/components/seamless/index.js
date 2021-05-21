import Vue from 'vue';
import  seamComponent from './seamless.vue';
//console.log(seamComponent);

const seamObject = {
    install:function(Vue){
        Vue.component(seamComponent.name,seamComponent);
    }
}
export default seamObject;

