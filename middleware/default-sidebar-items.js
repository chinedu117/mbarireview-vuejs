export default function ({ store}) {
	
	store.dispatch('articles/retrieveCategoryList')

	console.log("Middleware called")
  
}
