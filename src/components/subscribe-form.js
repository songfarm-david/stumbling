import React from "react"

const SubscribeForm = (props) => (
	<>
	<h3>Join the mailing list to get notified of new posts.</h3>

	<form name="contact" action="/" method="post" data-netlify="true" data-netlify-honeypot="bot-field">

		{/* spam filtering hidden input field - required to get the form to work with netlify */}
		<input type="hidden" name="bot-field" />
		<input type="hidden" name="form-name" value="contact" />

		<div>
			<label htmlFor="name">Name</label>
			<input type="text" name="name" id="name" required />
		</div>
        <div>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" required />
        </div>

		  <input type="submit" value="Subscribe" />

    </form>
	 </>
)

export default SubscribeForm
