<template>
  <div>
        
        <div class="welcome-banner" :style=" $store.state.common.skin.nightMode ? 'background-color:#29272d' : 'background-color:#f9f9f9' ">
           
           <div class="welcome-content">
               <logo style="width: 300px; height: 300px; margin-left: 20px" v-if="$vuetify.breakpoint.mdAndUp"/>
               <div class="welcome-message">
                    <h3>Mbari Reviews</h3>
                   <div> <p>Remembering and Celebrating<br>
                         Who we are, our origin and our values.<br>
                         Welcome to Mbari Reviews.<br>
                          </p>
                          <v-btn outline @click="createSubmission">WRITE YOUR OWN STORY</v-btn>
                   </div>
               </div>
               
           </div>
       </div>

       <!-- featured list -->

        <div class="list-display">

		         <v-card
		           class="list-item"
                   v-for="(item,index) in articles"
                    :key="index"
                    :item="item"
                    >
		        <v-img
		          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
		          height="200px"
		        >
		        </v-img>

		        <v-card-title primary-title>
		          <div>
		          	<span class="grey--text font-weight-bold">{{ item.category.title }} In:{{item.edition.title}}</span>
		            <div class="headline">{{ item.title }}</div>
		            <span class="grey--text"> by {{ item.author.name }}</span>
		          </div>
		        </v-card-title>

		        <v-card-actions>
		         <v-btn flat class="ml-2" v-if="!show" @click="read" outline>READ</v-btn>
		          <!-- <v-btn flat color="purple">Explore</v-btn> -->
		          <v-spacer></v-spacer>
		          <v-btn icon @click="show = !show">
		            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
		          </v-btn>
		        </v-card-actions>

		        <v-slide-y-transition>
		          <v-card-text v-show="show">
		            <p>{{ item.intro_text }}</p>
                <v-btn flat style="margin-left: -2px" @click="read" outline>MORE</v-btn>
		          </v-card-text>

		        </v-slide-y-transition>
		    </v-card>

     </div>

</div>
</template>
<script type="text/javascript">
 // import ArticleList from '~/components/ArticleList.vue'
   // import WelcomeBanner from '~/components/WelcomeBanner.vue'
