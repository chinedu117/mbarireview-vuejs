<template>
  	  <v-container>
	  	<v-layout row wrap>
	  	
	  		<v-flex md12 xs12> 
                <v-card flat  justify-content-center>
                	<v-container>
		              	<v-layout grid-xs-list wrap>
                          <v-flex xs12>
                          	 <v-btn @click="edit"><v-icon>edit</v-icon></v-btn>
                          	 <v-btn @click="save" v-if="showSave"><v-icon>save</v-icon></v-btn>
                          </v-flex>
		              	</v-layout>
		              </v-container>
	              	<v-container>
		              	<v-layout grid-xs-list wrap>
			              	<!-- <v-flex xs12 md4>
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
				              	
		                     </v-flex> -->
		                     <v-flex md12 xs12>
			                     <v-card-text>
                                     <h3> Edit Your Profile </h3>
			                     	 <v-text-field label="Pen Name" autofocus v-if="editing.pen_name" @blur="editing.pen_name = false" outline v-model="profile.pen_name"></v-text-field>

                                     <h3 class="headline" v-else @click="editing.pen_name = true">{{ profile.pen_name }}</h3>


					            	 <v-textarea label="Bio" autofocus v-if="editing.bio" @blur="editing.bio = false"outline row="6" v-model="profile.bio" placeholder="About the author">
					            	 	
					            	 </v-textarea>

					            	 <p  v-else @click="editing.bio = true">{{ profile.bio }}</p>

					            	 <!-- <v-text-field label="Follow Link" v-model="profile.contacts" outline ></v-text-field> -->
					            	 
					            	
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

import HandlesRequest from '~/utils/RequestHandler.js'
export default {

// middleware: ['middleware'],
name: "author-bio-edit",
mixins: [ HandlesRequest ],

data() {
	return {
		profile: { 
			  bio: "Click here to write about yourself here",
		      pen_name: this.$store.getters['auth/getUser'].name,
		      // contacts: "",
		      // profile_img:""
		  },

		 editing: {
		 	bio: false,
		 	pen_name: false,
		 	// contacts: false,
		 },

		 showSave: false
	}
},


created(){
     
     if (this.profile.id === undefined ) {

           this.editing.bio = true
     }

     let profile = this.$store.getters['auth/getProfile']

     if (profile) {

     	   this.profile = profile
     }

},


methods:{
    
    save(){
         
         this.mixin_handleRequest(this.$store.dispatch('auth/submitProfile',this.profile))
          this.editingValues(false)
    },

    edit(){

    	  this.editingValues(true)
    },

    editingValues(val){

         this.editing.bio = val
    	  this.editing.pen_name = val

    	  this.editing.contacts = val

    	  this.showSave = val
    }

},

}
</script>
