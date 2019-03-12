const statusCode = 200
const headers = {
  "Access-Control-Allow-Origin" : "*",
  "Access-Control-Allow-Headers": "Content-Type"
}

exports.handler = function(event, context, callback) {
	// event is submission-created
	console.log('context is', context, event)
	// console.log(event, context)
	//
	// const { payload, site } = context
	// console.log(payload, site)
	callback(null, {
      statusCode,
      headers,
      body: 'Let there be light!'
    });
}
