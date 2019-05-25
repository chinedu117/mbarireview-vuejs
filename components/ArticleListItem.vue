
 <template>
    <v-card>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="200px"
        >
        </v-img>

        <v-card-title primary-title>
          <div>
            <div class="headline">{{ item.title }}</div>
            <span class="grey--text"> by {{ item.author.name }}</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat>Share</v-btn>
          <v-btn flat color="purple">Explore</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text v-show="show">
            {{ item.intro_text }}
          </v-card-text>
        </v-slide-y-transition>
    </v-card>

 </template>
 <script>
    export default {
      
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
      }
    }
 </script>

 <style>

 </style>
