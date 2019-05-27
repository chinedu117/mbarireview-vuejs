<template>
  	  <v-container>
	  	<v-layout row wrap>
	  	
	  		<v-flex md12 xs12> 
                <v-card flat  justify-content-center>
	              	<v-container>
		              	<v-layout grid-xs-list wrap>
			              	<v-flex xs12 md4>
			              		<div style="display:flex; justify-content: center">
			              			<v-avatar
			                       
			                       :size="$vuetify.breakpoint.mdAndUp ? '150px' : '100px' "
			                       class="mx-auto"
			                      >
			                     	<v-img
			                     	src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
			                     
			                     	aspect-ratio="1"
			                     	>	</v-img>
			                     </v-avatar>
			              		</div>
				              	
		                     </v-flex>
		                     <v-flex md8 xs12>
			                     <v-card-text>

			                     	 <v-text-field label="Pen Name" v-if="editing.pen_name" @blur="editing.pen_name = false" outline v-model="profile.pen_name"></v-text-field>

                                     <h3 class="headline" v-else @click="editing.pen_name = true">{{ profile.pen_name }}</h3>


					            	 <v-textarea label="Bio" v-if="editing.bio" @blur="editing.bio = false"outline row="6" v-model="profile.bio">
					            	 	
					            	 </v-textarea>

					            	 <p  v-else @click="editing.bio = true">{{ profile.bio }}</p>

					            	 <v-text-field label="Follow Link" outline ></v-text-field>
					            	 
					            	
			                     </v-card-text>
		                   </v-flex>
		                   
	               </v-layout>
               </v-container>
	              </v-card>
	  		</v-flex>
	  		
	  	</v-layout>
	   </v-container>
</template>
<script>


export default {

// middleware: ['middleware'],

layout: 'default',

data() {
	return {
		profile:{ 
			bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente officia dignissimos deleniti vel distinctio neque, atque, cum excepturi sit explicabo harum, amet cupiditate minus ad labore ea tempore nisi quod voluptatem unde maxime.",
		      pen_name: "Emeka Obi",
		     contacts: "https://facebook.com/sdf/"
		 },

		 editing: {
		 	bio: false,
		 	pen_name: false,
		 	contacts: false,
		 }
	}
},

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