import Logo from '~/components/Logo.vue'
export default {
   
   data(){
      return {
         show: false
      }
   },
   components: { Logo},  // ArticleList, WelcomeBanner

    middleware: ['default-sidebar-items'],



    layout: 'default',
  

   // components: { }, 
   
   // async fetch({store,params}){


   //      // await store.dispatch("articles/retrieveFeaturedArticles")
            
   // },

   computed:{
       
       articles(){
            
            // return this.$store.getters['articles/featuredArticles']

            return [{ 
                      title: "Top western road trips",
                      intro_text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
                       author: {
                         name: "Emeka Obi"
                       },

                       edition: {
                         title: "The Nature"
                       },



                       category: {
                         title: 'Fiction',
                       },

                       edition: {
                         title: 'The Earth',
                       },

                       },

                       { 
                      title: "Top western road trips",
                      intro_text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
                       author: {
                         name: "Emeka Obi"
                       },

                       edition: {
                         title: "The Nature"
                       },

                       category: {
                         title: 'Fiction',
                       },

                       edition: {
                         title: 'The Earth',
                       },

                       },

                       { 
                      title: "Top western road trips",
                      intro_text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
                       author: {
                         name: "Emeka Obi"
                       },

                       edition: {
                         title: "The Nature"
                       },

                       category: {
                         title: 'Fiction',
                       },

                       edition: {
                         title: 'The Earth',
                       },
                       }, 

                       { 
                      title: "Top western road trips",
                      intro_text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
                       author: {
                         name: "Emeka Obi"
                       },

                       edition: {
                         title: "The Nature"
                       },

                       category: {
                         title: 'Fiction',
                       },

                       edition: {
                         title: 'The Earth',
                       },

                       },

                       { 
                      title: "Top western road trips",
                      intro_text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
                       author: {
                         name: "Emeka Obi"
                       },

                       edition: {
                         title: "The Nature"
                       },

                       category: {
                         title: 'Fiction',
                       },

                       edition: {
                         title: 'The Earth',
                       },
                       }, 

                       { 
                      title: "Top western road trips",
                      intro_text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
                       author: {
                         name: "Emeka Obi"
                       },

                       edition: {
                         title: "The Nature"
                       },

                       category: {
                         title: 'Fiction',
                       },

                       edition: {
                         title: 'The Earth',
                       },

                       },

                       { 
                      title: "Top western road trips",
                      intro_text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
                       author: {
                         name: "Emeka Obi"
                       },

                       edition: {
                         title: "The Nature"
                       },

                       category: {
                         title: 'Fiction',
                       },

                       edition: {
                         title: 'The Earth',
                       },
                       }, 

                       { 
                      title: "Top western road trips",
                      intro_text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
                       author: {
                         name: "Emeka Obi"
                       },

                       edition: {
                         title: "The Nature"
                       },

                       category: {
                         title: 'Fiction',
                       },

                       edition: {
                         title: 'The Earth',
                       },

                       },

                       { 
                      title: "Top western road trips",
                      intro_text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
                       author: {
                         name: "Emeka Obi"
                       },

                       edition: {
                         title: "The Nature"
                       },

                       category: {
                         title: 'Fiction',
                       },

                       edition: {
                         title: 'The Earth',
                       },
                       }, 

                       { 
                      title: "Top western road trips",
                      intro_text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
                       author: {
                         name: "Emeka Obi"
                       },

                       edition: {
                         title: "The Nature"
                       },

                       category: {
                         title: 'Fiction',
                       },

                       edition: {
                         title: 'The Earth',
                       },

                       },

                       { 
                      title: "Top western road trips",
                      intro_text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
                       author: {
                         name: "Emeka Obi"
                       },

                       edition: {
                         title: "The Nature"
                       },

                       category: {
                         title: 'Fiction',
                       },

                       edition: {
                         title: 'The Earth',
                       },
                       }, 

                       { 
                      title: "Top western road trips",
                      intro_text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
                       author: {
                         name: "Emeka Obi"
                       },

                       edition: {
                         title: "The Nature"
                       },

                       category: {
                         title: 'Fiction',
                       },

                       edition: {
                         title: 'The Earth',
                       },

                       },

                       { 
                      title: "Top western road trips",
                      intro_text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
                       author: {
                         name: "Emeka Obi"
                       },

                       edition: {
                         title: "The Nature"
                       },

                       category: {
                         title: 'Fiction',
                       },

                       edition: {
                         title: 'The Earth',
                       },
                       }, 

            ]
       }
   },
    methods:{
         
         read(){

             this.$router.push({path: '/template/article'})
         },

         createSubmission(){
             this.$router.push({path: '/template/submission-create'})
             
         }     
 
    },

}
</script>

<style type="text/css">

.welcome-banner {
   display: flex;
   justify-content: center;
   max-width: 100%;
   position: relative;
   background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%239C92AC' fill-opacity='0.41'%3E%3Cpath fill-rule='evenodd' d='M11 0l5 20H6l5-20zm42 31a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM0 72h40v4H0v-4zm0-8h31v4H0v-4zm20-16h20v4H20v-4zM0 56h40v4H0v-4zm63-25a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM53 41a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-30 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-28-8a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zM56 5a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zm-3 46a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM21 0l5 20H16l5-20zm43 64v-4h-4v4h-4v4h4v4h4v-4h4v-4h-4zM36 13h4v4h-4v-4zm4 4h4v4h-4v-4zm-4 4h4v4h-4v-4zm8-8h4v4h-4v-4z'/%3E%3C/g%3E%3C/svg%3E");
   background-repeat: repeat;
   padding: 20px;
 
}


.welcome-content {
   margin:auto;
   display: flex;
}

.welcome-message {
   flex: 1;
 
}

.welcome-message h3 {
    font-size: 20px;
    font-weight: 700;
}

.welcome-message div {
    font-size: 18px;
   
}

@media (min-width: 900px) {
 .welcome-banner {
   width: 100%;
   height: 70vh;

}

.welcome-message h3 {
    font-size: 36px;
    font-weight: 700;
}

.welcome-message div {
    font-size: 24px;
   
}
}


 .list-display {
     margin:auto;
     justify-content: space-between;
     flex-wrap: wrap;
     width: 90%;
     margin-top: 10px;
  }
  .list-item {
     margin-bottom : 15px;

  }

   @media (min-width: 900px) {
    .list-display {
      display: flex;
      width: 80%;
      padding: 20px;
    }
    .list-item {
      flex-basis: 30%;
      margin: auto;
       margin-bottom : 15px;
       border-radius: 5px;
    }
    }

</style>

