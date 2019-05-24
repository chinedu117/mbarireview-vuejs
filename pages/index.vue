<template>
   <div class="">

        <article-list
            :list="articles"
         />
         {{ articles }}
   </div>
</template>
<script type="text/javascript">
   
 import ArticleList from '~/components/ArticleList.vue'
export default {

   components: { ArticleList }, 

    // middleware: [],

    layout: 'default',
  

   // components: { }, 
   
   async fetch({store,params}){
        
        await store.dispatch("articles/retrieveFeaturedArticles")
            
   },

   computed:{
       
       articles(){
            
             return this.$store.getters['articles/featuredArticles']
       }
   },
    methods:{
        

    },

}
</script>

<style lang="stylus">

</style>