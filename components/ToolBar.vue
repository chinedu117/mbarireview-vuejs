<template>
     <v-toolbar
      :clipped-left="true"
      fixed
      app
    >
       
      <logo/>
      
      
      <v-toolbar-title v-text="title" />
    
      <v-spacer />

      <v-toolbar-side-icon @click="toggleSideBar" />
      
    </v-toolbar>
   </template>


<script type="text/javascript">

import Logo from '~/components/Logo.vue'

      export default {
         name: 'tool-bar',

         data() {
            return {

               clipped: false,
               drawer: false,
               fixed: false,
               miniVariant: false,
               title: 'Mbari Review'

            }
         },

         components: { Logo },

         computed: {

         },

         methods: {

              toggleSideBar(){
                  
                  let sidebar = { visible: false}
                  if (!this.$store.state.common.sidebar.visible) {

                         sidebar.visible = true
                  }

                  this.$store.dispatch('common/updateSidebar',sidebar)
              }
         }
      }
</script>

   <style>

   </style>