import React from "react"
import SubscribeForm from "./subscribe-form.js"
import MailchimpForm from "./mailchimp-form"

import '../style/footer.scss'

export default props => (
	<footer>
		{/* <SubscribeForm slug={props.slug}/> */}
        <MailchimpForm />
 	  	<p className="small-text">© {new Date().getFullYear()}</p>
   </footer>
)
