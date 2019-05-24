<template>
  <v-app :dark="nightMode">

    <tool-bar></tool-bar>
    
    <sidebar></sidebar>



    <v-content>
      <!-- <v-container> -->
        <nuxt />
      <!-- </v-container> -->
    </v-content>
   <app-footer></app-footer>


  </v-app>
</template>

<script>
import AppFooter from '~/components/AppFooter.vue'
import sidebar from '~/components/SideBar.vue'
import ToolBar from '~/components/ToolBar.vue'


export default {
  data() {
    return {
      
    }
  },

  computed: {
        
        nightMode(){

             return this.$store.state.common.skin.nightMode
        }
  },

  components: { AppFooter, sidebar, ToolBar }
}
</script>
