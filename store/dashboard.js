  import * as API  from '~/api'
//store state
export const state = () => {

  return {
          submissions: [],
          
      }
}

//store mutations
export const mutations = {
   

   updateSubmissionList (state, value) {
           state.submissions =  value
         },
    
}

//store getters
export const getters = {

       

 }

//store actions
export const actions = {
    
     
     async retrieveSubmission({commit,dispatch}){
          
             let { data } = await this.$axios.get(API.DASHBOARD_SUBMISSION_HISTORY_URL)

              commit('updateSubmissionList',data)
                   
      },
}
