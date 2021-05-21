<template>
  <div>
      <transition name="component-fade" mode="out-in">
         <router-view />
      </transition>  
  </div>
</template>
<script>



export default {
 
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
body{
  margin: 0;
}
.component-fade-enter
/* .component-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
}
.component-fade-enter-active {
  transition: opacity  4s ease;
}

</style>
