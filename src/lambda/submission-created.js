exports.handler = function(event, context, callback) {
	// event is submission-created
	console.log('hello world')
	console.log(event, context)

	const { payload, site } = context
	console.log(payload, site)
}
