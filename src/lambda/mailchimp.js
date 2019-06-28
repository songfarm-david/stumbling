// HELP: apihelp@mailchimp.com to contact about 500 server error
const axios = require('axios')

const TestAPIURL = 'https://us20.api.mailchimp.com/3.0/lists/' + process.env.MAILCHIMP_LIST_ID + '/members/'
const Credentials = process.env.MAILCHIMP_USERNAME+':'+ process.env.MAILCHIMP_API_KEY

let testRequest = {
   "email_address": "joke.mail@freddurst.com",
   "status": "subscribed",
   "merge_fields": {
      "FNAME": "Pootie",
      "LNAME": "Blowfish"
   }
}

exports.handler = (event, context, callback) => {
   axios.post(TestAPIURL, testRequest, {
   		headers: {
            'Authorization': 'Basic ' + Buffer.from(Credentials).toString('base64')
         }
   	}
   )
   .then(res => {
      callback(null, {
         statusCode: 200,
         body: 'You did it! ' + res
      })
   })
   .catch(err => callback(err))

}


// const {
//   MAILCHIMP_USERNAME,
//   MAILCHIMP_API_KEY,
//   MAILCHIMP_DATA_NO,
//   MAILCHIMP_LIST_ID
// } = process.env
//
// console.log('logging constants: \n',
// 	MAILCHIMP_USERNAME,
// 	MAILCHIMP_API_KEY,
// 	MAILCHIMP_DATA_NO,
// 	MAILCHIMP_LIST_ID
// );

// const TestAPIURL = 'https://us20.api.mailchimp.com/3.0/'



// try {
// 	await axios.post(TestAPIURL, testRequest, {
// 		headers: { 'Authorization': 'Basic ' + Credentials }
// 	}).
// 	then(res => {
// 		console.log('response: ', res);
//       callback(null, {
//          statusCode: 200,
//          body: 'You did it ' + res
//       })
// 		// return res
// 	})
// } catch (e) {
//    console.log('logging error: ', e);
//    callback(e)
// }

// axios({
// 	method: 'post',
// 	url: TestAPIURL,
// 	data: testRequest,
// 	headers: {
// 		'Authorization': 'Basic ' + Credentials
// 	}
// })
// .then(res => {
// 	console.log(res);
// })
// .catch(err => {
// 	console.log(err);
// })
// .finally(() => {
// 	console.log('Finally. Hello, world');
// })

// Want to use async/await? Add the `async` keyword to your outer function/method.
// async function getUser() {
//   try {
//     const response = await axios.get('/user?ID=12345');
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }


//
// const TestAPIURL = 'https://us20.api.mailchimp.com/3.0/lists/684872185b/members/'
// // NOTE: these will be environmental variables
//
// const {
//   MAILCHIMP_API_KEY,
//   MAILCHIMP_DATA_NO,
//   MAILCHIMP_LIST_ID,
//   MAILCHIMP_USERNAME
// } = process.env
//
// let testRequest = {
//    "email_address": "urist.mcvankab@freddiesjokes.com",
//    "status": "subscribed",
//    "merge_fields": {
//       "FNAME": "Donnie",
//       "LNAME": "Brasco"
//    }
// }
//
// // form submission event triggered from Netlify
// exports.handler = (event, context, callback) => {
//
//    console.log('submission created callback fired');
//
//    // fetch API URL for MailChimp
//    fetch(TestAPIURL, {
//       // config credentials here
//       method: 'POST',
//       headers: new Headers({
//          'Authorization': Credentials
//       }),
//       credentials: 'include'
//    }).
//    then((res) => {
//       console.log('fetch succeeded', res);
//    }).
//    catch(err => {
//       console.log('fetch failed', err);
//    })
//
// //
//    // let payload = JSON.parse(event.body).payload
//    // console.log('payload:', payload)
//    // console.log(TestAPIURL, testRequest)
//
//    // fetch(TestAPIURL, {
//    //    method: 'POST',
//    //    headers: new Headers({
//    //       'Authorization':
//    //    }),
//    //    // credentials: 'include'
//    // })
//    // .then(res => {
//    //       console.log('what is res?', res)
//    //       return JSON.stringify(res)
//    //       // if (payload.form_name == 'subscription-form') {
//    //          // console.log('form name was subscription');
//    //       // } else if (payload.form_name == 'comment-form') {
//    //          // console.log('form name was a comment');
//    //          // url = 'https://stumblingtowardsenlightenment.com/wp-json/wp/v2/comments' // /comments
//    //          // data = {
//    //          //    postId: payload.data.postId,
//    //          //    name: payload.data.name,
//    //          //    comment: payload.data.comment
//    //          // }
//    //          // console.log(url, data);
//    //       // }
//    //       // callback(null, {
//    //       //    statusCode: 200,
//    //       //    body: JSON.stringify(res.data)
//    //       // })
//    //    })
//    //    .catch(e => {
//    //       console.log('in the fetch catch', e);
//    //       callback(e);
//    //    })
//
// }
//
//
// // console.log('httpMethod: ', event.httpMethod);
// // const MailchimpAPIUrl = 'https://' + MAILCHIMP_DATA_NO + '.api.mailchimp.com/3.0/lists/' + MAILCHIMP_LIST_ID + '/members/'
// // const Username = MAILCHIMP_USERNAME + ':' + MAILCHIMP_API_KEY
//
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
//
// // TODO: comment-form here and in form actions should be put in env var
// // if (body && body.form_name == 'comment-form') {
//
//    // var wp = new WPAPI({
//    //    endpoint: 'https://stumblingtowardsenlightenment.com/wp-json',
//    //    username: 'bobo',
//    //    password: 'mr?8(+JSx7z4'
//    // });


// exports.handler = (event, context, callback) => {
// 	axios({
// 		method: 'post',
// 		url: TestAPIURL,
// 		data: testRequest,
// 		headers: {
// 			'Authorization': 'Basic ' + Credentials
// 		}
// 	})
// 	.then(res => {
// 		console.log(res);
// 	})
// 	.catch(err => {
// 		console.log(err);
// 	})
// 	.finally(() => {
// 		console.log('Finally. Hello, world');
// 	})
// }

// Want to use async/await? Add the `async` keyword to your outer function/method.
// async function getUser() {
//   try {
//     const response = await axios.get('/user?ID=12345');
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }
