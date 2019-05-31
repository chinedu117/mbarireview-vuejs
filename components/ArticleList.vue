<template>
    <div class="list-display">
       <div v-if="list.length > 0">
         
       
       <article-list-item
          v-for="(item,index) in list"
                :key="index"
                :item="item"
       ></article-list-item>
        
       </div>
       <div v-else>

         <h3>Oops Nothing here</h3>
         
       </div>

     </div>
</template>
<script type="text/javascript">
import ArticleListItem from '~/components/ArticleListItem.vue'
export default {
   
   name: 'article-list',
   components: { ArticleListItem }, 

   props: {
         "list": { 
                    type: Array,
                    required: true
                  }
   },

    methods:{
         
           
 
    },

}
</script>

<style type="text/css">

 .list-display {
     margin:auto;
     justify-content: space-between;
     flex-wrap: wrap;
     width: 90%;
     margin-top: 10px;
  }
  

   @media (min-width: 900px) {
    .list-display {
      display: flex;
      width: 80%;
      padding: 20px;
    }
    }

</style>

