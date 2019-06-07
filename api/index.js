const baseUrl = process.env.BASE_URL

/**
 * featured articles for home page
 *
 * @param  param
 * @return return
 */
export const FEATURED_ARTICLES_LIST = baseUrl +  "/featured/articles" 




export const CATEGORY_ARTICLES_LIST = (categorySlug) => {
     
     return  baseUrl + "/category/" + categorySlug
} 


/**
 * List of articles in an edition 
 *
 * @param  param
 * @return return
 */
export const EDITION_ARTICLES_LIST = (editionSlug) => {
     
     return  baseUrl + "/edition/" + editionSlug
}

/**
 * List of articles by an author
 *
 * @param  author_id
 * @return return
 */

export const AUTHOR_ARTICLES_LIST = (authorSlug) => {
     
     return  baseUrl + "/author/" + authorSlug
}


/**
 * See full information or profile of the author
 *
 * @param  param
 * @return return
 */
export const AUTHOR_PROFILE = (authorSlug) => {
     
     return  baseUrl + "/author-info/" + authorSlug
}



/**
 * Shows an article
 *
 * @param  slug title
 * @return return
 */
export const ARTICLE_URL = (articleSlug) => {
     
     return  baseUrl + "/" + articleSlug
}


/**
 * Lists the categories : Can be used for the menu
 *
 * @param  param
 * @return return json callection 200
 */
export const CATEGORY_LIST_URL = baseUrl +  "/list/category"


/**
 * Lists the categories that the author can make submission to 
 *
 * @param  param
 * @return return
 */
export const CATEGORY_LIST_SUBMITTABLE_URL = baseUrl +  "/list/category/submittable"

/**
 * Returns call for submission info for public
 *
 * @param  param
 * @return return 200 json {calling: Boolean, }
 */
export const CHECK_FOR_CALL_FOR_SUBMISSION = baseUrl + '/check/submission'
/**
 * Lists the editions in the company
 *
 * @param  param
 * @return return
 */

export const EDITION_LIST_URL = baseUrl +  "/list/edition"





// AUTHENTICATION //
/*
    Registers a user 
    returns json 200 the created user or validation error 403
    sends verification email to the user 
*/
export const REGISTER_URL = baseUrl + '/register'

/*
    User login 
    returns json the authentication code 200 or 403 validation error
    Sends verification email to unverified user
*/
export const LOGIN_URL = baseUrl + '/login'

/*
    Registers or logs in a user using social providers
    returns json 200 Bearer authentication or redirect to clients login failed callback

*/
export const SOCIAL_LOGIN_URL = (provider) => {
         return baseUrl + '/login/' + provider
}


/*
    Logs out the user out of the application
    Returns json 200 log out successfull
*/
export const LOGOUT_URL = baseUrl + '/logout'


/*
    Resends a verification email to the user
    Returns reirects the user to the login page of the client
*/
export const RESEND_VERIFICATION_MAIL_URL = baseUrl + '/resend-verification'



/*

    Demands a password reset link for a user 
    Returns Json 200 message or 400 failed message 
    Sends a token to the email

 */
export const FORGOT_PASSWORD_URL = baseUrl + '/forgot-password'

/*
    Accepts: token, email, password and password_confirmation
    Resets the password for a given email to a new one 
    Return json 200 successfull or json 400 message unable 

*/
export const RESET_PASSWORD_URL = baseUrl + '/reset-password'

/*
    Shows user information after authentication 
    Returns json 200 user or 404 not found
*/
export const USER_INFO_URL = baseUrl + "/auth/user"





export const SUBMIT_PROFILE_URL  = baseUrl + '/auth/profile/submit'
export const GET_MY_PROFILE_URL  = baseUrl + '/auth/profile'

export const AGENT_PROFILE_IMAGE_UPLOAD_URL = baseUrl + '/profile-img'






//************************** END OF AUTH SYSTEM FOR CLIENT *******************************//

//****************************************************************************************//
//                         DASHBOARD OPERATIONS					                          //
//                    1. Author sees list of submission history                           //
//                    2. Can view the submission 						                  //
//                    3. Withdraw a submission (deletes) 	                              // 
//                    4. Make a submission      										  //
//****************************************************************************************//
 

 /**
 * lists of authors submission 
 *
 * @return return json 200 
 */
 export const DASHBOARD_SUBMISSION_HISTORY_URL = baseUrl + "/own/author/submissions"

/**
 * Shows a submissin details
 *
 * @param  param
 * @return return
 */

 export const DASHBOARD_SUBMISSION_DETAIL_URL =  (submissionSlug) => {

            return baseUrl + '/submission/' + submissionSlug
}

/**
 * Withdraws submission
 *
 * @param  post : null
 * @return return
 */
 export const DASHBOARD_SUBMISSION_WITHDRAW_URL = (submissionSlug) => {

            return baseUrl + '/submission/' + submissionSlug + '/withdraw'
}



/**
 * Makes a submission
 *
 * @post fulltext , intro_text, category_id, edition_id, 
 * @return return
 */
 export const DASHBOARD_SUBMISSION_SUBMIT_URL = baseUrl + "/submit/submission"

/**
 * Route to  download submissions
 *
 * @param  param
 * @return return
 */
 export const DASHBOARD_SUBMISSION_DOWNLOAD_URL = (slug) => {

           return baseUrl + "/submission/" + slug + "/download"

       }
