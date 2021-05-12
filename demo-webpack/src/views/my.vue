<template>
    <div class="wrap_box">
        <div class="my_info">
            <div class="info_top"></div>
            <div class="info_bottom"></div>
        </div>
        <div class="item">
              <div class="item_one">
                  <div class="item_son">
                      <img src="../images/wodyaoq@2x.png" alt="">
                       <span>邀请好友</span>
                  </div>
                  <div class="item_son">
                        <img src="../images/wodqiuzu@2x.png" alt="">
                        <span>求租</span>
                  </div>
                  <div class="item_son">
                       <img src="../images/wodsc@2x.png" alt="">
                        <span>收藏浏览</span>
                  </div>
                  <div class="item_son">
                         <img src="../images/wodepingjia @2x.png" alt="">
                        <span>我的评价</span>
                  </div>
              </div>
              <div class="item_one">

              </div>
              <div class="item_one"></div>
              <div class="item_one"></div>
              <div class="item_one"></div>
              <div class="item_one"></div>
              <div class="item_one">
                    <div class="item_son">
                      <img src="../images/wodyaoq@2x.png" alt=""  v-on:click="ha($event)">
                       <span>邀请好友</span>
                  </div>
                  <div class="item_son">
                        <img src="../images/wodqiuzu@2x.png" alt="">
                        <span>求租</span>
                  </div>
                  <div class="item_son">
                       <img src="../images/wodsc@2x.png" alt="">
                        <span>收藏浏览</span>
                  </div>
                  <div class="item_son">
                         <img src="../images/wodepingjia @2x.png" alt="">
                        <span>我的评价</span>
                  </div>
              </div>
        </div>
        <component-BM v-on:enlarge="ha"></component-BM>
    </div>
</template>
<script>
import Bottom from '../components/bottom.vue';
export default {
    data(){
        return {
        }
        },
    computed:{
    },
    methods:{
        ha:function($event){
            alert($event);
        }
    },
    components:{'component-BM': Bottom}
}
</script>
<style lang="scss" scoped>
.wrap_box{
    padding-bottom: 170px;
}
.my_info{
    width: 100%;
    background: url(../images/bgwod@2x.png) no-repeat;
    background-size: 100% 100%;
    height: 296px;
   
}
.item{
  font-size: 20px;
  .item_one{
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    height: 120px;
    padding-top: 30px;
    padding-bottom: 10px;
    align-items: flex-end;
    border-bottom: 1px solid red;
    padding-left: 30px;
    padding-right: 30px;
    .item_son{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
       img{
        width: 68px;
        height: 68px;
        opacity:1;
      }
     }
  }
}
</style>