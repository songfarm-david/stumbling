import React from "react"

const SubscribeForm = (props) => (
	<form name="contact" action="/" method="post" data-netlify="true">

        <div className="field">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" value="dave"/>
        </div>
        <div className="field">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" value="email@email.com" />
        </div>
        <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="6"></textarea>
        </div>

		  <input type="submit" value="Send Message" className="" />

    </form>
)

export default SubscribeForm
