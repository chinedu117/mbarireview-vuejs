const pkg = require('./package')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/style/app.styl'
  ],
  
 workbox: {
      runtimeCaching: [
      {
        // Should be a regex string. Compiles into new RegExp('https://my-cdn.com/.*')
        urlPattern: 'https://fonts.googleapis.com/.*',
        // Defaults to `networkFirst` if omitted
        // handler: 'networkFirst',
        // Defaults to `GET` if omitted
        // method: 'GET'
      }
    ]
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vuetify',
    // '~/plugins/app',
    // { src: '~/plugins/localStorage.js', ssr: false },
    // '~/plugins/http',
    
    
  ],
 

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

 generate: {
     fallback: true
  }, 

  env: {
    BASE_URL: process.env.NODE_ENV == 'production' ? 'http://mbarireview-api.com.ng/api' : 'http://mbari.test/api',
    COMPANY_NAME: 'MBARIREVIEW.COM',
    CONTACT_EMAIL: 'contact@mbarireview.com',
    FACEBOOK_CLIENT_ID: '',
    FACEBOOK_CALLBACK_URL: '',
    GOOGLE_CLIENT_ID: '',
    GOOGLE_CALLBACK_URL: '',
  },

  /*
  ** Build configuration
  */
  build: {
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ['~assets/style/variables.styl']
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
