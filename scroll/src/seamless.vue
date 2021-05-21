<template>
     <div>
        <div class="seam_box" :style="{height:height+'px',width:width+'px'}" ref="content_box">
            <slot >在这里放入要循环滚动的内容</slot>
        </div>
    </div>
</template>
<script>
export default {
    name:'seam-Component',
    data(){
        return {
            timer:null,
            height:{type:Number,default:200}
        }
    },
    props:{
        width:Number,duration:{type:Number,default:100},distance:{type:Number,default:1}
    },
    mounted(){
        let first_child = this.$refs.content_box.firstChild;
        let first_tagName = first_child.tagName;
        let first_Height = first_child.offsetHeight;
        this.height = first_Height;
        let last_tagName = document.createElement(first_tagName);
        last_tagName.innerHTML =  first_child.innerHTML;
        this.$refs.content_box.appendChild(last_tagName);
        this.toScroll(this.distance,this.duration,first_Height);
    },
    methods:{
       toScroll:function(distance,duration,first_Height){
           let box =  this.$refs.content_box;
           box.scrollTop = 0;
           this.timer =setInterval(()=>{
             if(box.scrollTop>= (first_Height-1)){
                 box.scrollTop = 0;
             }
             else{
                    box.scrollTop+=distance;
             }
           },duration)
       }
    },
    beforeDestroy(){
        clearInterval(this.timer);
        this.timer = null;
        console.log('已经清除定时器');
    },
}
</script>
<style lang="scss" scoped>
.seam_box{
    overflow: auto;
    position:relative;
}
</style>