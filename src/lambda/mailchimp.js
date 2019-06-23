const axios = require('axios')
// require("dotenv").config()

const {
  MAILCHIMP_USERNAME,
  MAILCHIMP_API_KEY,
  MAILCHIMP_DATA_NO,
  MAILCHIMP_LIST_ID
} = process.env

const TestAPIURL = 'https://us20.api.mailchimp.com/3.0/'
const Credentials = MAILCHIMP_USERNAME+':'+ MAILCHIMP_API_KEY

console.log(TestAPIURL, Credentials);

let testRequest = {
   "email_address": "urist.mcvankab@freddiesjokes.com",
   "status": "subscribed",
   "merge_fields": {
      "FNAME": "Donnie",
      "LNAME": "Brasco"
   }
}

exports.handler = (event, context, callback) => {
	axios({
		method: 'post',
		url: TestAPIURL,
		data: testRequest,
		headers: {
			'Authorization': 'Basic ' + Credentials
		}
	})
	.then(res => {
		console.log(res);
	})
	.catch(err => {
		console.log(err);
	})
	.finally(() => {
		console.log('Finally. Hello, world');
	})
}

// Want to use async/await? Add the `async` keyword to your outer function/method.
// async function getUser() {
//   try {
//     const response = await axios.get('/user?ID=12345');
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }
