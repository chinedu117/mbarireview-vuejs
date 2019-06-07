<template>
  <div>
    <form method="post" enctype="multipart/form-data" @submit.prevent="submit" files="true">
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
              <v-btn @click="$router.go(-1)">Back</v-btn>

             <v-btn @click="submit">Submit</v-btn>
      
            <v-btn @click="withdraw">Withdraw</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
   
   <div class="card" style="width:500px; margin: 0 auto">
     <v-container>
      <v-layout row wrap>
        <v-flex md12 xs12> 
                 <v-select 
                     
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
                    
                     <v-btn  
                   
                      @click="download(viewable.slug)"
                      >
                      DOWNLOAD
                    </v-btn>
                     <iframe id="download-frame" style="display:none"></iframe>
               </v-flex>
             </v-layout>
           </v-container>

            
   </div>
   </form>
  </div>
</template>
<script>
// import AuthorBioEdit from '~/components/dashboard/AuthorBioEdit.vue'
import { DASHBOARD_SUBMISSION_DOWNLOAD_URL } from '~/api'
export default {

// middleware: ['middleware'],

layout: 'default',


// components: { AuthorBioEdit }, 
 data(){
    return {
        
        submission: {
                     category_id:null,
                     title: "",
                     fulltext: "Hey",
                     intro_text: "Hey",
                     images: "",
                     attachment: null
                    },

        editing: {
            category: false,
            title: false,
            intro_text: false,
            fulltext: false,
            images: false

        },
       fileUrl: null,
       fileBlob: null
    }
 },


async fetch({store,params}){
   
     await store.dispatch("dashboard/retrieveSubmittableCategories")
     if(params.submission !== 'new'){
         
        await store.dispatch("dashboard/retrieveSubmission",{slug: params.submission})
        
     }
    
},


computed:{
   
   viewable(){
        
        return this.$store.getters['dashboard/getSubmission']

   },

   category(){
       
       if(this.submission.category_id !== null)
       {
          let category = this.$store.getters['dashboard/getCategories'].find((item) => {
            return item.id == this.submission.category_id
        })

         return category.title
       }

       return  "Select Category"
        
   },

    categories(){
       return this.$store.getters['dashboard/getCategories']
    },

    edition(){

        return this.$store.getters['nextEdition']
    },

    // today() {
        

    //     return "Today"
    // }

    // submission(){
         
    //      let subm = this.$store.getters['dashboard/getSubmission']
    //      if (subm) {
    //           return subm
    //      }else{

    //         return {
    //              category_id: null,
    //              title: "",
    //              fulltext: `Click here to Write the full story`,
    //              intro_text: "Click here to Write the summary",
    //              images: ""
    //             }
    //      }
        

      
    // }

},
methods:{
      
      download(slug){
            
            // this.$store.dispatch("dashboard/downloadSubmission",slug)
            document.getElementById("download-frame").src = DASHBOARD_SUBMISSION_DOWNLOAD_URL(slug)
      },

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
                 console.log(key,value)
                 data.append(key,value)

          }


          this.$store.dispatch('dashboard/makeSubmission',data)
            .then((response) => {

                slug  =  response.data.slug

                this.editingValues(true)

                this.$router.push({path: `/dashboard/${authorSlug}/${slug}`})
            })
           

          

      },
      withdraw(){
        // alert("Withdrawing submission:  Not Implemented")
        var slug = this.$route.params.submission
        if(confirm("This will delete this submission irreversibly. Do you want to continue ?")){

             this.$store.dispatch("dashboard/withdrawSubmission",{slug: slug})
        }
        
    },

      discard(){
          this.editingValues(false)
          let authorslug = this.$route.params.author
          this.$router.push({path: `/dashboard/${authorslug}`})
      },

      submit(){
          this.editingValues(false)
          let authorslug = this.$route.params.author

          let data = new FormData()
          

          for (const [key, value ] of Object.entries(this.submission)) {
                 console.log(key,value)
                 data.append(key,value)

          }
          this.$store.dispatch('dashboard/makeSubmission',data)

          this.$router.push({path: `/dashboard/${authorslug}`})

      },

       editingValues(val){
           this.editing.category = val
           this.editing.title = val
           this.editing.intro_text = val
           this.editing.fulltext = val
           this.editing.images = val
       }

},

}
</script>

<style lang="stylus" scoped>

.section-across 
  margin: 0 -200px
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
