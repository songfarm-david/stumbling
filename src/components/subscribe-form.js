import React from "react"

const SubscribeForm = (props) => (
	<>
		<h3 class="header h1">Join the mailing list to get notified of new posts.</h3>
			<form class="flex-form" name="subscription-form" action="/" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
				<input type="hidden" name="bot-field" />
				<input type="hidden" name="form-name" value="subscription-form" />

				<div class="flex-field">
					<label htmlFor="name">Name</label>
					<input type="text" name="name" id="name" required />
				</div>

				<div class="flex-field">
					<label htmlFor="email">Email</label>
					<input type="text" name="email" id="email" required />
				</div>

				<input type="submit" value="Subscribe" />
			</form>
	 </>
)

export default SubscribeForm
