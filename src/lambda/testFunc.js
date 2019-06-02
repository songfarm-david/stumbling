exports.handler = async (event, context, callback) => {
	const body = JSON.parse(event.body).payload
	callback(null, {
    statusCode: 200,
    body: body
    });
}
