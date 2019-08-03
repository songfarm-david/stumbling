import React from "react"
import { Link } from "gatsby"
import Helmet from "react-helmet"

import { config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRss } from '@fortawesome/free-solid-svg-icons'

// see: https://github.com/FortAwesome/react-fontawesome/issues/134
config.autoAddCss = false

const Nav = () => (
	<>
	{/*}<Helmet><style>{dom.css()}</style></Helmet>*/}
	<nav>
		<div className="nav-section" id="topbar">
			<Link to="/rss.xml"><FontAwesomeIcon fixedWidth size="1x" icon={faRss} /></Link>
		</div>
		<div className="nav-section" id="links">
			<Link to="/" className="nav-link">Home</Link>
			<Link to="/about" className="nav-link">About</Link>
		</div>
	</nav>
	</>
)

export default Nav
