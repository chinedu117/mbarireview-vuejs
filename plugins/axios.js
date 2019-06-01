export default function ({$axios, store}){
	
	if(store.state.auth.token)
    {
       $axios.onRequest((config) => {
            const token = store.state.auth.token
           config.headers.common['Authorization'] = token 
	    })
    }


    // Intercept the response and refresh (one retry) if invalid token.
        $axios.onResponse(function (response) {
            
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
      
            
          })

        $axios.onError(function (error) {
            
          
            if(error.request){
                store.dispatch('common/updateSnackBar',{
                    show: true,
                    msg: 'Network Error: Please check your network',
                    color: 'red'
                    })
                
            }

          if(error.response.data.message !== undefined && error.response.data.message !== '')
            {
                 //reply to errors due to network problems

                if(error.response){
                    store.dispatch('common/updateSnackBar',{
                     show: true,
                     msg: error.response.data.message,
                     color: ''
                     })
                     
                }
            }

            return Promise.reject(error)
            
          })

	
}