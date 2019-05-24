<template>
	<div class="mb-paginate">
		 <v-btn small @click="prevPage"> &gte </v-btn>
          <ul v-for="pageNumber in totalPages">

          	  <li><v-btn small @click="getPage(pageNumber)">{{ pageNumber }}</v-btn></li>

          </ul>
		 <v-btn small @click="prevPage"> &gte </v-btn>

	</div>  
</template>
 <script>
    export default {
       name: 'list-paginate',
       data() {
          return {
            currentPage: this.laravel_paginate.current_page,
            totalPages: this.laravel_paginate.last_page,
            perPage: this.laravel_paginate.per_page,
            totalItems: perPage: this.laravel_paginate.total,
          }
       },
       
       props:{
       	  laravel_paginate: {
       	  	  type:Object,
       	  	  required:true
       	  }
       }

       methods: {
           	getPage(pageNumber = 1){
           		
           		 this.currentPage = pageNumber
           		 const currentPath = this.$route.path
           		 this.$route.push({path: currentPath, query: {page: pageNumber}})
           	},

       		nextPage(){
       			   
       			  var page = this.currentPage + 1;
       			  if( page < this.totalPages ){

                         this.getPage(page)
       			  }
       		},

   			prevPage(){
                     
                     var page = this.currentPage - 1;

                     if(page == 0)return
   				 
                      this.getPage(page)
       			 
   			},
       }
    }
 </script>

 <style scoped lang="stylus">
.mb-paginate
	display: flex
	flex-direction: row

 </style>
