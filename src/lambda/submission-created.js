var request = require("request");

exports.handler = function(event, context, callback) {

   // var body = JSON.parse(event.body);
   console.log('path', event.path);
   console.log('method', event.httpMethod);
   console.log('queryStringParameters', event.queryStringParameters);
   console.log(JSON.parse(event.body).payload);

   let body = JSON.parse(event.body).payload
   let data = body.data

   if (data.form_name === 'comment-form') {

      let payload = {
         "text": "New Comment from " + process.env.URL,
         "attachments": [
            {
               "fallback": "Manage comments on " + process.env.URL,
               "callback_id": "comment-action",
               "actions": [
                   {
                     "type": "button",
                     "text": "Approve comment",
                     "name": "approve",
                     "value": body.id
                   },
                   {
                     "type": "button",
                     "style": "danger",
                     "text": "Delete comment",
                     "name": "delete",
                     "value": body.id
                   }
                ]
            }
         ]
      }

      const name = data.name
      const comment = data.comment
      const postTitle = data.post
      const postSlug = data.slug
      console.log('Sharpton');
      return console.log('We are the Champions', name, comment, postTitle, postSlug);
   }



}
