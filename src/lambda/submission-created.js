/**
 * Description
 * Date: June 30, 2019
 */
const axios = require('axios')

exports.handler = (event, context, callback) => {

   let API_Endpoint, Credentials, Request_Payload

   let payload = JSON.parse(event.body).payload

   if (!payload) {
      return callback('No payload!')
   }

   // parse form and build data
   if (payload.form_name == 'subscription-form') {
      console.log('form name:', payload.form_name)
      console.log('payload', payload);

      API_Endpoint = 'https://' + process.env.MAILCHIMP_DATA_NO +
      '.api.mailchimp.com/3.0/lists/' + process.env.MAILCHIMP_LIST_ID + '/members/'
      Credentials =
         process.env.MAILCHIMP_USERNAME + ':' + process.env.MAILCHIMP_API_KEY

      Request_Payload = {
         'email_address': payload.email,
         'status': 'subscribed',
         'merge_fields': {
            'FNAME': payload.name
         }
      }

   } else if (payload.form_name == 'comment-form') {
      console.log('form name:', payload.form_name)
      console.log('payload', payload);

      const {
         WP_AUTH_ENDPOINT,
         WP_COMMENTS_ENDPOINT,
         WP_USER,
         WP_PASS
      } = process.env

      const Request_Payload = {
         'post': payload.data.postId,
         'author': (payload.data.author ? payload.data.author : null),
         'author_name': payload.name,
         'author_email': (payload.data.email ? payload.data.email : null),
         'content': payload.comment
      }

      axios.post(WP_AUTH_ENDPOINT, {
   		username: WP_USER,
   		password: WP_PASS
   	})
   	.then(res => {
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
   		.catch(err => callback('in the second error', err))

   	})
   	.catch(err => callback(err))

   } else {
      return
   }

   // make axios request here
   // if not API_Endpoint && Credentials && Data
   if (!API_Endpoint || !Credentials) {
      return callback('No API Endpoint or Credentials supplied!')
   }

   axios.post(API_Endpoint, Request_Payload, {
   		headers: {
            'Authorization': 'Basic ' + Buffer.from(Credentials).toString('base64')
         }
   	}
   )
   .then(res => {
      console.log('in the then. Did it work?', res);
   })
   .catch(err => callback(err))

}

// Want to use async/await? Add the `async` keyword to your outer function/method.
// async function getUser() {
//   try {
//     const response = await axios.get('/user?ID=12345');
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }

// the event object:
// {
//  "path": "Path parameter",
//  "httpMethod": "Incoming request's method name"
//  "headers": {Incoming request headers}
//  "queryStringParameters": {query string parameters }
//  "body": "A JSON string of the request payload."
//  "isBase64Encoded": "A boolean flag to indicate if the applicable request payload is Base64-encode"
// }
