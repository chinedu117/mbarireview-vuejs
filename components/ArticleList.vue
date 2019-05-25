<template>
	  <div class="list-display">

  	   <article-list-item class="list-item" 
         v-for="(item,index) in list"
        :key="index"
        :item="item"> 
        </article-list-item>

  	  </div>
</template>
 <script>
     import ArticleListItem from '~/components/ArticleListItem.vue'
    export default {
       name: 'article-list',
       props: {
       	  list: {
       	  	 type: Array,
       	  	 required: true,

       	  }
       },

       components: { ArticleListItem },
       
    }
</script>
  
 <style>
  .list-display {
     margin:auto;
     justify-content: space-between;
     flex-wrap: wrap;
  }
  .list-item {
     margin-bottom : 15px;
  }

   @media (min-width: 900px) {
    .list-display {
      display: flex;
      width: 80%;
      padding: 20px;
    }
    .list-item {
      flex-basis: 30%;
      margin: auto;
       margin-bottom : 15px;
       border-radius: 5px;
    }
    }
 </style>


