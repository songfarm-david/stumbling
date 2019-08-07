import React from "react"
import SubscribeForm from "./subscribe-form.js"

import '../style/footer.scss'

export default props => (
	<footer>
		<SubscribeForm slug={props.slug}/>
 	  	<p className="small-text">© {new Date().getFullYear()}</p>
   </footer>
)
