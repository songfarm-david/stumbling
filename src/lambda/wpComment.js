
const axios = require('axios')

const
	AUTH_ENDPOINT = 'https://stumblingtowardsenlightenment.com/wp-json/jwt-auth/v1/token'
	COMMENTS_ENDPOINT = 'https://stumblingtowardsenlightenment.com/wp-json/wp/v2/comments',
	WP_USER = 'bobo',
	WP_PASS = 'mr?8(+JSx7z4',


exports.handler = (event, context, callback) => {

	axios.post(API_Host + Auth, {
		username: Username,
		password: Password
	})
	.then(res => {
		let token = res.data.token
		axios.post(API_Host + Comment, Request_Payload, {
			headers: {
            'Authorization': 'Bearer ' + token
         }
		})
		.then(res => {
			console.log('Yes!', res);
			callback(null, {
				statusCode: 200,
				body: 'You did it! ' + res
			})
		})
		.catch(err => callback('in the second error', err))

	})
	.catch(err => callback(err))
	
}
