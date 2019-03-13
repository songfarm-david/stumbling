const statusCode = 200
const headers = {
  "Access-Control-Allow-Origin" : "*",
  "Access-Control-Allow-Headers": "Content-Type"
}

exports.handler = function(event, context, callback) {
	// event is submission-created
   const body = JSON.parse(event.body).payload
	console.log(JSON.parse(event.body).payload)
	// console.log(event, context)
	//
	// const { payload, site } = context
	// console.log(payload, site)
	callback(null, {
      statusCode,
      headers,
      body: body
    });
}
