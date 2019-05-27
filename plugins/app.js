import Vue from 'vue'
import VueSocialauth from 'vue-social-auth'
// Vue.use(ReadMore)
Vue.use(VueSocialauth, {

  providers: {
    facebook: {
      clientId: process.env.FACEBOOK_CLIENT_ID,
      redirectUri: process.env.FACEBOOK_CALLBACK_URL,
    },
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      redirectUri: process.env.GOOGLE_CALLBACK_URL,
    },

  }
})