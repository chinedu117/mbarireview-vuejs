<template>
  <div>

	  <v-container>
	  	<v-layout row wrap>
	  	
	  		<v-flex md12 xs12> 
                <header>

                	 <span class="grey--text" v-if="!editing.category" @click="editing.category = true"><v-chip>{{ category }}</v-chip> In: The Nature  </span>

                     <v-select 
                      v-model="submission.category_id" 
                      v-else 
                      :label="category.title"
                      @change="editing.category = false" 
                      :items="categories"
                      item-value="id"
                      item-text="title"
                      ></v-select>


                	<h1 class="display-3 my-2" v-if="!editing.title"  v-text="submission.title" @click="editing.title = true"></h1>
                    <v-text-field v-else autofocus v-model="submission.title" outline size="24px"  @blur="editing.title = false"></v-text-field>


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
	                
	               <p v-if="!editing.fulltext"  v-html="submission.fulltext" @click="editing.fulltext = true"> </p>
                   <v-textarea outline row="20" cols="20" autofocus v-else v-model="submission.fulltext"  @blur="editing.fulltext = false"></v-textarea>

                     <author-bio-edit/>
	            </article>

	  		</v-flex>
	  		
	  	</v-layout>
	   </v-container>
  </div>
</template>
<script>

import AuthorBioEdit from '~/components/dashboard/AuthorBioEdit.vue'
export default {

// middleware: ['middleware'],

layout: 'default',


components: { AuthorBioEdit }, 
 data(){
 	  return {

 	  	 submission: {
 	  	  	  category_id: null,
 	  	      title: "",
 	  	  	  fulltext: `Write the full story here`,
              intro_text: "Write the summary here",
              images: ""
 	  	  },
 	  	  editing: {
 	  	  	  category: false,
 	  	  	  title: false,
 	  	  	  intro_text: false,
 	  	  	  fulltext: false,
 	  	  	  images: false

 	  	  },

 	  }
 },


asynData(store,params){

     store.dispatch("dashboard/retrieveSubmittableCategories")
     if(params.submission){

        let { data }  =  await store.dispatch("dashboard/retrieveSubmission",{slug: params.submission})
          
          return { 
          	  submission: data
          	  editing: {
 	  	  	  category: false,
 	  	  	  title: false,
 	  	  	  intro_text: false,
 	  	  	  fulltext: false,
 	  	  	  images: false

 	  	  }}
     }

    return { editing: {
 	  	  	  category: true,
 	  	  	  title: true,
 	  	  	  intro_text: false,
 	  	  	  fulltext: false,
 	  	  	  images: false

 	  	  }
 	  	}
},


computed:{
   category(){

   	    let category = this.$store.getters['dashboard/getCategories'].find((item) => {
   	    	  return item.id == this.article.category_id
   	    })

   	   return category.title
   },

   	categories(){
   		 return this.$store.getters['dashboard/getCategories']
   	},

},
methods:{
     
     	save(){
     		 
     		  alert("Save not implemented")
     	},

     	discard(){
     		 
     		  alert("discard not implemented")
     	},

     	submit(){
     		 
     		  alert("submit not implemented")
     	},

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
