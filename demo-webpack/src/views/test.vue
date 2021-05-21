<template>
    <div>
        <div id="ha">点击我</div>
        
        <seam-Component :duration="duration" :distance="distance">
           <div>
              <el-button>默认按钮</el-button>
              <el-button type="primary">主要按钮</el-button>
              <el-button type="success">成功按钮</el-button>
              <el-button type="info">信息按钮</el-button>
              <el-button type="warning">警告按钮</el-button>
              <el-button type="danger">危险按钮</el-button>
           </div>
        </seam-Component>
        <router-view></router-view>
        <router-link :to="{ name: 'Home' }">点我映射子路由</router-link>
    </div>
</template>
<script>
import Vue from 'vue';
import {chang} from '../mixins/ku';


export default {
    data(){
        return {
          width:null,//滚动组件的宽度
          duration:20,
          distance:2,
          color:'red',
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        }
    },
  //  components:{'my-component':profile},
    created(){
        
    },
    methods:{
    },
    beforeMount(){
    },
    mounted(){
     
     //  this.$toast({title:'我是标题啊',text: '群组数据保存成功！',left:'50%',top:'50%'})
    },
    beforeUpdate(){
     
    },
    
}
</script>
<style lang="scss" scoped>
 
</style>