<template>
    <div>
         <div class="nav_bottom">
               <div class="nav_item" @click="$emit('enlarge',0.9)">
                   <img src="../images/faxian@2x.png" alt="">
                   <span>推荐</span>
               </div>
               <div class="nav_item">
                    <img src="../images/faxian@2x.png" alt="">
                    <span>发现</span>
               </div>
               <div class="nav_item" @click="dingdan()">
                     <img src="../images/faxian@2x.png" alt="">
                     <span>订单</span>
               </div>
               <div class="nav_item" @click="wode"  :class="classObject">
                    <img src="../images/wode@2x.png" alt="" v-if="flag4">
                    <img src="../images/wode fen@2x.png" alt="" v-else>
                    <span>我的</span>
               </div>
         </div>
    </div>
</template>
<script>
export default {
   data(){
       return {
           flag1:true, flag2:true, flag3:true, flag4:true,
           isActive:true,
           errors:false,
       }
   },
   components:{},
   computed:{
       classObject:function(){
           return {
                  active:this.isActive,
                  aactive:!this.isActive 
           }
       }
   },
   methods:{
        dingdan(){
            this.$router.push({path:'/Invoice/123'});
        },
        wode(){
             this.flag4=!this.flag4;
             this.isActive=!this.isActive;
        }
   },
}
</script>
<style lang="scss" scoped>
.nav_bottom{
  position: fixed;
  z-index: 999;
  bottom: 0;
  font-size: 26px;
  width: 670px;
  height: 120px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #FFFAFA;
  padding-bottom: 10px;
  padding-top: 20px;
  padding-left: 40px;
  padding-right: 40px;
  .nav_item{
      height: 100%;
      display: flex;
      flex-direction: column ;
      justify-content: space-between;
      align-items: center;
      img{
           width: 100px;
           height: 80px;
      }
      
  }
  .active{
          color: red;
      }
      .aactive{
          color: blue;
      }
}
</style>