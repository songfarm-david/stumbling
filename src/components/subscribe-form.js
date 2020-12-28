import React from "react"

const SubscribeForm = (props) => (
	<>
		<h3 id="mailing-list" className="header h1">Join the mailing list to get notified of new posts.</h3>
			<form id="subscribeForm"
				className="flex-form"
				name="subscription-form"
				action={`/?subscription_confirmed`}
				method="post" 
                data-netlify="true" 
                data-netlify-honeypot="bot-field"
                data-netlify-recaptcha="true">
				<input type="hidden" name="bot-field" />
				<input type="hidden" name="form-name" value="subscription-form"
				/>
				<div className="flex-field">
					<label htmlFor="name">Name</label>
					<input type="text" name="name" id="name" required />
				</div>
				<div className="flex-field">
					<label htmlFor="email">Email</label>
					<input type="text" name="email" id="email" required />
				</div>
                <div data-netlify-recaptcha="true"></div>
				<input type="submit" value="Subscribe" />
			</form>
	 </>
)

export default SubscribeForm
