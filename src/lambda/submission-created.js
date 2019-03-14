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
   let formName = body.data.form_name
   let name, comment

   if (formName === 'subscription-form') {
      callback(null, {
         body: "Joy to the world!"
      });
      return console.log('Returning because this is for the subscription form.');
   } else {
      name = body.data.name
      comment = body.data.comment
   }



}
