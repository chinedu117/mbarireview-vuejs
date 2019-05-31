<template>
  <div class="">
     <article-list
            :list="articles"
         />

         {{ editions }}

  </div>
    

</template>
<script type="text/javascript">
   
import ArticleList from '~/components/ArticleList.vue'

export default {

    layout: 'default',
  
   data()  {
     return {

     }
   },

   components: { ArticleList }, 

   // middleware: ['default-sidebar-items','editions-sidebar-items'],
   
   async fetch({store,params}){
         
         // console.log(params)
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