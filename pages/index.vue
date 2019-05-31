<template>
  <div>
        
        <!-- welcome bannen -->
        <welcome-banner/>
       <!-- featured list -->
        <article-list
            :list="articles"
         />

</div>
</template>
<script type="text/javascript">
import ArticleList from '~/components/ArticleList.vue'
import WelcomeBanner from '~/components/WelcomeBanner.vue'
export default {
 
   components: { ArticleList, WelcomeBanner}, 

    // middleware: ['default-sidebar-items'],

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

<style type="text/css">

</style>

