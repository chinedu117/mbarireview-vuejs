<template>
   <div>
   	<v-container fluid>
   	   <v-layout>
	  		<v-flex xs12>
	  			<v-card color="grey lighten-3" width="100%">
	  				 <h1 class="display-2 mb-2"> This is the title</h1>
	  			</v-card>
	  		</v-flex>
  	   </v-layout>
    </v-container>

  <v-container>
  	<v-layout row wrap>
  	
  		<v-flex md12 xs12> 
            <article>
                
            	<p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente officia dignissimos deleniti vel distinctio neque, atque, cum excepturi sit explicabo harum, amet cupiditate minus ad labore ea tempore nisi quod voluptatem unde maxime. Nesciunt minus, facere cumque repudiandae, molestiae adipisci culpa, sit sequi quos maxime error consectetur eveniet at asperiores et hic quibusdam corporis voluptas.
               </p>

               
            </article>

  		</v-flex>
  		
  	</v-layout>
   </v-container>

  <v-container>
  	<v-layout>

	  		<v-flex xs12>
	  			<v-card color="grey lighten-3" width="100%">
	  				Author Info
	  			</v-card>
	  		</v-flex>
 
  	</v-layout>
 </v-container>

  </div>
</template>
<script type="text/javascript">
	
	export default {
		
		data(){
			return {
				contact_email: process.env.CONTACT_EMAIL,
			}
		}
	}
</script>
<style lang="stylus" scoped>

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