  import * as API from '~/api'
  import axios from 'axios'
//store state
export const state = () => {

  return {

          edition : {
          	  articles: []
          },

          category : {
          	  articles: []
          },

          author: {
          	  articles: []
          },

          featured: {
          	  articles: []
          },
          
          editionList: []

      }
}

//store mutations
export const mutations = {

    updateFeaturedArticles (state, value) {
            state.featured.articles.push(value)
       },

    updateCategoryArticles (state, value) {
             
            state.category.articles.push(value)
     },

     updateEditionArticles (state, value) {
             state.edition.articles.push(value)
      },

    updateAuthorArticles (state, value) {

            state.author.articles.push(value)
    },

   
    updateEditionList (state, value) {
            state.editionList.push(value) 
    },
}

//store getters
export const getters = {
     

      categoryArticles(state) {
     
                 return state.category.articles
     },



      editionArticles(state) {
     
                 return state.edition.articles
     },


      authorArticles(state) {
     
                 return state.author.articles
     },


      featuredArticles(state) {
     
                 return state.featured.articles
     },


      editionList(state) {
     
                 return state.editionList
     }
       

 }

//store actions
export const actions = {
     
  
     async retrieveCategoryArticles({commit,dispatch,state},categorySlug){
              
             const { data } = await this.$axios.get(API.CATEGORY_ARTICLES_LIST(categorySlug))
             state.category.articles = []
             data.forEach((article) => {

             	  commit('updateCategoryArticles',article)
             })
                    
      },

      async retrieveEditionArticles({commit,dispatch,state},editionSlug){
              
             state.edition.articles = []

             const { data } = await this.$axios.get(API.EDITION_ARTICLES_LIST(editionSlug))

             data.forEach((article) => {
             	
             	  commit('updateEditionArticles',article)
             })
                    
      },



      async retrieveAuthorArticles({commit,dispatch,state},authorSlug){
             
             state.author.articles = []

             const { data } = await this.$axios.get(API.AUTHOR_ARTICLES_LIST(authorSlug))

             data.forEach((article) => {
             	
             	  commit('updateAuthorArticles',article)
             })
                    
      },

      async retrieveFeaturedArticles({commit,dispatch,state}){
              
             const { data } = await axios.get(API.FEATURED_ARTICLES_LIST)

             state.featured.articles = []

             data.forEach((article) => {

             	  commit('updateFeaturedArticles',article)
             })
                    
      },

      async retrieveEditionList({commit,dispatch,state}){

             
             const { data } = await this.$axios.get(API.EDITION_LIST_URL)

             data.forEach((edition) => {

                commit('updateEditionList',edition)
                   
             })
                    
      },
    
}
