import React from "react"

const SubscribeForm = (props) => (
	<form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">

        <div className="field">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" required/>
        </div>
        <div className="field">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" required/>
        </div>
        <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="6" required></textarea>
        </div>

		  <input type="hidden" name="bot-field" />
		  <input type="submit" value="Send Message" className="" />

    </form>
)

export default SubscribeForm
