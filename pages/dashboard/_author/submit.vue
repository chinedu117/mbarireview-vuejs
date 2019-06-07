<template>
  <div>
    <form method="post" enctype="multipart/form-data" @submit.prevent="save" files="true">
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
   
       <v-card width="$vuetify.breakpoint.mdAndUp ? '80%' : '100%'" class="mx-auto" style="border-radius: 5px">

           <v-container class="teal">
            <v-layout row wrap>
            <v-flex md12 xs12>
                  <h3 class="headline white--text">Add Your Story</h3>
               </v-flex>
             </v-layout>
           </v-container>

         <v-container>
          <v-layout row wrap>
            <v-flex md12 xs12> 
                     <v-select 
                          outline
                          v-model="submission.category_id" 
                           placeholder="Select Category"
                          :label="category.title"
                         
                          :items="categories"
                          item-value="id"
                          item-text="title"
                          :error-messages="serverErrors.category_id ? serverErrors.category_id : errors.collect('category_id')"
                          v-validate.disable="'required'"
                          data-vv-name="Category"
                          ></v-select> 
                  
                   </v-flex>
                 </v-layout>
               
                 <v-layout>  
                   <v-flex md12 xs12> 
                       <v-text-field 
                     
                        placeholder="Enter Title"
                        v-model="submission.title" 
                        outline size="24px"  
                        :error-messages="serverErrors.title ? serverErrors.title : errors.collect('title')"
                          v-validate.disable="'required'"
                          data-vv-name="Title"
                        ></v-text-field>
                    

                       </v-flex>
                 </v-layout>

                 <v-layout> 
                   <v-flex md12 xs12> 

                        <input  
                        type="file" 
                        class="upload-button" 
                        name="upload" 
                        id="upload" 
                        accept="application/pdf" 
                        @change="uploadFile"
                        :error-messages="serverErrors.attachment ? serverErrors.attachment : errors.collect('attachment')"
                          v-validate.disable="'required'"
                          data-vv-name="Attachment"
                        >
                        
                   </v-flex>
                 </v-layout>
               </v-container>

               <v-card-actions>
                 <v-btn @click="discard" color="red darken-4" class="white--text">BACK</v-btn>

                 <v-btn @click="save" color="green darken-4" class="white--text">Submit</v-btn>
               </v-card-actions>
             </v-card>

       </v-flex>
     </v-layout>
    </v-container>
   </form>
  </div>
</template>
<script>
// import AuthorBioEdit from '~/components/dashboard/AuthorBioEdit.vue'
import handleRequest from '~/utils/RequestHandler.js'
import { DASHBOARD_SUBMISSION_DOWNLOAD_URL } from '~/api'
export default {

// middleware: ['middleware'],

layout: 'default',
 
 data(){
    return {
        
        submission: {
                     category_id:null,
                     title: "",
                     fulltext: "NULL",
                     intro_text: "NULL",
                     images: "",
                     attachment: null
                    },

       fileUrl: null,
       fileBlob: null
    }
 },


async fetch({store,params}){
   
     await store.dispatch("dashboard/retrieveSubmittableCategories")
    
    
},

mixins: [ handleRequest ],

computed:{
   


    categories(){
       return this.$store.getters['dashboard/getCategories']
    },

    category(){

      return "sads"
    }

  

},
methods:{
     
      uploadFile(e){
        const files = e.target.files
         if(files[0] !== undefined) {
           
           var mime = files[0].type
           // console.log(files[0])
           const fr = new FileReader ()
           fr.readAsDataURL(files[0])
        
             fr.addEventListener('load', () => {
                  this.fileUrl = fr.result
                   // document.getElementById("download-frame").src = fr.result
                  // console.log(fr.result)

                  this.submission.attachment = this.convertFileToBlob(fr.result,mime)

                  // console.log(this.fileBlob)
               })
           }
      },
     
      convertFileToBlob(fileBase64,mimeType){

        
       let base64FileContent  =  fileBase64.replace(/^data:application\/(pdf|doc|docx);base64,/ ,"")
       let mime = mimeType || ''
       let sliceSize = 1024
      // console.log(base64FileContent)
       let byteChars = window.atob(base64FileContent)
       // console.log(byteChars)
       let byteArrays  = []

       for( var offset = 0, len = byteChars.length; offset < len; offset += sliceSize){
            var slice = byteChars.slice(offset, offset + sliceSize)

            var byteNumbers = new Array(slice.length)
            for( var i = 0; i < slice.length; i++){
                byteNumbers[i] = slice.charCodeAt(i)
            }
            var byteArray = new Uint8Array(byteNumbers)
            
            byteArrays.push(byteArray)
       }
           
           
            return new Blob(byteArrays, {type: mime})
         
    },


      save(){
          
          let slug = this.$route.params.submission
          let authorSlug = this.$route.params.author
          
          let data = new FormData()
          

          for (const [key, value ] of Object.entries(this.submission)) {
                
                 data.append(key,value)

          }

          
           const sm = this

          this.$validator.validateAll().then(result => {
              if (result) {
               //submit only if all the from is valid
                  sm.mixin_handleRequest(sm.$store.dispatch('dashboard/makeSubmission',data)
                       .then((response) => {
               
                           sm.$store.dispatch("common/updateSnackBar",{show: true, msg: "Submission Successful",color: 'green darken-4'})

                       }))
               
               }
            });
          
           

          

      },
      

      discard(){
         
          let authorslug = this.$route.params.author
          this.$router.push({path: `/dashboard/${authorslug}`})
      },


      

},

}
</script>
<style>
.upload-button {

}
</style>
