<template>	
<div>		
     
	   <author-bio-edit></author-bio-edit>

		<v-container>
	 	   <v-layout>
	 		<v-card width="100%" style="border-radius: 5px">
	 			<div class="teal" style="width: 100%; padding: 10px; height: 80px; display: flex; justify-content: space-between">
	 				<h3 class="headline white--text">Your Submissions</h3>
	 				<v-btn @click="write">Write</v-btn>
	 			</div>
	 			<v-container
	                v-for="(item,index) in submissions"
                     :key="index"
                     @click="edit(item.id)"
                     class="hover"
	 			 >
	 			   <v-layout>
	 				<v-flex xs6>
	 					<span class="grey--text">Title</span>
	 					<h3>{{ item.title }}</h3>
	 					<span>{{ item.category.title}}</span>

	 				</v-flex>
	 				<v-flex xs3>
	 					<span class="grey--text">Edition</span><br>
	 				   <span>{{ item.edition.title }}</span>
	 				</v-flex>
	                <v-flex xs3>

	 					<v-chip label small v-if="item.accepted" color="green darken-3" text-color="white" >Accepted</v-chip>
	 					<v-chip label  small v-if="item.accepted === null" color="yellow darken-3" text-color="white" >awaiting</v-chip>
	 					<v-chip label small v-if="item.accepted === false" color="red darken-3" text-color="white" >rejected</v-chip>
	 				</v-flex>
	 				<v-flex xs3>
	 					 <v-btn small @click="withdraw(item.id)">Withdraw</v-btn>
	 				</v-flex>
	 			</v-layout>	
	 			</v-container>

	 			<v-card-actions>
	 				<v-pagination
	 				length='total'
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

	
 import AuthorBioEdit from '~/components/dashboard/AuthorBioEdit.vue'
export default {

// middleware: ['middleware'],
components: { AuthorBioEdit },
data() {
	return {
		 total: 8,
		 currentPage: 1,
         submissions: [{ 
                      title: "Top western road trips",
                      intro_text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
                       author: {
                         name: "Emeka Obi"
                       },

            
                       
                       	category: {
                         title: 'Fiction',
                       },

                       accepted: true,


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

                       accepted: null,


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

	                   accepted: null,
                       category: {
                         title: 'Fiction',
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

                       accepted: true,


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


                        accepted: null,
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

                       accepted: null,


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

                       accepted:null,


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

                      accepted:false,


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


                        accepted: null,
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

                       accepted:false,


            

                       },

                       { 
                      title: "Top western road trips",
                      intro_text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
                       author: {
                         name: "Emeka Obi"
                       },

                      
	
                       category: {
                         title: 'Fiction',
                       },


                       edition: {
                         title: 'The Earth',
                       },

                       accepted:false,

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

                       accepted: true,


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
                       
                       accepted:false,

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
    
    withdraw(slug){
        alert("Withdrawing submission:  Not Implemented")
        
    },

    write(){
        alert("Writing submission:  Not Implemented")
          this.$router.push({path: '/template/submission-create'})
    },

    edit(slug){
        
        alert("Editing submission:  Not Implemented")
    }

},

}
</script>

<style lang="stylus">
.hover:hover
	background: #ddd
</style>
