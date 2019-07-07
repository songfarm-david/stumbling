import React from "react"
import SubscribeForm from "./subscribe-form.js"

import '../style/footer.scss'

export default () => (
	<footer>
		<SubscribeForm />
 	  	<p class="small-text">© {new Date().getFullYear()}</p>
   </footer>
)
