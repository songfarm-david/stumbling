// https://www.npmjs.com/package/jsonwebtoken
// https://medium.com/@maison.moa/using-jwt-json-web-tokens-to-authorize-users-and-protect-api-routes-3e04a1453c3e
// https://medium.com/@rajaraodv/securing-react-redux-apps-with-jwt-tokens-fcfe81356ea0

// WP-JSON endpoint for comment submission/creation
// const url = 'https://stumblingtowardsenlightenment.com/wp-json'

/*
 * Parsing the form body 
 */
// if (payload.form_name == 'comment-form') {
// 	console.log('this is a comment');
// 	url = 'https://stumblingtowardsenlightenment.com/wp-json/wp/v2/comments' // /comments
// 	data = {
// 		postId: payload.data.postId,
// 		name: payload.data.name,
// 		comment: payload.data.comment
// 	}
// 	console.log(url, data);
// }

/**
 * Making the Request
 */
// TODO: Psuedo Code
// fetch JWT token creation url and get return value (token)
// then use that token in a call to the WP-REST API to authenticate
// and add new comment to post ID

// console.log("about to post fetch");
// fetch('https://stumblingtowardsenlightenment.com/wp-json/jwt-auth/v1/token', {
// 	// credentials: 'include',
// 	// headers: new Headers({
// 	//    'Authenticate': 'Basic bobo:mr?8(+JSx7z4'
// 	// })
// })
// .then(response => {
// 	console.log("Did we get a response? ", response)
// 	return response.json()
// })
// .then(myJson => {
// 	console.log(JSON.stringify(myJson))
// })
// .catch(error => {
// 	console.log("error: ", error);
// 	throw new Error('Something bad happened.', error)
// })
