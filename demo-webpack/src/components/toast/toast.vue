<template>
    <div>
          <div class="notification_box" :style="{top:top,left:left}">
                <h4>{{title}}</h4>
                <div class="text_box">{{text}}</div>
          </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.notification_box{
    width: 300px;
    height: 120px;
    font-size: 24px;
    position: absolute;
    margin-top: -60px;
    margin-left: -150px;//水平居中：left:50%,margin-left:'自身元素宽度的一半'
    border-radius: 8px;
    border: 1px solid #ebeef5;
    box-shadow: 0 2px 12px 0 rgba(0,0,0, 0.4);
    background-color: #fff;
    position: fixed;
    padding: 14px 26px 14px 14px;
    
    h1,h2,h3,h4{
        line-height: 0.2;
        margin:15px 0 30px 0;
    }
}
</style>