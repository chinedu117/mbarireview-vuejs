<template>
 <v-container grid-list-md text-xs-left class="page-wrapper">
  <v-layout row wrap>
     <v-flex xs12>
       <v-card v-bind="card_style" >
                        <!-- header -->
                        <div class="pa-3 mb-3" height="250px" color="grey darken-3" width="100%" style="border-bottom:3px solid #dddd">
                                  <v-layout row wrap>
                                      <v-flex md12>
                                       <span class="headline">
                                          Profile
                                       </span>
                                     </v-flex>
                                     
                                 </v-layout>
                            </div>
                         <!-- header -end -->
                        
                         <v-card-text>
                            <v-text-field
                            outline
                            name="name"
                            label="Pen Name"
                            id="name"
						    :error-messages="serverErrors.name ? serverErrors.name : errors.collect('name')"
                            v-validate.disable="'required|alpha_spaces'"
                            data-vv-name="name"
                            v-model="profile.name"
                            required
                            @change="setAuthorHandle"
                            ></v-text-field>


                            <v-textarea
                                :counter="250"
                                outline
                                 data-vv-name="about"
                                name="about"
                                label="Bio"
                                v-model="profile.about"
                                v-validate.disable="{ required: true, max:250, regex: /^([0-9a-zA-Z\s',-.]+)$/}"
                               
                                :error-messages="serverErrors.about ? serverErrors.about : errors.collect('about')"
                              
                                id="about"
                            ></v-textarea>

                            <v-text-field
                            outline
                            name="contacts"
                            label="Follow Link"
                            id="contacts"
                           :error-messages="serverErrors.contacts ? serverErrors.contacts : errors.collect('contacts')"
                            v-validate.disable="'required'"
                            disabled
                            data-vv-name="contacts"
                            v-model="profile.contacts"
                            required
                             ></v-text-field>
    
                           
                            <v-text-field
                                outline
                                name="country"
                                label="Your country"
                                id="country"
                                v-validate.disable="'required'"
                                data-vv-name="country"
						         :error-messages="serverErrors.country ? serverErrors.country : errors.collect('country')"
                                disabled
                                v-model="profile.country"
                                required
                            ></v-text-field>

  
                            </v-card-text>
                         <v-card-actions>
                             <v-btn color="success" @click="submit" :disabled="loading" :loading="loading">Submit</v-btn>
                         </v-card-actions>

                         </v-card>
                       </v-flex>
                     </v-layout>
                   </v-container>
 </v-layout>    

</template>

<script>
import HandleRequest from '@/utils/RequestHandler.js'
export default {
  // middleware: ['authenticated','verified-email'],
  layout: 'dashboard',
  data(){
      return {

          profile:{

              country:"Nigeria",
              name: 'Mmaduagwu Malachy',
              bio: " Loves writing about life and nature",
              contacts: 'https://facebook.com/malachy-mmaduagwu',

          },

          
      }
  },


  mixins: [ HandleRequest],
  
    asyncData({store, params}){
          
          if(params.author.length > 1){
          //editing
                  response =  store.dispatch('auth/getMyProfile')
                  return { profile: response.data }
          
            }
          
            return { }
 
        
    },


  computed: {
  
        card_style(){
           
           let cardStyle = {
                             "style":"border-radius: 5px",
                              "class": "mx-auto"
                              }
                              
           if(this.$vuetify.breakpoint.mdAndUp){
             return Object.assign(cardStyle,{"width": "700px"})
           }else{
             return Object.assign(cardStyle,{"width": "auto"})
           }
         },

         profile: {
              get(){

              },
              set(val){

              }
         }
       },


  methods:{

    setAuthorHandle(){

       if(this.profile.name.length < 1)return

        let handle = this.profile.name.trim()
          if(handle.charAt(0) !== "@"){
             handle  = '@'.concat(handle) 
          }

        this.profile.slug = handle.replace(/\s/g,"_").toLowerCase()
    },


    submit(){

         this.$validator.validate().then(result => {
        			if (result) {
						    this._submitProfile()
       				 }
      			})
    },
    
    _submitProfile(){
         let profileData = new FormData()
         const profile = this.profile
         for(var k in profile){
             if(profile.hasOwnProperty(k)){
                 profileData.append(k,profile[k])
             }
         }
         this.mixin_handleRequest(this.$store.dispatch('auth/submitProfile',profileData)
                                .then(response => {
                                    let slug = this.$store.getters['auth/getUser'].slug
                                    this.$router.push({name: '/auth/profile'})
                            }))
    },


  }//end methods
}
</script>

<style>

</style>
