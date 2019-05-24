<template>
	<v-navigation-drawer
      v-model="visible"
      :mini-variant="miniVariant"
      :clipped="clipped"
      :fixed="fixed"
      app
    >
      <v-list>
        <v-list-tile @click="toggleNightMode">
          <v-list-tile-action>
            <v-icon>web</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title >
            	{{ !isNightMode ? "Night Mode" : " Day Mode"}}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>


        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>


        


      </v-list>
    </v-navigation-drawer>
</template>

<script type="text/javascript">
	
	export default {
         name: 'sidebar',
		 data(){

		 	return {
		 	    clipped: true,
		     }
		},

		computed: {

			visible: {
        get(){
				 return this.$store.state.common.sidebar.visible
        },
        set(val){
            
           this.$store.dispatch('common/updateSidebar',{visible: val })
        }
			},

			miniVariant(){

                return this.$store.state.common.sidebar.mini
			},

			fixed(){
                 
                 // return true
				 return this.$store.state.common.sidebar.fixed
			},

			isNightMode(){

				 return this.$store.state.common.skin.nightMode

			},

			items(){

				return this.$store.state.common.sidebar.items
			} 

           
		 	
	   },

	   methods: {

	   	  toggleNightMode(){
                  
	   	  	    this.$store.dispatch('common/toggleSkin')
	   	  },

         
	   }


		}
</script>