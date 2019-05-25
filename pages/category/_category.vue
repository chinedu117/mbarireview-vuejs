<template>
   
   	    <article-list
            :list="articles"
   	     />

</template>
<script type="text/javascript">
   
   import ArticleList from '~/components/ArticleList.vue'
   export default {

    middleware: ['default-sidebar-items'],

    layout: 'default',
  

   components: { ArticleList }, 

   
   async fetch({store,params}){
        		
        await store.dispatch("articles/retrieveCategoryArticles",params.category)
            
   },

   computed:{
       
       articles(){

             return this.$store.getters['articles/categoryArticles']
       }
   },
    methods:{
        

    },

}
</script>
<style lang="stylus" scoped>

</style>