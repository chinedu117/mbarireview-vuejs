<template>
  <div>

	  <v-container>
	  	<v-layout row wrap>
	  	
	  		<v-flex md12 xs12> 
                <header>

                	 <span class="grey--text" v-if="!editing.category" @click="editing.category = true"><v-chip>{{ category }}</v-chip> In: The Nature  </span>

                     <v-select 
                     v-model="article.category_id" 
                     v-else 
                      :label="category.title"
                      @change="editing.category = false" 
                      :items="category_list"
                      item-value="id"
                      item-text="title"
                      ></v-select>


                	<h1 class="display-3 my-2" v-if="!editing.title"  v-text="article.title" @click="editing.title = true"></h1>
                    <v-text-field v-else autofocus v-model="article.title" outline size="24px"  @blur="editing.title = false"></v-text-field>


                	<v-list-tile>
                		<v-list-tile-avatar>
                			<v-img
                     	   src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                     	 >	</v-img>
                     	</v-list-tile-avatar>
                     	 <v-list-tile-content>
                     	 	<h3>Emeka Obi</h3>
                     	 	<span>20-10-2019</span>
                     	 </v-list-tile-content>
                	</v-list-tile>
                      

                </header>
                <section class="section-across">
                	<v-img
                     	src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                     	>
                     </v-img>

                </section>

	            <article>
	                
	               <p v-if="!editing.fulltext"  v-html="article.fulltext" @click="editing.fulltext = true"> </p>
                   <v-textarea outline row="20" cols="20" autofocus v-else v-model="article.fulltext"  @blur="editing.fulltext = false"></v-textarea>


	              <v-card flat  justify-center>
	              	<v-container>
		              	<v-layout grid-list-xs wrap>
			              	<v-flex xs4 md4>
				              	<v-avatar
			                       
			                       :size="$vuetify.breakpoint.mdAndUp ? '150px' : '80px' "
			                       class="mt-2"
			                      >
			                     	<v-img
			                     	src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
			                     
			                     	aspect-ratio="1"
			                     	>	</v-img>
			                     </v-avatar>
		                     </v-flex>
		                     <v-flex md8 xs8>
			                     <v-card-text>
			                     	<h3 class="headline"> Emeka Obi</h3>
					            	<p>
					                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente officia dignissimos deleniti vel distinctio neque, atque, cum excepturi sit explicabo harum, amet cupiditate minus ad labore ea tempore nisi quod voluptatem unde maxime. 
					               </p>
			                     </v-card-text>
		                   </v-flex>
		                   <v-flex xs12>
		                   	  <div>
			                    <v-btn outline small class="mt-2 mx-auto">Follow</v-btn>
		                   	  	
		                   	  </div>
		                   </v-flex>
	               </v-layout>
               </v-container>
	              </v-card>
	            </article>

	  		</v-flex>
	  		
	  	</v-layout>
	   </v-container>
  </div>
</template>
<script>


export default {

// middleware: ['middleware'],

layout: 'default',


// components: { }, 
 data(){
 	  return {
 	  	  article: {
 	  	  	  category_id: 1,
 	  	      title: "This is title",
 	  	  	  fulltext: `<p>
		                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente officia dignissimos deleniti vel distinctio neque, atque, cum excepturi sit explicabo harum, amet cupiditate minus ad labore ea tempore nisi quod voluptatem unde maxime. Nesciunt minus, facere cumque repudiandae, molestiae adipisci culpa, sit sequi quos maxime error consectetur eveniet at asperiores et hic quibusdam corporis voluptas.
		               </p>

		               <h3 class="headline"> This is the title</h3>
		            	<p>
		                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente officia dignissimos deleniti vel distinctio neque, atque, cum excepturi sit explicabo harum, amet cupiditate minus ad labore ea tempore nisi quod voluptatem unde maxime. Nesciunt minus, facere cumque repudiandae, molestiae adipisci culpa, sit sequi quos maxime error consectetur eveniet at asperiores et hic quibusdam corporis voluptas.
		               </p>

		               <h3 class="headline"> This is the title</h3>
		            	<p>
		                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente officia dignissimos deleniti vel distinctio neque, atque, cum excepturi sit explicabo harum, amet cupiditate minus ad labore ea tempore nisi quod voluptatem unde maxime. Nesciunt minus, facere cumque repudiandae, molestiae adipisci culpa, sit sequi quos maxime error consectetur eveniet at asperiores et hic quibusdam corporis voluptas.
		               </p>

		               <h3 class="headline"> This is the title</h3>
		            	<p>
		                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente officia dignissimos deleniti vel distinctio neque, atque, cum excepturi sit explicabo harum, amet cupiditate minus ad labore ea tempore nisi quod voluptatem unde maxime. Nesciunt minus, facere cumque repudiandae, molestiae adipisci culpa, sit sequi quos maxime error consectetur eveniet at asperiores et hic quibusdam corporis voluptas.
		               </p>

		               <h3 class="headline"> This is the title</h3>
		            	<p>
		                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente officia dignissimos deleniti vel distinctio neque, atque, cum excepturi sit explicabo harum, amet cupiditate minus ad labore ea tempore nisi quod voluptatem unde maxime. Nesciunt minus, facere cumque repudiandae, molestiae adipisci culpa, sit sequi quos maxime error consectetur eveniet at asperiores et hic quibusdam corporis voluptas.
		               </p>`,

                 intro_text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente officia dignissimos deleniti vel distinctio neque, atque, cum excepturi sit explicabo harum, amet cupiditate minus ad labore ea tempore nisi quod voluptatem unde maxime. Nesciunt minus, facere cumque repudiandae, molestiae adipisci culpa, sit sequi quos maxime error consectetur eveniet at asperiores et hic quibusdam corporis voluptas.",

                 images: ""
 	  	  },
 	  	  editing: {
 	  	  	  category: false,
 	  	  	  title: false,
 	  	  	  intro_text: false,
 	  	  	  fulltext: false,
 	  	  	  images: false

 	  	  },

 	  	  category_list: [
 	  	                   {
 	  	                   	 id: 1,
 	  	                   	 title: 'Fiction'
 	  	                   },
 	  	                   {
 	  	                   	 id: 2,
 	  	                   	 title: 'Non Fiction'
 	  	                   },
 	  	                   {
 	  	                   	 id: 3,
 	  	                   	 title: 'Poetry'
 	  	                   }]
 	  }
 },

asyncData(){

 return { }
},

// async fetch({store,params}){
    
//     await store.dispatch("storeNamespace/storeAction")
        
// },

computed:{
   category(){

   	    let category = this.category_list.find((item) => {
   	    	  return item.id == this.article.category_id
   	    })

   	   return category.title
   }
   // storeAction(){

   //       return this.$store.getters['storeNamespace/storeGetter']
   // }
},
methods:{
    

},

}
</script>

<style lang="stylus" scoped>

.section-across 
	margin: 0 -200px
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
