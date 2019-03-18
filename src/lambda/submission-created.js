var request = require("request");

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

         let {URL, WP_COMMENTS} = process.env;
         let url = URL + '/' + WP_COMMENTS + "/?";

         console.log('url to send:', url);

         let comment = {
            "author_name": body.data.name,
            "content": body.data.comment,
            "date": body.created_at,
            "post": body.data.post,
            "url": url + '/' + body.data.slug,
            "meta": {
               "slug": body.data.slug
            }
         };
         console.log('type of comment?', typeof comment);
         console.log('comment:', comment);

         // postComment(url, comment);

         // send comment to wordpress api
         // make a post request
         // NOTE: Comment API: https://developer.wordpress.org/rest-api/reference/comments/#create-a-comment
         request.post(
            {
               url: url,
               body: comment,
               json: true
            },
            function callback(err, httpResponse, body) {
               if (err) {
                  return console.error('upload failed:', err)
               }
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
