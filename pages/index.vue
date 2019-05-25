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
   
   data(){
      return {

      }
   },
   components: { ArticleList, WelcomeBanner}, 

    middleware: ['default-sidebar-items'],

    layout: 'default',
  

   // components: { }, 
   
   async fetch({store,params}){


        // await store.dispatch("articles/retrieveFeaturedArticles")
            
   },

   computed:{
       
       articles(){
            
            // return this.$store.getters['articles/featuredArticles']

            return [{ 
                      title: "Top western road trips",
                      intro_text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
                       author: {
                         name: "Emeka Obi"
                       },

                       category: {
                         title: 'Fiction',
                       },

                       edition: {
                         title: 'The Earth',
                       },

                       },

                       { 
                      title: "Top western road trips",
                      intro_text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
                       author: {
                         name: "Emeka Obi"
                       },

                       category: {
                         title: 'Fiction',
                       },

                       edition: {
                         title: 'The Earth',
                       },

                       },

                       { 
                      title: "Top western road trips",
                      intro_text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
                       author: {
                         name: "Emeka Obi"
                       },

                       category: {
                         title: 'Fiction',
                       },

                       edition: {
                         title: 'The Earth',
                       },
                       }, 

                       { 
                      title: "Top western road trips",
                      intro_text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
                       author: {
                         name: "Emeka Obi"
                       },

                       category: {
                         title: 'Fiction',
                       },

                       edition: {
                         title: 'The Earth',
                       },

                       },

                       { 
                      title: "Top western road trips",
                      intro_text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
                       author: {
                         name: "Emeka Obi"
                       },

                       category: {
                         title: 'Fiction',
                       },

                       edition: {
                         title: 'The Earth',
                       },
                       }, 

                       { 
                      title: "Top western road trips",
                      intro_text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
                       author: {
                         name: "Emeka Obi"
                       },

                       category: {
                         title: 'Fiction',
                       },

                       edition: {
                         title: 'The Earth',
                       },

                       },

                       { 
                      title: "Top western road trips",
                      intro_text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
                       author: {
                         name: "Emeka Obi"
                       },

                       category: {
                         title: 'Fiction',
                       },

                       edition: {
                         title: 'The Earth',
                       },
                       }, 

                       { 
                      title: "Top western road trips",
                      intro_text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
                       author: {
                         name: "Emeka Obi"
                       },

                       category: {
                         title: 'Fiction',
                       },

                       edition: {
                         title: 'The Earth',
                       },

                       },

                       { 
                      title: "Top western road trips",
                      intro_text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
                       author: {
                         name: "Emeka Obi"
                       },

                       category: {
                         title: 'Fiction',
                       },

                       edition: {
                         title: 'The Earth',
                       },
                       }, 

                       { 
                      title: "Top western road trips",
                      intro_text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
                       author: {
                         name: "Emeka Obi"
                       },

                       category: {
                         title: 'Fiction',
                       },

                       edition: {
                         title: 'The Earth',
                       },

                       },

                       { 
                      title: "Top western road trips",
                      intro_text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
                       author: {
                         name: "Emeka Obi"
                       },

                       category: {
                         title: 'Fiction',
                       },

                       edition: {
                         title: 'The Earth',
                       },
                       }, 

                       { 
                      title: "Top western road trips",
                      intro_text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
                       author: {
                         name: "Emeka Obi"
                       },

                       category: {
                         title: 'Fiction',
                       },

                       edition: {
                         title: 'The Earth',
                       },

                       },

                       { 
                      title: "Top western road trips",
                      intro_text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
                       author: {
                         name: "Emeka Obi"
                       },

                       category: {
                         title: 'Fiction',
                       },

                       edition: {
                         title: 'The Earth',
                       },
                       }, 

            ]
       }
   },
    methods:{
        

    },

}
</script>

<style type="text/css">

</style>

