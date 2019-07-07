import React from "react"
import SubscribeForm from "./subscribe-form.js"

import '../style/footer.scss'

export default () => (
	<footer>
		<SubscribeForm />
 	  © {new Date().getFullYear()}
   </footer>
)
