<template>
   <div class="articles">
   	    <article-list
            :list="articles"
   	     />
   </div>
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

.main_link,.sub_link
	color: red
	text-decoration: none
	list-style: none

.main_link a::before,.sub_link a::before
	content: "# "
	margin-left: -20px 

.main_link:hover,.sub_link:hover
	color: grey
.sub_link
	font-size: 18px
	font-weight: 300
.sub_link a
	text-decoration: none
.main_link
	font-size: 24px
	font-weight: 700
p
	line-height: 1.9
	font-size: 18px
article, header
	padding:25px 205px 50px 120px
header
	margin-bottom: 15px
.anc::before
	content: "#";
	margin-left: -35px;
	margin-bottom: -55px
	position: absolute;
	font-size: 28px;
	color: #f4645f;
	opacity: .6;
	color: red
a
	text-decoration: none !important
h2 a
	color: black !important
h4 a
	color: black !important

article h2:first-of-type
	margin-top: -10px
	margin-bottom: 10px

article h2, article h4
	margin-top: 20px
	margin-bottom: 10px

@media screen and (max-width: 1080px)
	article, header
		padding: 15px 2px 30px
	p
		line-height: 1.9
		font-size: 16px
	.main_link
		font-size: 18px
	.sub_link
		font-size: 16px
</style>