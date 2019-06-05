/*
 * Handles MailChimp new subscriber creation
 *
 */

/**
 * Audience ID: 684872185b
 */

 /*
  * Troubleshooting: https://www.raymondcamden.com/2019/01/15/customized-form-handling-on-netlify-with-serverless-functions
  * MailChimp API Resource: https://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/
  */

/*
 * curl --request GET \
	--url 'https://<dc>.api.mailchimp.com/3.0/' \
	--user 'anystring:<your_apikey>'
 * // curl --request GET \ --url 'https://us20.api.mailchimp.com/3.0' \ --user 'steBobo:6b2eee0c149301f0bf8e0bfee5fa85df-us20'
 */

// const APIRoot = "https://us20.api.mailchimp.com/3.0"
// const User    = "steBobo"
const APIKey  = process.env.MAILCHIMP_API_KEY
const ListID  = process.env.MAILCHIMP_LIST_ID // (List/Audience ID)

exports.handler = async (event, context, callback) => {

	console.log(event, context, callback);
	const body = JSON.parse(event.body).payload;
	console.log(body);

	// return callback(null, {
	// 	statusCode: 200,
	// 	body: body
	// });

}
