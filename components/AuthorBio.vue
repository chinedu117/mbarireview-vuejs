<template>
  <section> 
	 <div class="author-bio">
	     <v-avatar
                size="36px"
                class="author-avatar"
              >
            <img
              v-if="true"
              src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
              alt="Avatar"
            >
            <v-icon
              v-else
              v-text="user"
            ></v-icon>
          </v-avatar>

	  <div class="author-info">
	  	  <h3> Emeka Obi</h3>
	  	  <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti voluptatibus accusantium quaerat quia id, accusamus sapiente iusto provident? Eum voluptate porro quod officiis tenetur tempora debitis voluptatibus modi iusto dicta.</span>
	  	  </p>
	  	  <v-btn outline>Follow</v-btn>
	  </div>
    </div>
  </section>
</template>
<script>
export default {

   data() {
      return {

      }
   },
   computed: {
        
    	author(){
    		 
    		 return this.$store.state.articles.author
    	},
   },

   methods: {

   }
}
</script>

<style>
   .author-bio {

   }
   .author-info {

   }
   .author-avatar {

   }
</style>

