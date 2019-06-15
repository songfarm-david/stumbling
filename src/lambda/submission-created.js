// import postData from './fetch-url'

// NOTE: article with good example fetch request: https://www.netlify.com/blog/2018/03/29/jamstack-architecture-on-netlify-how-identity-and-functions-work-together/

const fetch = require("node-fetch");

const TestAPIURL = 'https://.us20.api.mailchimp.com/3.0/lists/684872185b/members/'

const {
  MAILCHIMP_API_KEY,
  MAILCHIMP_DATA_NO,
  MAILCHIMP_LIST_ID,
  MAILCHIMP_USERNAME
} = process.env

let testRequest = {
   "email_address": "urist.mcvankab@freddiesjokes.com",
   "status": "subscribed",
   "merge_fields": {
      "FNAME": "Urist",
      "LNAME": "McVankab"
   }
}

// form submission event triggered from Netlify
exports.handler = (event, context, callback) => {

   console.log('Hello, Dave. You are fun. You are confident.')

   // console.log('httpMethod: ', event.httpMethod);
   // const MailchimpAPIUrl = 'https://' + MAILCHIMP_DATA_NO + '.api.mailchimp.com/3.0/lists/' + MAILCHIMP_LIST_ID + '/members/'
   // const Username = MAILCHIMP_USERNAME + ':' + MAILCHIMP_API_KEY

   console.log(TestAPIURL, testRequest);

   try {
      let payload = JSON.parse(event.body).payload
      fetch(TestAPIURL)
      .then(res => {
         console.log('what is res?', res);
         if (payload.form_name == 'subscription-form') {
            console.log('form name was subscription');
         } else if (payload.form_name == 'comment-form') {
            console.log('form name was a comment');
            // url = 'https://stumblingtowardsenlightenment.com/wp-json/wp/v2/comments' // /comments
            // data = {
            //    postId: payload.data.postId,
            //    name: payload.data.name,
            //    comment: payload.data.comment
            // }
            // console.log(url, data);
         }
         return callback(null, {
            statusCode: 200,
            body: JSON.stringify(res.data)
         })
      })
      .catch(e => {
         console.log(e);
         callback(e);
      })
   } catch (e) {
      console.log(e);
      callback(e, { statusCode: 500, body: "Internal Server Errors: " + e })
   }

}

// try {
//
//    console.log('say try?', payload)
   // if (payload.form_name == 'subscription-form') {
   //    // set url (use ENV VAR)
   //    url = 'mailchimp endpoint'
   //    data = {
   //       // ...
   //    }
   // }
//
   // if (payload.form_name == 'comment-form') {
   //    console.log('this is a comment');
   //    url = 'https://stumblingtowardsenlightenment.com/wp-json/wp/v2/comments' // /comments
   //    data = {
   //       postId: payload.data.postId,
   //       name: payload.data.name,
   //       comment: payload.data.comment
   //    }
   //    console.log(url, data);
   // }
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
// } catch (e) {
//    callback(null, {
//       statusCode: 500,
//       body: "Internal Server Error: " + e
//    });
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

// var apiPromise = WPAPI.discover( 'https://stumblingtowardsenlightenment.com' )
// apiPromise.then(function(site) {
//    site.comments().create(comment, function(err, data) {
//       console.log(err, data)
//    }).then(function( response ) {
//       console.log( response );
//    }).catch(function( err ) {
//       console.log(err);
//    });
// })

// wp.comments().create(comment, function(err, data) {
//    console.log(err, data)
// }).then(function( response ) {
//    console.log( response );
// }).catch(function( err ) {
//    console.log(err);
// });


// let body
// if (event.body.payload !== '') {
//    // body = JSON.parse(event.body).payload;
//    console.log('body:', body);
//    callback(null, {
//       statusCode: 200,
//       body: JSON.stringify(event.body).payload
//    })
// }

// TODO: comment-form here and in form actions should be put in env var
// if (body && body.form_name == 'comment-form') {

   // var wp = new WPAPI({
   //    endpoint: 'https://stumblingtowardsenlightenment.com/wp-json',
   //    username: 'bobo',
   //    password: 'mr?8(+JSx7z4'
   // });

   // let author_name = encodeURI(body.data.name)
   // let author_comment = encodeURI(body.data.comment)
   // let id = encodeURI(body.data.postId)

   // TODO: encode the URL here
   // console.log('vars:', author_name, author_comment, id);

   // let comment = {
   //    author_name: encodeURI(author_name),
   //    author_comment: encodeURI(author_name),
   //    // post: body.data.postId
   // }

   // callback(null, {
   //    statusCode: 200,
   //    body: "End of comment form condition"
   // })

   // return

// }

// if (body && body.form_name == 'subscription-form') {
//
//    // get name and email from form body
//    let subscribe_name = encodeURI(body.data.name)
//    let subscribe_email = encodeURI(body.data.email)
//
//    // setup POST request to Mailchimp
//    // in what format does mailChimp require?
//    // what is API endpoint URI?
//
//    callback(null, {
//       statusCode: 200,
//       body: "End of subscription form condition"
//    })
//
//    return
//
// }

// callback(null, {
//    statusCode: 200,
//    body: JSON.stringify(event)
// })
