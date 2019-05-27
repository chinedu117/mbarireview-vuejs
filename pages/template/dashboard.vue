<template>	
<div>		
     <v-container>
	  	<v-layout row wrap>
	  	
	  		<v-flex md12 xs12> 
                <v-card flat  justify-center>
	              	<v-container>
		              	<v-layout grid-list-xs wrap>
			              	<v-flex xs4 md4>
			              		<div style="display:flex; justify-content: center">
					              	<v-avatar
				                       
				                       :size="$vuetify.breakpoint.mdAndUp ? '150px' : '80px' "
				                       class="mt-2 mx-auto"
				                      >
				                     	<v-img
				                     	src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
				                     
				                     	aspect-ratio="1"
				                     	>	</v-img>
				                     </v-avatar>
			                    </div>
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
		                   	  <div style="display:flex; justify-content: flex-end">
			                    <v-btn outline small class="mt-2">Follow</v-btn>
		                   	  	
		                   	  </div>
		                   </v-flex>
	               </v-layout>
               </v-container>
	              </v-card>
	  		</v-flex>
	  		
	  	</v-layout>
	   </v-container>

		<v-container>
	 	   <v-layout>
	 		<v-card width="100%" style="border-radius: 5px">
	 			<div class="teal" style="width: 100%; padding: 0; height: 200px;">
	 				<h3>Your Submissions</h3>
	 				<v-btn>Write</v-btn>
	 			</div>
	 			<v-container
	                v-for="(item,index) in submissions"

	 			 >
	 			   <v-layout>
	 				<v-flex xs6>
	 					<h3>{{ item.title }}</h3>
	 					<span>{{ item.category.title}}</span>

	 				</v-flex>
	 				<v-flex xs3>
	 				   <span>{{ item.edition.title }}</span>
	 				</v-flex>
	                <v-flex xs3>
	 					
	 				</v-flex>
	 				<v-flex xs3>
	 					<span>Action button</span>
	 				</v-flex>
	 			</v-layout>	
	 			</v-container>

	 			<v-card-actions>
	 				<v-pagination
	 				length="8"
	 				v-model="currentPage"
	 				class="mx-auto"
	 				>
	 					
	 				</v-pagination>
	 			</v-card-actions>
	 		</v-card>
	 	</v-layout>
	 </v-container>
 </div> 
</template>
<script>


export default {

// middleware: ['middleware'],

data() {
	return {
		 currentPage: 1,
         submissions: [{ 
                      title: "Top western road trips",
                      intro_text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
                       author: {
                         name: "Emeka Obi"
                       },

                       edition: {
                         title: "The Nature"
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

                       edition: {
                         title: "The Nature"
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

                       edition: {
                         title: "The Nature"
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

                       edition: {
                         title: "The Nature"
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

                       edition: {
                         title: "The Nature"
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

                       edition: {
                         title: "The Nature"
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

                       edition: {
                         title: "The Nature"
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

                       edition: {
                         title: "The Nature"
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

                       edition: {
                         title: "The Nature"
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

                       edition: {
                         title: "The Nature"
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

                       edition: {
                         title: "The Nature"
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

                       edition: {
                         title: "The Nature"
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

                       edition: {
                         title: "The Nature"
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

layout: 'default',


// components: { }, 


asyncData(){

 return { }
},

// async fetch({store,params}){
    
//     await store.dispatch("storeNamespace/storeAction")
        
// },

computed:{
   
   // storeAction(){

   //       return this.$store.getters['storeNamespace/storeGetter']
   // }
},
methods:{
    

},

}
</script>

<style lang="stylus">

</style>
