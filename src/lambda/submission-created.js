/**
 * Description
 * Date: June 30, 2019
 */
const axios = require('axios')

exports.handler = (event, context, callback) => {

   let requestPayload

   let payload = JSON.parse(event.body).payload

   if (!payload) {
      return callback('No payload!')
   }

   // parse form and build data
   if (payload.form_name == 'subscription-form') {
      console.log('form name:', payload.form_name)
      console.log('payload', payload);

      const {
         MAILCHIMP_DATA_NO,
         MAILCHIMP_LIST_ID,
         MAILCHIMP_USERNAME,
         MAILCHIMP_API_KEY
      } = process.env

      const
         API_Endpoint = 'https://' + MAILCHIMP_DATA_NO +
         '.api.mailchimp.com/3.0/lists/' + MAILCHIMP_LIST_ID + '/members/',
         Credentials = MAILCHIMP_USERNAME + ':' + MAILCHIMP_API_KEY

      requestPayload = {
         'email_address': payload.email,
         'status': 'subscribed',
         'merge_fields': {
            'FNAME': payload.name
         }
      }

      axios.post(API_Endpoint, requestPayload, {
      		headers: {
               'Authorization': 'Basic ' + Buffer.from(Credentials).toString('base64')
            }
      	}
      )
      .then(res => {
         console.log('in the then. Did it work?', res);
         return
      })
      .catch(err => callback(err))

   } else if (payload.form_name == 'comment-form') {

      console.log('form name:', payload.form_name)
      console.log('payload', payload);

      const {
         WP_AUTH_ENDPOINT,
         WP_COMMENTS_ENDPOINT,
         WP_USER,
         WP_PASS
      } = process.env

      requestPayload = {
         'post': payload.data.postId,
         'author': (payload.data.author ? payload.data.author : null),
         'author_name': payload.name,
         'author_email': (payload.data.email ? payload.data.email : 'fakeemail@email.com'),
         'content': payload.comment
      }

      axios.post(WP_AUTH_ENDPOINT, {
   		username: WP_USER,
   		password: WP_PASS
   	})
   	.then(res => {
         console.log('logging res', res);
   		let token = res.data.token
         console.log('what is token?', token);
   		axios.post(WP_COMMENTS_ENDPOINT, requestPayload, {
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

   }

   // TODO: Program the submission creation to tell commenters that their comment is pending approval.
   // TODO: Set up a Spam bot using Netlify

}
