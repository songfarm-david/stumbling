var WPAPI = require( 'wpapi' );

// form submission event triggered from Netlify
exports.handler = async (event, context, callback) => {

   let body = JSON.parse(event.body).payload;
   console.log('body:', body);

   // TODO: comment-form here and in form actions should be put in env var
   if (body.form_name == 'comment-form') {

      // var wp = new WPAPI({
      //    endpoint: 'https://stumblingtowardsenlightenment.com/wp-json',
      //    username: 'bobo',
      //    password: 'mr?8(+JSx7z4'
      // });

      let author_name = encodeURI(body.data.name)
      let author_comment = encodeURI(body.data.comment)
      let id = encodeURI(body.data.postId)

      // TODO: encode the URL here
      // console.log('vars:', author_name, author_comment, id);

      let comment = {
         author_name: encodeURI(author_name),
         author_comment: encodeURI(author_name),
         post: body.data.postId
      }

      callback(null, {
         statusCode: 200,
         body: "End of comment form condition"
      })

      return

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

   }

   if (body.form_name == 'subscription-form') {

      // get name and email from form body
      let subscribe_name = encodeURI(body.data.name)
      let subscribe_email = encodeURI(body.data.email)

      // setup POST request to Mailchimp
      // in what format does mailChimp require?
      // what is API endpoint URI?

      callback(null, {
         statusCode: 200,
         body: "End of subscription form condition"
      })

      return

   }

   callback(null, {
      statusCode: 200,
      body: "Made it to the end of submission-created.js"
   })

}
