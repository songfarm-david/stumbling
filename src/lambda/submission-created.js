const statusCode = 200
const headers = {
  "Access-Control-Allow-Origin" : "*",
  "Access-Control-Allow-Headers": "Content-Type"
}

exports.handler = function(event, context, callback) {

   // var body = JSON.parse(event.body);
   console.log('path', event.path);
   console.log('method', event.httpMethod);
   console.log('queryStringParameters', event.queryStringParameters);
   console.log(JSON.parse(event.body).payload);

   let body = JSON.parse(event.body).payload
   let data = body.data

   if (data.form_name === 'comment-form') {
      const name = data.name
      const comment = data.comment
      const postTitle = data.post
      const postSlug = data.slug
      return console.log('We are the Champions', name, comment, postTitle, postSlug);
   }



}
