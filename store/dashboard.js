  import * as API  from '~/api'
//store state
export const state = () => {

  return {
          submissions: [],
          categories: [],
          submission: null,
      }
}

//store mutations
export const mutations = {
   

   updateSubmissionList (state, value) {
           state.submissions =  value
         },


    updateSubmittableCategories (state, value) {
            state.categories =  value
          },

     updateSubmission (state, value) {
            state.submission = null
            state.submission =  value
          },


    withdrawSubmission (state, value) {
            let index = state.submissions.findIndex((item) => {

                 return item.slug == value
            }) 
            
            state.submissions.splice(index)

        },
    
}

//store getters
export const getters = {

       
        getSubmissions(state) {
       
                   return state.submissions
       },


        getCategories(state) {
       
                   return state.categories
       },


        getSubmission(state) {
       
                return state.submission
       },



 }

//store actions
export const actions = {
    
     
     async retrieveSubmissions({commit,dispatch}){
          
             let response = await this.$axios.get(API.DASHBOARD_SUBMISSION_HISTORY_URL)

              commit('updateSubmissionList',response.data)

              return response
                   
      },


      async   withdrawSubmission({commit,dispatch},params){
            

            let response = await this.$axios.post(API.DASHBOARD_SUBMISSION_WITHDRAW_URL(params.slug))

            if(response.status == 200){

                 //withdrawal success
                 commit('withdrawSubmission',params.slug)

            }

      
       },

       
       async   retrieveSubmission({commit,dispatch},params){
          
            await this.$axios.get(API.DASHBOARD_SUBMISSION_DETAIL_URL(params.slug))
            commit('updateSubmission',data)
      
       },


      async makeSubmission({commit,dispatch},data){
              
            await this.$axios.post(API.DASHBOARD_SUBMISSION_SUBMIT_URL,data)
                    
       },



       async retrieveSubmittableCategories({commit,dispatch}){
               
               if (state.categories.length > 0) {
                   
                   let {data } = await this.$axios.get(API.CATEGORY_LIST_SUBMITTABLE_URL)

                   commit("updateSubmittableCategories",data)

               }
               
                     
        },

}
