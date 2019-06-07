<template>
    <v-container>
      <v-layout row wrap>
      
        <v-flex md12 xs12> 
                <v-card flat  justify-center>
                  <v-container>
                    <v-layout grid-list-xs wrap>
                      <!-- <v-flex xs4 md4>
                        <div style="display:flex; justify-content: center">
                          <v-avatar
                               
                               :size="$vuetify.breakpoint.mdAndUp ? '150px' : '80px' "
                               class="mt-2 mx-auto"
                              >
                              <v-img
                              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                             
                              aspect-ratio="1"
                              > </v-img>
                             </v-avatar>
                          </div>
                         </v-flex> -->
                         <v-flex md12 xs12>
                           <v-card-text>
                            <h3 class="headline"> Emeka Obi</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente officia dignissimos deleniti vel distinctio neque, atque, cum excepturi sit explicabo harum, amet cupiditate minus ad labore ea tempore nisi quod voluptatem unde maxime. 
                         </p>
                           </v-card-text>
                       </v-flex>
                      <!--  <v-flex xs12>
                          <div style="display:flex; justify-content: flex-end">
                          <v-btn outline small class="mt-2">Follow</v-btn>
                            
                          </div>
                       </v-flex> -->
                 </v-layout>
               </v-container>
                </v-card>
        </v-flex>
        
      </v-layout>
     </v-container>
</template>
<script>
export default {
   name: 'author-bio',
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

