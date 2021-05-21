<template>
    <div>
        <div class="ah">英雄不问出处</div>
        <div>{{songsinfo.md5}}</div>
         <span @click="handle">{{name}}</span>
    </div>
</template>
<script>



import '../style/common.css';

export default {
  name: "HelloWorld",
  data(){
    return{
      songsinfo:{
       },
       name:'段',
      }
  },
  props: {
    msg: String,
  },
  methods:{
    handle:function(name){
       this.name='志';
    }
  },
  mounted () {
      this.axios.get('https://api.imjad.cn/cloudmusic/?type=song&id=1311345316&search_type=1').then((response)=>{
         console.log(response.data);
        this.songsinfo=response.data.data[0];
        console.log(this.songsinfo);
      }).catch((response)=>{
        
         
      })
  },
};
</script>

<style>
@font-face {
  font-family: 'webfont';
  font-display: swap;
  src: url('//at.alicdn.com/t/webfont_m60stj4aqt.eot'); /* IE9*/
  src: url('//at.alicdn.com/t/webfont_m60stj4aqt.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('//at.alicdn.com/t/webfont_m60stj4aqt.woff2') format('woff2'),
  url('//at.alicdn.com/t/webfont_m60stj4aqt.woff') format('woff'), /* chrome、firefox */
  url('//at.alicdn.com/t/webfont_m60stj4aqt.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
  url('//at.alicdn.com/t/webfont_m60stj4aqt.svg#杨任东竹石体-Bold') format('svg'); /* iOS 4.1- */
}
.ah{
    width:750px;
    font-family: 'webfont';
    background-color: red;
}
</style>