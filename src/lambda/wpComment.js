// eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvc3R1bWJsaW5ndG93YXJkc2VubGlnaHRlbm1lbnQuY29tIiwiaWF0IjoxNTYxODgxNTY1LCJuYmYiOjE1NjE4ODE1NjUsImV4cCI6MTU2MjQ4NjM2NSwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.eLYxqwrGoRtWAzYKr6haZ9KvcLJdwXaXyTMpbZcBPr4
const axios = require('axios')

const
	WP_AUTH_ENDPOINT = 'https://stumblingtowardsenlightenment.com/wp-json/jwt-auth/v1/token'
	WP_COMMENTS_ENDPOINT = 'https://stumblingtowardsenlightenment.com/wp-json/wp/v2/comments',
	WP_USER = 'bobo',
	WP_PASS = 'mr?8(+JSx7z4',


exports.handler = (event, context, callback) => {

	// const {
	// 	WP_AUTH_ENDPOINT,
	// 	WP_COMMENTS_ENDPOINT,
	// 	WP_USER,
	// 	WP_PASS
	// } = process.env

	let Request_Payload = {
		'post': '133',
		'author_name': 'Bobby joe',
		'author_email': 'seriously@email.com',
		'content': 'Comment bitch'
	}

	axios.post(WP_AUTH_ENDPOINT, {
		username: WP_USER,
		password: WP_PASS
	})
	.then(res => {
		console.log('logging res', res);
		let token = res.data.token
		axios.post(WP_COMMENTS_ENDPOINT, Request_Payload, {
			headers: {
				'Authorization': 'Bearer ' + token
			}
		})
		.then(res => {
			console.log('Yes!', res);
			return callback(null, {
				statusCode: 200,
				body: 'You did it! ' + res
			})
		})
		.catch(err => callback('in the second error ' + err))

	})
	.catch(err => callback(err))

	// axios.post(API_Host + Auth, {
	// 	username: Username,
	// 	password: Password
	// })
	// .then(res => {
	// 	let token = res.data.token
	// 	axios.post(API_Host + Comment, Request_Payload, {
	// 		headers: {
   //          'Authorization': 'Bearer ' + token
   //       }
	// 	})
	// 	.then(res => {
	// 		console.log('Yes!', res);
	// 		callback(null, {
	// 			statusCode: 200,
	// 			body: 'You did it! ' + res
	// 		})
	// 	})
	// 	.catch(err => callback('in the second error', err))
	//
	// })
	// .catch(err => callback(err))



}
