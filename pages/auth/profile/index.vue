<template>





</template>
<script>


export default {

    middleware: ['middleware'],

    layout: 'default',
  

   // components: { }, 

 
   asyncData(){

     return { }
   },
   
   async fetch({store,params}){
        
        await store.dispatch("storeNamespace/storeAction")
            
   },

   computed:{
       
       storeAction(){

             return this.$store.getters['storeNamespace/storeGetter']
       }
   },
    methods:{
        

    },

}
</script>

<style lang="stylus">

</style>