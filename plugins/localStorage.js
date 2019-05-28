import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
  // window.onNuxtReady(() => {
    // console.log("local storage Plugin called")
    createPersistedState({
        key: 'mbari',
        paths: [
                'auth.user',
                'auth.token',
        		
        		]
      
    })(store)
  // })
}