// Common State.
const defaults = {
    sidebar: {  
      visible: false,
      mini: false,
      fixed: false,
      items: [
              {
                icon: 'apps',
                title: 'Home',
                to: '/'
              },
              {
                icon: 'bubble_chart',
                title: 'Non-Fiction',
                to: '/category/fiction'
              },
               {
                icon: 'bubble_chart',
                title: 'Non-Fiction',
                to: '/category/non-fiction'
              },
               {
                icon: 'bubble_chart',
                title: 'Non-Fiction',
                to: '/inspire'
              }
            ],
    },
    
    loading: false,
    title: '',
    layout: 'DefaultLayout',
    dialog: {
      visible: false,
      text: ''
    },
    snackBar: {
      show: false,
      msg: '',
      timeout: 6000,
      color: ''
    },
    error: {
      code: null,
      level: null,
      message: ''
    },

    toolBar:{
      show: true,
      component:''
    },

    skin:{
      nightMode: false,
    },

    socialShare:{
      show: false,
      shareable_title: null,
      description: null,
      url: null,
      quote: " House for rent",
      hashtags: "Accomodation made Easy @ betaplace.com.ng",
      twitter_user: null,
      position_x:null,
      position_y: null,
    }
  }

export const state = () => {

  return Object.assign({}, defaults)
}

export const mutations = {

    toggleSkin(state){

          if(state.skin.nightMode){
                state.skin.nightMode = false
            }else{
                state.skin.nightMode = true

            }
    },
    updateSidebar (state, options) {
        state.sidebar = Object.assign({}, defaults.sidebar, options)
      },

      updateToolBar (state, options) {
        state.toolBar = Object.assign({}, defaults.toolBar, options)
      },
  
      updateTitle (state, title) {
        state.title = title
      },
  
      updateLayout (state, layout) {
        state.layout = layout
      },

      updateLoader(state,value){

        state.loading = value
      },
  
      updateDialog (state, options) {
        state.dialog = Object.assign({}, defaults.dialog, options)
      },
  
      updateSnackBar (state, options) {
        state.snackBar = Object.assign({}, defaults.snackBar, options)
      },

      updateSocialShare (state, options) {
        state.socialShare = Object.assign({}, defaults.socialShare, options)
      },

      updateSidebarItems (state, value) {
            
             
                 let newItems = value.items.map((item) =>{
                        item.sidebar_item_type = value.type
                        item.to = value.to + item.slug
                        item.icon = value.icon
                        return item
                 })
                  
                 var items = state.sidebar.items.concat(newItems)
               
                 state.sidebar = Object.assign({}, defaults.sidebar, {items: items })
               
             
        },


        removeSidebarItems (state, type) {
                
              state.sidebar.items = state.sidebar.items.filter((item) =>{

                   return item.sidebar_item_type != type
              })
      },
}

export const actions = {

      updateLoader({commit},value)
      {
        commit('updateLoader',value)
      },
 
      updateSocialShare ({ commit }, options) {
        // alert("social share called")
      if(options.show){
           var bodyRect = document.body.getBoundingClientRect()
         

          let pos_x = Math.floor(options.source_element.left - bodyRect.left)

          let pos_y = Math.floor(options.source_element.top - bodyRect.top)
                    // console.log(sourceEl,pos_x,pos_y)

          options.position_y = pos_y
          options.position_x = pos_x
         }
              
        commit('updateSocialShare', options)
      },
  
      updateSidebar ({ commit }, options) {
        commit('updateSidebar', options)
      },
      updateToolBar ({ commit }, options) {
        commit('updateToolBar', options)
      },
  
      updateTitle ({ commit }, title) {
        commit('updateTitle', title)
      },
  
      updateLayout ({ commit }, layout) {
        commit('updateLayout', layout)
      },
  
      updateDialog ({ commit }, options) {
        commit('updateDialog', options)
      },
  
      updateSnackBar ({ commit }, options) {
        commit('updateSnackBar', options)
      },

      toggleSkin({ commit ,state }){
             
             commit('toggleSkin')
            
      },


     updateSidebarItems({commit},params){
              
            commit('updateSidebarItems',params)  
                    
       },

    removeSidebarItems({commit},type){
              
              commmit('removeSidebarItems',type)  
                    
       },

}

