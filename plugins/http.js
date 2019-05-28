export default ({store.axios}) => {
 
    if(store.state.auth.token)
    {
      axios.interceptors.request.eject() //clears previoius token
      axios.interceptors.request.use(function(config){
        const token = store.state.auth.token
        config.headers.Authorization = token ? token : ''
        return config
      })
    }
      
    // Intercept the response and refresh (one retry) if invalid token.
    axios.interceptors.response.use(function (response) {
        
        // console.log('intercepted');
        if(response.data.message !== undefined && response.data.message !== '')
        {
          store.dispatch('common/updateSnackBar',{
            show: true,
            msg: response.data.message,
            color: ''
            })
        }
        return Promise.resolve(response)
  
        
      }, function (error) {
         //reply to errors due to network problems
        if(error.request){
            store.dispatch('common/updateSnackBar',{
                show: true,
                msg: 'Network Error: Please check your network',
                color: 'red'
                })
            
        }

        if(error.response){
            store.dispatch('common/updateSnackBar',{
             show: true,
             msg: error.response.data.message,
             color: ''
             })
             
        }
        
        return Promise.reject(error)
      })
  
}

