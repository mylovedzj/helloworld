import Vue from 'vue';
import toastComponent from './toast.vue';
let toastConstructor = Vue.extend(toastComponent);
function showToast({text,duration=3000,top,left,title}){
       const toastDom = new  toastConstructor({
          el:document.createElement('div'),
          data(){
              return {
                  text:text,
                  top:top,
                  left:left,
                  duration:duration,
                  show:true,
                  title:title
              }
          }, 
       })
    document.body.appendChild(toastDom.$el);

    setTimeout(() => {//显示后多久隐藏
        toastDom.show = false
       }, duration);
}
export  function registryToast () {
    Vue.prototype.$toast = showToast
   }
    
