var WPAPI = require( 'wpapi' );

exports.handler = async (event, context, callback) => {

   let body = JSON.parse(event.body).payload;
   console.log('body:', body);

   // TODO: comment-form here and in form actions should be put in env var
   if (body.form_name == 'comment-form') {

      var wp = new WPAPI({
         endpoint: 'https://stumblingtowardsenlightenment.com/wp-json'
      });

      // let author_name = encodeURI(body.data.name)
      // let author_comment = encodeURI(body.data.comment)
      // let id = encodeURI(body.data.postId)

      // TODO: encode the URL here
      // console.log('vars:', author_name, author_comment, id);

      let comment = {
         author_name: encodeURI(author_name),
         author_comment: encodeURI(author_name),
         post: body.data.postId
      }

      wp.comments().create(comment, function(args) {
         console.log(args) }
      ).then(function( response ) {
         console.log( response );
      }).catch(function (err) {
         console.log(err);
      });

   }

}
