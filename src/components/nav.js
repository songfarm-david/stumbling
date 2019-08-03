import React from "react"
import { Link } from "gatsby"
import Helmet from "react-helmet"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRss } from '@fortawesome/free-solid-svg-icons'
import { dom, config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

const Nav = () => (
	<>
	<Helmet><style>{dom.css()}</style></Helmet>
	<nav>
		<div className="nav-section" id="topbar">
			<Link to="/rss.xml"><FontAwesomeIcon icon={faRss} /></Link>
		</div>
		<div className="nav-section" id="links">
			<Link to="/" className="nav-link">Home</Link>
			<Link to="/about" className="nav-link">About</Link>
			{/*<Link to="/testText" className="nav-link">Test Text</Link>*/}

		</div>
	</nav>
	</>
)

export default Nav
