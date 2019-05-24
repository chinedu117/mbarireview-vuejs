<template>
     <v-toolbar
      :clipped-left="true"
      fixed
      app
    >
       
      <logo/>
      
      <v-toolbar-side-icon @click="toggleSideBar" />
 
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>{{ `chevron_${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>web</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>remove</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>menu</v-icon>
      </v-btn>
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

                         sidebar.visible = false
                  }

                  this.$store.dispatch('common/updateSidebar',sidebar)
              }
         }
      }
</script>

   <style>

   </style>