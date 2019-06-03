<template>
  <div>
	  <v-container>
	  	<v-layout row wrap>
	  	
	  		<v-flex md12 xs12> 
                <header>

                	 <span class="grey--text"><v-chip>{{ article.category.title }}</v-chip> In: {{ article.edition.title }}  </span>
                	<h1 class="display-3 my-2"> {{ article.title }}</h1>

                	<v-list-tile>
                		<v-list-tile-avatar>
                			<v-img
                     	   src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                     	 >	</v-img>
                     	</v-list-tile-avatar>
                     	 <v-list-tile-content>
                     	 	<h3>{{ article.author.name }}</h3>
                     	 	<span>{{ article.created_at }}</span>
                     	 </v-list-tile-content>
                	</v-list-tile>
                      

                </header>
             </v-flex>
         </v-layout>
     </v-container>

                <section class="section-across">
                	<v-img
                     	src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                     	>
                     </v-img>

                </section>


	  <v-container>
		  	<v-layout row wrap>
		  		<v-flex md12 xs12> 
	            <article>
	                
	            	{{ article.fulltext }}
                 


	             <author-bio/>
	            </article>

	  		</v-flex>
	  		
	  	</v-layout>
	   </v-container>
  </div>
</template>
<script>

import AuthorBio from '~/components/AuthorBio.vue'
export default {

// middleware: ['middleware'],

layout: 'default',

middleware: ['default-sidebar-items'],
// components: { }, 


// asyncData(){

//  return { }
// },

async fetch({store,params}){
    
    await store.dispatch("articles/retrieveArticle",params.article)
        
},

computed:{
   
   article(){

         return this.$store.getters['articles/article']
   }
},
methods:{
    

},

}
</script>

<style lang="stylus" scoped>

.section-across 
	margin: 0 0px
	max-width: 100%
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
