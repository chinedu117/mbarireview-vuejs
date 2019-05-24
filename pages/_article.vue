<template>
   <div>
   
	  <v-container>
	  	<v-layout row wrap>
	  	
	  		<v-flex md12 xs12> 
                <header>
                	<h1 class="display-2 mb-2"> This is the title</h1>

                </header>
	            <article>
	                
	            	<p>
	                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente officia dignissimos deleniti vel distinctio neque, atque, cum excepturi sit explicabo harum, amet cupiditate minus ad labore ea tempore nisi quod voluptatem unde maxime. Nesciunt minus, facere cumque repudiandae, molestiae adipisci culpa, sit sequi quos maxime error consectetur eveniet at asperiores et hic quibusdam corporis voluptas.
	               </p>

	               <h1 class="display-2 mb-2"> This is the title</h1>
	            	<p>
	                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente officia dignissimos deleniti vel distinctio neque, atque, cum excepturi sit explicabo harum, amet cupiditate minus ad labore ea tempore nisi quod voluptatem unde maxime. Nesciunt minus, facere cumque repudiandae, molestiae adipisci culpa, sit sequi quos maxime error consectetur eveniet at asperiores et hic quibusdam corporis voluptas.
	               </p>

	               <h1 class="display-2 mb-2"> This is the title</h1>
	            	<p>
	                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente officia dignissimos deleniti vel distinctio neque, atque, cum excepturi sit explicabo harum, amet cupiditate minus ad labore ea tempore nisi quod voluptatem unde maxime. Nesciunt minus, facere cumque repudiandae, molestiae adipisci culpa, sit sequi quos maxime error consectetur eveniet at asperiores et hic quibusdam corporis voluptas.
	               </p>

	               <h1 class="display-2 mb-2"> This is the title</h1>
	            	<p>
	                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente officia dignissimos deleniti vel distinctio neque, atque, cum excepturi sit explicabo harum, amet cupiditate minus ad labore ea tempore nisi quod voluptatem unde maxime. Nesciunt minus, facere cumque repudiandae, molestiae adipisci culpa, sit sequi quos maxime error consectetur eveniet at asperiores et hic quibusdam corporis voluptas.
	               </p>

	               <h1 class="display-2 mb-2"> This is the title</h1>
	            	<p>
	                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente officia dignissimos deleniti vel distinctio neque, atque, cum excepturi sit explicabo harum, amet cupiditate minus ad labore ea tempore nisi quod voluptatem unde maxime. Nesciunt minus, facere cumque repudiandae, molestiae adipisci culpa, sit sequi quos maxime error consectetur eveniet at asperiores et hic quibusdam corporis voluptas.
	               </p>
                 


	              <div class="author">
	  				  <div class="author-img">A</div>
	  				   <div class="author-name">Emeka Obi</div>
                  
	  				  
	  			 </div>
	            </article>

	  		</v-flex>
	  		
	  	</v-layout>
	   </v-container>
  </div>
</template>
<script type="text/javascript">
	
	export default {
	  
	    // middleware: [],
	
	    layout: 'default',
	  
	
	   // components: { }, 
	
	 
	   asyncData(){
	
	     return { }
	   },
	   
	   // async fetch({store,params}){
	        
	   //      await store.dispatch("storeNamespace/storeAction")
	            
	   // },
	
	   // computed:{
	       
	   //     storeAction(){
	
	   //           return this.$store.getters['storeNamespace/storeGetter']
	   //     }
	   // },
	    methods:{
	        
	
	    },
	
	}
		
</script>
<style lang="stylus" scoped>

author
	display:flex

author-img 
	display:block
	border-radius: 50%
	width: 250px
	height: 250px
	background: grey
	padding: 10px

p
	line-height: 1.9
	font-size: 18px

article, header
	padding:25px 205px 50px 120px
header
	margin-bottom: 15px

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

</style>