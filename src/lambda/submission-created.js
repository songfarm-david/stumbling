var request = require("request");
var urlencode = require('urlencode');
var WP_API = require( 'wpapi' );

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
         // console.log('Submission passed as a comment-form comment');

         // let url = process.env.WP_COMMENTS + "?";
         // console.log('url to send:', url);

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

         let author_name = encodeURI(body.data.name)
         let author_comment = encodeURI(body.data.comment)
         let id = encodeURI(body.data.postId)

         // TODO: encode the URL here
         let commentStr = `author_name=${author_name}&content=${author_comment}&post=${id}`

         console.log('logging now:', url + commentStr);

         var wp = new WPAPI({
            endpoint: 'https://stumblingtowardsenlightenment.com/wp-json',
            username: 'bobo',
            password: 'mr?8(+JSx7z4'
         });

         wp.comments().create({
            author_name: author_name,
            content: author_comment,
            post: id
         }).then(function( response ) {
            console.log( response );
         });


         // request.post({ url, body: commentStr },
         //    function callback(err, httpResponse, body) {
         //       console.log('anything')
         //       // if (err) {
         //       //    return console.error('upload failed:', err)
         //       // }
         //       console.log('hello?', err, httpResponse, body)
         //       return console.log('hello?', err, httpResponse, body)
         //    }
         // );

      }

   // } catch (error) {
   //    callback(null, {
   //    statusCode: 500,
   //    body: JSON.stringify({ status: 'error' }),
   //  });
   // }

}
