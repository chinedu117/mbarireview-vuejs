import Vue from 'vue'
import { CHECK_FOR_CALL_FOR_SUBMISSION } from '~/api'

export const strict = false

export const state = () => {
  return {
      submission: {
      	  calling: true,
      	  message: "We are accepting submission",
      	  title: 'Call for submission',
          edition_title: null
      }
  }
}
 
export const mutations = {

  checkForCallForSubmission (state, value) {
         state.submission =  value
       },
}

export const getters = {

    nextEdition(state) {

         return state.submission.edition_title
    }
}

export const actions = {

	 // async nuxtServerInit ({dispatch,commit},{ req, route, app, store }) {
	 	 
	 	          // await dispatch('checkForCallForSubmission')
	 	          //  await dispatch('articles/retrieveCategoryList')
     // },


     async checkForCallForSubmission({commit,dispatch}){

            const  {data} = await this.$axios.get(CHECK_FOR_CALL_FOR_SUBMISSION)

            commit('checkForCallForSubmission',data)

            // console.log(data)
                   
      },
}
