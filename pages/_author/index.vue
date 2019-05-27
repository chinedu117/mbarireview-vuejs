<template>
  <div>
        
        <!-- welcome bannen -->
        <author-bio/>
       <!-- featured list -->
        <article-list
            :list="articles"
         />

 </div>
</template>
<script type="text/javascript">
import ArticleList from '~/components/ArticleList.vue'
import AuthorBio from '~/components/AuthorBio.vue'
export default {
   

    // middleware: ['middleware'],

    layout: 'default',
  

   components: {ArticleList, AuthorBio }, 

 
   asyncData(){

     return { }
   },
   
   async fetch({store,params}){
        
        await store.dispatch("articles/retrieveAuthorArticles",params.author)
            
   },

   computed:{
       
       articles(){

             return this.$store.getters['articles/authorArticles']
       }
   },
    methods:{
        

    },

}
</script>

<style lang="stylus">

</style>