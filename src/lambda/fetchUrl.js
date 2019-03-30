
function postData(url = '', data = {}) {
	// ref: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#Supplying_request_options
	return fetch(url, {
		method: "POST",
		mode: "cors", // no-cors, cors, *same-origin
		cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
		credentials: "same-origin", // include, *same-origin, omit
		headers: {
			"Content-Type": "application/json",
			// "Content-Type": "application/x-www-form-urlencoded",
		},
		redirect: "follow", // manual, *follow, error
		referrer: "no-referrer", // no-referrer, *client
		body: JSON.stringify(data), // body data type must match "Content-Type" header
	})
	.then(response => {
		if (response.ok) {
			return response.json()
		}
		throw new Error('Network response was not ok.', response)
	}) // parses JSON response into native Javascript objects
	.then(response => console.log("Success:", JSON.stringify(response)))
	.catch(error => console.log("Error:", error, error.message))
}


// NOTE: To cause browsers to send a request with credentials included, even for a cross-origin call, add credentials: 'include' to the init object you pass to the fetch() method. https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#Sending_a_request_with_credentials_included

export default postData
