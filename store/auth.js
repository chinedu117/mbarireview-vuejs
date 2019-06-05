import * as API from '@/api'


   export const state = () => {
     return {
        token: null, //JSON.parse(localStorage.getItem('betaplace')).auth.token || null,
        user: null, //Object.assign({},JSON.parse(localStorage.getItem('user'))) || null,
        profile: null,
     }
        
    }
  
   export const  mutations = {


        updateProfile (state, value) {
               if(value.profile){
                   state.profile =  value.profile

               }
              },
        saveUser(state, user) {
            
            //localStorage.removeItem('user')
            state.user = ""
            const loggedUser = user
            state.user = loggedUser
            //   localStorage.setItem('user',JSON.stringify(loggedUser))
      
          },

          clearUser(state){
            state.user = ""
            state.profile = ""
            // localStorage.removeItem('user')
          },
      
        //set token in the local storage after successfull log in 
          saveToken(state, token) {
               
              const access_token  = 'Bearer ' + token
               state.token = access_token
               // this.$cookies.set('x-access-token',access_token,{
               //                        path: '/',
               //                        maxAge: 60 * 60 * 24 * 7
               //                      })
               // this.$cookies.set('x-access-token', access_token, 60 * 60 * 24 * 30)
      
              // localStorage.setItem('access_token',access_token)
          },
          
          //clear the toekn from local storage after succccesfull logout
          clearToken(state) {
      
              //localStorage.removeItem('access_token')
              state.token = null
              //localStorage.removeItem('user')
              state.user = null
              // this.$cookies.remove('x-access-token')
          },

          // setProfile(state,val){
               
          //      state.profile = Object.assign({},state.profile,val)
          // }
          
    }

    export const getters = {

        userEmailVerified(state){

            return state.user ? state.user.email_verified_at !== null : false
        },
        
        userHasProfile(state){
            return state.user ? state.user.has_profile === true : false
        },
        getUser(state) {
            //const betaplace = JSON.parse(localStorage.getItem('betaplace'))
            return state.user //== null ? betaplace.auth.user : state.user
        },
        getToken(state) {
             // const token = this.$cookies.get('x-access-token')
             
             // const betaplace = JSON.parse(localStorage.getItem('betaplace'))

            return state.token //== null ?  betaplace.auth.token : state.token
        },
        loggedIn(state) {
            
           // const betaplace = JSON.parse(localStorage.getItem('betaplace'))
            // console.log(betaplace.auth.token)
            return !!state.token //!= null //|| betaplace.auth.token != null
        },


         getProfile(state) {
        
                    return state.profile
         }


    }
  
    export const actions = {
    
    async uploadProfileImage({getters},formData){
        
        
           return await this.$axios.post(API.AGENT_PROFILE_IMAGE_UPLOAD_URL,formData)
              
    },
         
   async  retrieveUser({state, commit, getters}) {

        this.$axios.defaults.headers.common['Authorization'] =  getters.getToken
        try {

         const  { data } = await this.$axios.get(API.USER_INFO_URL)      
           await  commit('saveUser', data)
           await commit('updateProfile',data)
        }catch(e){
           console.log("unable to retrieve user info")
        }
              
      },
  
   async  logout({state, commit, getters}) {
        
        
       
  
        if(getters.loggedIn){
             try {
                   await this.$axios.post(API.LOGOUT_URL)
                  
                     commit('clearToken')
                     commit('clearUser')
               }catch(e){
                      commit('clearToken')
                      commit('clearUser')
               }
  
        }
        
        
      },
  
      async register({state, commit},params) {
  
          //console.log(params)
          // console.log('auth store register callled');
          
          
              await commit('clearUser')
              const { data } = await  this.$axios.post(API.REGISTER_URL,{
                         'name': params.name,
                         'password': params.password,
                         'email': params.email,
                         'password_confirmation': params.password_confirmation
                         }) 
                  
               commit('saveUser',data)
                
  
      },
  
     async login({state, commit,dispatch}, credentials) {
          
         const { data } = await this.$axios.post(API.LOGIN_URL,{
                               'username': credentials.username,
                               'password': credentials.password
                               })

          await commit('saveToken',data.access_token)
           
          await dispatch('retrieveUser')
          
  
      },
      async socialLogin({state, commit,dispatch},payload){
            
           const { data } =  await this.$axios.post(API.SOCIAL_LOGIN_URL(payload.provider),payload)

            await commit('saveToken',data.access_token)

            await dispatch('retrieveUser')
                
      },

      
      async submitProfile({getters,dispatch},profile){
       
        await this.$axios.post(API.SUBMIT_PROFILE_URL,profile)
                
        await dispatch("retrieveUser")
               
      
    },
      
      async getMyProfile({commit}){
       
         
          let  response =  await  this.$axios.get(API.GET_MY_PROFILE_URL)
           
           commit('updateProfile',response.data)
      
      },

   async resendVerificationMail({getters}){

         if(!getters.getUser.email) return
        
         return  await this.$axios.post(API.RESEND_VERIFICATION_MAIL_URL,{el:getters.getUser.email})
                
    },

   async forgotPassword({state},payload){
          return await  this.$axios.post(API.FORGOT_PASSWORD_URL,payload)
    
    },

    async resetPassword({getters},payload){
      
           return await this.$axios.post(API.RESET_PASSWORD_URL,payload)
         
    },


}
  
