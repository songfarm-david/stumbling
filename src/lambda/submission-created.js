var request = require("request");

exports.handler = function(event, context, callback) {

   // var body = JSON.parse(event.body);
   // console.log('path', event.path);
   // console.log('method', event.httpMethod);
   // console.log('queryStringParameters', event.queryStringParameters);
   // console.log(JSON.parse(event.body).payload);

   let body = JSON.parse(event.body).payload

   // checks the
   if (body.form_name == 'comment-form') {

      let payload = {
         "name": body.data.name,
         "comment": body.data.comment
         "postTitle": body.data.post,
         "postSlug": body.data.slug
      }

      console.log(payload);

      // send comment to wordpress api
      // make a post request
      let url = process.env.URL + "/wp-json/wp/v2/comments"
      request.post({url: url, body: payload}, callback(err, http, response){
         console.log(err);
         console.log(http);
         console.log(response);
      })
   }



}
