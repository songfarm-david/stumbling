// var WPAPI = require( 'wpapi' );

exports.handler = async (event, context, callback) => {

   let body = JSON.parse(event.body).payload;
   console.log('body:', body);

   // TODO: comment-form here and in form actions should be put in env var
   if (body.form_name == 'comment-form') {

      let author_name = encodeURI(body.data.name)
      let author_comment = encodeURI(body.data.comment)
      let id = encodeURI(body.data.postId)

      // TODO: encode the URL here
      console.log('vars:', author_name, author_comment, id);

      // var wp = new WPAPI({
      //    endpoint: 'https://stumblingtowardsenlightenment.com/wp-json',
      //    username: 'bobo',
      //    password: 'mr?8(+JSx7z4'
      // });
      //
      // wp.comments().create({
      //    author_name: bra,
      //    content: bro,
      //    post: id
      // }).then(function( response ) {
      //    console.log( response );
      // });

   }

}
