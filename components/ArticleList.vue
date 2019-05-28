<template>
<!-- featured list -->

    <div class="list-display">
       
       <article-list-item
          v-for="(item,index) in articles"
                :key="index"
                :item="item"
       ></article-list-item>
         

     </div>
</template>
<script type="text/javascript">
import ArticleListItem from '~/components/ArticleListItem.vue'
export default {
   
   name: 'article-list',
   components: { ArticleListItem }, 

   props: {
         "articles": { 
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

