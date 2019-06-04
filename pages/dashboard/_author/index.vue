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
            <div v-if="submissions.length > 0"> 
                  <v-container

                            v-for="(item,index) in submissions"
                               @click="edit(item.slug)"
                               class="hover"
                               :key="index"
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
                       <v-btn small @click.prevent="withdraw(item.slug)">Withdraw</v-btn>
                    </v-flex>
                  </v-layout> 
                  </v-container>
                  </div>
                  <v-container v-else>
                     <v-layout>
                         <v-flex xs12> 
                        <h3> Welcome, Write your story. Click the Button below</h3>
                               <v-btn @click="write">Click To Begin</v-btn>
                         </v-flex>
                   </v-layout>
                  </v-container>
                  
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
     // total: 8,
     // currentPage: 1,
        
  }
},
middleware: ['default-sidebar-items'],
layout: 'default',


async fetch({store,params}){
     
    await store.dispatch("auth/getMyProfile")

    await store.dispatch("dashboard/retrieveSubmissions")
        
},

computed:{
   
   submissions(){

         return this.$store.getters['dashboard/getSubmissions']
   }
},

methods:{
    
    withdraw(slug){
        // alert("Withdrawing submission:  Not Implemented")
        if(confirm("This will delete this submission irreversibly. Do you want to continue ?")){

             this.$store.dispatch("dashboard/withdrawSubmission",{slug: slug})
        }
        
    },

    write(){
           let author = this.$route.params.author
          
          this.$router.push({path: `/dashboard/${author}/new`})
    },

    edit(slug){
           
           let author = this.$route.params.author
           this.$router.push({path: `/dashboard/${author}/${slug}`})
    }

},

}
</script>

<style lang="stylus">
.hover:hover
  background: #ddd
</style>
