<template>
 	   <v-alert v-if="isCalling" v-model="show" type="info" dismissible >
 	   	  <h5>{{ title }}</h5>
 	   	      {{ message }}
 	   	  <v-btn>Click Here to Submit</v-btn>
 	   </v-alert>
</template>
 	 <script>
 	    export default {
           name: 'call-for-submission',
 	       data() {
 	          return {
                  show:true
 	          }
 	       },
 	       computed: {
                 
               	isCalling(){
               		 return this.$store.state.submission.calling
               	},

           		message(){
           			 return this.$store.state.submission.message
           		},
           		title(){
                    return this.$store.state.submission.title
           		} 

 	       },
 
 	       methods: {
 
 	       }
 	    }
 	 </script>
 
 	 <style>
 
 	 </style>
