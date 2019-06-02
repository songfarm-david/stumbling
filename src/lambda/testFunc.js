/*
 * Handles MailChimp new subscriber creation
 *
 */

/**
 * Audience ID: 684872185b
 */
exports.handler = async (event, context, callback) => {

	console.log(event, context, callback);

	const body = JSON.parse(event.body).payload;

	console.log(body);
	return callback(null, {
		statusCode: 200,
		body: body
	});
}
