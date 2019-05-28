<template>
  <v-app :dark="nightMode">

    <tool-bar></tool-bar>
    
    <sidebar></sidebar>

    
    <!-- the snackbar or toast section for displaying errors and success messages -->
    <v-snackbar
    
    :right="$vuetify.breakpoint.lgAndUp"
    v-model="snackBarActive"
    :timeout="$store.state.common.snackBar.timeout"
    :bottom="$vuetify.breakpoint.mdAndDown"
      :top="$vuetify.breakpoint.lgAndUp"
      :color="$store.state.common.snackBar.color"
      >
    
        {{ $store.state.common.snackBar.msg }}
        <v-btn
            color="$store.state.common.snackBar.color"
            flat
            @click="snackBarActive = false"
        >
            Close
        </v-btn>
   </v-snackbar>


    <v-content>
 <!--      <v-container fluid flat> -->
        <!-- <call-for-submission/> -->
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
import CallForSubmission from '~/components/CallForSubmission.vue'

export default {
  data() {
    return {
      
    }
  },

  computed: {
        
        nightMode(){

             return this.$store.state.common.skin.nightMode
        },

        snackBarActive: {

             get () {
                 return this.$store.state.common.snackBar.show
            },

            set (val) {
                this.$store.dispatch('common/updateSnackBar',{ show : val})
            }

           
        }
  },

  components: { AppFooter, sidebar, ToolBar, CallForSubmission }
}
</script>
