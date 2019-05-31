<template>
   <v-card class="list-item">
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
         <v-btn flat class="ml-2" v-if="!show" @click="read(item.slug)" outline>READ</v-btn>
          <!-- <v-btn flat color="purple">Explore</v-btn> -->
          <v-spacer></v-spacer>
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text v-show="show">
            <p>{{ item.intro_text }}</p>
            <v-btn flat style="margin-left: -2px" @click="read(item.slug)" outline>MORE</v-btn>
          </v-card-text>

        </v-slide-y-transition>
    </v-card>
 </template>
 <script>
    export default {
      name: 'article-list-item',
      data(){
         return {
            show: false
         }
      },
      props: {
      	 item: {
      	 	 type: Object,
      	 	 required: true
      	 }
      },

      methods: {
        
         read(slug){

             this.$router.push({path: `/${slug}`})
         },

         }
      }
 
 </script>

<style type="text/css">
.list-item {
     margin-bottom : 15px;
  }

@media (min-width: 900px) {
    
    .list-item {
      flex-basis: 30%;
      margin: auto;
      margin-bottom : 15px;
      border-radius: 5px;
    }
}
 </style>
