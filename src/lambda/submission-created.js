
// let testRequest = {
//    "email_address": "joke.mail@freddurst.com",
//    "status": "subscribed",
//    "merge_fields": {
//       "FNAME": "Pootie",
//       "LNAME": "Blowfish"
//    }
// }

// endpoint: 'https://stumblingtowardsenlightenment.com/wp-json',
// username: 'bobo',
// password: 'mr?8(+JSx7z4'

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

      API_Endpoint = 'https://stumblingtowardsenlightenment.com/wp-json/wp/v2/comments'
      Credentials =
         process.env.WP_USERNAME + ':' + process.env.WP_PASSWORD

      Request_Payload = {
         'email_address': payload.email,
         'status': 'subscribed',
         'merge_fields': {
            'FNAME': payload.name
         }
      }

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
