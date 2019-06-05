/*
 * Handles MailChimp new subscriber creation
 *
 */

/**
 * Audience ID: 684872185b
 */

 /*
  * Resources:
  *
  * Troubleshooting: https://www.raymondcamden.com/2019/01/15/customized-form-handling-on-netlify-with-serverless-functions
  * MailChimp API Resource: https://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/
  * Managing Contacts with Mailchimp: https://developer.mailchimp.com/documentation/mailchimp/guides/manage-subscribers-with-the-mailchimp-api/
  * List Schema: https://api.mailchimp.com/schema/3.0/Lists/Members/Instance.json?_ga=2.12525744.504634568.1559680393-1547731669.1550175669
  * API Reference for Lists: https://developer.mailchimp.com/documentation/mailchimp/reference/lists/#create-post_lists_list_id
  */

/*
 * curl --request GET \
	--url 'https://<dc>.api.mailchimp.com/3.0/' \
	--user 'anystring:<your_apikey>'
 * // curl --request GET \ --url 'https://us20.api.mailchimp.com/3.0/' \ --user 'steBobo:4569d5b1e159dd9e1697142499bd6d1f-us20'
 * This one works: curl -X GET 'https://us20.api.mailchimp.com/3.0/' -u 'steBobo:4569d5b1e159dd9e1697142499bd6d1f-us20'
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
