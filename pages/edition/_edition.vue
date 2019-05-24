<template>
   <div class="">
   	    <article-list
            :list="articles"
   	     />
   </div>
</template>
<script type="text/javascript">
   
 import ArticleList from '~/components/ArticleList.vue'
export default {

    layout: 'default',
  

   components: { ArticleList }, 

 
   asyncData(){

     return { }
   },
   
   async fetch({store,params}){
        
        await store.dispatch("articles/retrieveEditionList")
        await store.dispatch("articles/retrieveEditionArticles",params.edition)

             
   },

   computed:{
       
       articles(){

             return this.$store.getters['articles/editionArticles']
       },

       editions(){
       	
       	     return this.$store.getters['articles/editionList']
       }
   },
    methods:{
        

    },

}
</script>

<style lang="stylus">

</style>
