<template>
    <div>
         <div id="ha" ref="hello" @click="handle">{{name | capitalize}}</div>
         <div id="ss">{{lasr | capitalizes}}</div>
    </div>
</template>
<script>
import Vue from 'vue';
import {chang} from '../mixins/ku';
Vue.filter('capitalizes', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})
export default {
    mixins:[chang],
    data(){
        return {
            name:'duan',
            lasr:'jdkajdka'
        }
    },
    created(){
         this.sayAges();
         this.$nextTick(()=>{
                console.log( this.$refs['hello'].innerText);
            })
    },
    methods:{
        handle(){
            this.name = "志";
        }
    },
    beforeMount(){
        let Idname =this.$refs.hello;
        console.log(Idname);
    },
    mounted(){
          let Idname = this.$refs.hello;
          console.log(Idname);
    },
    beforeUpdate(){
        let Idname = this.$refs.hello;
        console.log(Idname.innerText);
    },
    updated(){
         let Idname =this.$refs.hello;
         console.log(Idname.innerText);
    },
    beforeDestroy(){
      //  alert('aa');
    },
    destroyed(){
        alert('bb');
    }
}
</script>
<style lang="scss" scoped>

</style>