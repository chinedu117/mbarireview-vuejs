<template>
  <div>
    <form method="post" enctype="multipart/form-data" @submit.prevent="submit" files="true">
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
                          @change="editing.category = false" 
                          :items="categories"
                          item-value="id"
                          item-text="title"
                          @blur="editing.category = false"
                          ></v-select> 
                  
                   </v-flex>
                 </v-layout>
               
                 <v-layout>  
                   <v-flex md12 xs12> 
                       <v-text-field 
                     
                        placeholder="Enter Title"
                        v-model="submission.title" 
                        outline size="24px"  
                        @blur="editing.title = false"
                        ></v-text-field>
                    

                       </v-flex>
                 </v-layout>

                 <v-layout> 
                   <v-flex md12 xs12> 

                        <input  
                        type="file" 
                        name="upload" 
                        id="upload" 
                        accept="application/pdf" 
                        @change="uploadFile"
                        >
                        
                   </v-flex>
                 </v-layout>
               </v-container>

               <v-card-actions>
                 <v-btn @click="discard">Discard</v-btn>

                 <v-btn primary @click="submit">Submit</v-btn>
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


computed:{
   


   	categories(){
   		 return this.$store.getters['dashboard/getCategories']
   	},

  

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


     		  this.$store.dispatch('dashboard/makeSubmission',data)
            .then((response) => {

                slug  =  response.data.slug

 

                this.$router.push({path: `/dashboard/${authorSlug}/${slug}`})
            })
           

          

     	},
      

     	discard(){
         
     		  let authorslug = this.$route.params.author
     		  this.$router.push({path: `/dashboard/${authorslug}`})
     	},


      

},

}
</script>
