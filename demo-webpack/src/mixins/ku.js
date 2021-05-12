export let chang ={
    data:function(){
        return {
            age:26
        }
    },
    methods:{
        sayAges:function(){
            console.log(this.age);
        }
    },
    filters: {
        capitalize: function (value) {
          if (!value) return ''
          value = value.toString()
          return value.charAt(0).toUpperCase() + value.slice(1)
        }
      }
}