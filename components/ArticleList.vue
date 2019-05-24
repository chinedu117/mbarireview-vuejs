<template>
	<div>
  	  <div class="article-list-container"
        v-for="(item,index) in list"
        :key="index"
  	  >
  	  	   
  	  	   <article-list-item :item="item"></article-list-item>
  	  </div>
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
  
 <style scoped>

 </style>


