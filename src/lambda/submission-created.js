var request = require("request");
var urlencode = require('urlencode');

console.log(request.post);
// function postComment() {
//    console.log('postComment called');
// }

exports.handler = async (event, context, callback) => {

   // try {
   //
   //    console.log('About to "TRY"');
   //
   //    // Do not handle requests if the request
   //    // type is something other than `POST` or
   //    // if the request body is empty.
   //    if (event.httpMethod !== 'POST' || !event.body) {
   //       callback(null, {
   //         statusCode: 400,
   //         body: JSON.stringify({ status: 'Bad Request' }),
   //       });
   //       return;
   //    }
   //
   //    console.log('Made it past the condition!');

      let body = JSON.parse(event.body).payload;
      console.log(body);
      // if from comment form
      // TODO: comment-form here and in form actions should be put in env var
      if (body.form_name == 'comment-form') {
         console.log('Submission passed as a comment-form comment');

         let url = process.env.WP_COMMENTS + "?";
         console.log('url to send:', url);
         console.log('body:', body);
         // let comment = {
         //    "author_name": body.data.name,
         //    "content": body.data.comment,
         //    "date": body.created_at,
         //    "post": body.data.postId,
         //    "url": url + '/' + body.data.slug,
         //    "meta": {
         //       "slug": body.data.slug
         //    }
         // };

         let author_name = urlencode('utf8', body.data.name)
         let author_comment = urlencode('utf8', body.data.comment)
         let id = body.data.postId

         let commentStr = `author_name=${author_name}&content=${author_comment}&post=${id}`

         console.log(url, commentStr);

         request.post({ url, body: commentStr },
            function callback(err, httpResponse, body) {
               console.log('anything')
               // if (err) {
               //    return console.error('upload failed:', err)
               // }
               console.log('hello?', err, httpResponse, body)
               return console.log('hello?', err, httpResponse, body)
            }
         );


         return;

      }

   // } catch (error) {
   //    callback(null, {
   //    statusCode: 500,
   //    body: JSON.stringify({ status: 'error' }),
   //  });
   // }

}
