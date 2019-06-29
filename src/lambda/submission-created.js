
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

   // parse form and build data
   if (payload.form_name == 'subscription-form') {
      console.log('form name:', payload.form_name)
      console.log('payload', payload);

      API_Endpoint = 'https://us20.api.mailchimp.com/3.0/lists/' + process.env.MAILCHIMP_LIST_ID + '/members/'
      Credentials = process.env.MAILCHIMP_USERNAME+':'+ process.env.MAILCHIMP_API_KEY

      Request_Payload = {
         'email_address': payload.email,
         'status': 'subscribed',
         'merge_fields': {
            'FNAME': payload.name
         }
      }

   } else if (payload.form_name == 'comment-form') {
      console.log('form name:', payload.form_name)
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
      console.log(res);
      callback(null, {
         statusCode: 200,
         body: 'You did it! ' + JSON.stringify(res)
      })
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

// let payload = JSON.parse(event.body).payload
// console.log('payload:', payload)
// console.log(TestAPIURL, testRequest)

// fetch(TestAPIURL, {
//    method: 'POST',
//    headers: new Headers({
//       'Authorization':
//    }),
//    // credentials: 'include'
// })
// .then(res => {
//       console.log('what is res?', res)
//       return JSON.stringify(res)
//       // if (payload.form_name == 'subscription-form') {
//          // console.log('form name was subscription');
//       // } else if (payload.form_name == 'comment-form') {
//          // console.log('form name was a comment');
         // url = 'https://stumblingtowardsenlightenment.com/wp-json/wp/v2/comments' // /comments
//          // data = {
//          //    postId: payload.data.postId,
//          //    name: payload.data.name,
//          //    comment: payload.data.comment
//          // }
//          // console.log(url, data);
//       // }
//       // callback(null, {
//       //    statusCode: 200,
//       //    body: JSON.stringify(res.data)
//       // })
//    })
//    .catch(e => {
//       console.log('in the fetch catch', e);
//       callback(e);
//    })

// }


// // try {
//
// //    console.log('say try?', payload)
//    // if (payload.form_name == 'subscription-form') {
//    //    // set url (use ENV VAR)
//    //    url = 'mailchimp endpoint'
//    //    data = {
//    //       // ...
//    //    }
//    // }
//
//    // if (payload.form_name == 'comment-form') {
//    //    console.log('this is a comment');
//    //    url = 'https://stumblingtowardsenlightenment.com/wp-json/wp/v2/comments' // /comments
//    //    data = {
//    //       postId: payload.data.postId,
//    //       name: payload.data.name,
//    //       comment: payload.data.comment
//    //    }
//    //    console.log(url, data);
//    // }
//
//    // fetch('urlToApi')
//    // .then(response => {
//    //    console.log("Did we get a response? ", response)
//    //    return response.json()
//    // })
//    // .then(myJson => {
//    //    console.log(JSON.stringify(myJson))
//    // })
//    // .catch(error => {
//    //    console.log("error: ", error);
//    //    throw new Error('Something bad happened.', error)
//    // })
//
// // } catch (e) {
// //    callback(null, {
// //       statusCode: 500,
// //       body: "Internal Server Error: " + e
// //    });
// // }
//
// // the event object:
// // {
// //  "path": "Path parameter",
// //  "httpMethod": "Incoming request's method name"
// //  "headers": {Incoming request headers}
// //  "queryStringParameters": {query string parameters }
// //  "body": "A JSON string of the request payload."
// //  "isBase64Encoded": "A boolean flag to indicate if the applicable request payload is Base64-encode"
// // }
//
// // var apiPromise = WPAPI.discover( 'https://stumblingtowardsenlightenment.com' )
// // apiPromise.then(function(site) {
// //    site.comments().create(comment, function(err, data) {
// //       console.log(err, data)
// //    }).then(function( response ) {
// //       console.log( response );
// //    }).catch(function( err ) {
// //       console.log(err);
// //    });
// // })
//
// // wp.comments().create(comment, function(err, data) {
// //    console.log(err, data)
// // }).then(function( response ) {
// //    console.log( response );
// // }).catch(function( err ) {
// //    console.log(err);
// // });
//
// // let body
// // if (event.body.payload !== '') {
// //    // body = JSON.parse(event.body).payload;
// //    console.log('body:', body);
// //    callback(null, {
// //       statusCode: 200,
// //       body: JSON.stringify(event.body).payload
// //    })
// // }
