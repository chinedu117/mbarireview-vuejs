
 <template>
  	<v-card>	
        <v-card-title>	
            {{ item.title}}
        </v-card-title>
        <v-card-text>	
           {{ item.intro_text }}
        </v-card-text>
 	</v-card>
   
 </template>
 <script>
    export default {

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
