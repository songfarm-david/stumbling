import React from "react"
import { Link } from "gatsby"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRss } from '@fortawesome/free-solid-svg-icons'

const Nav = () => (
	<nav>
		<div className="nav-section" id="topbar">
			<Link to="/rss.xml" className="rss-icon"><FontAwesomeIcon icon={faRss} /></Link>
		</div>
		<div className="nav-section" id="links">
			<Link to="/" className="nav-link">Home</Link>
			<Link to="/about" className="nav-link">About</Link>
			{/*<Link to="/testText" className="nav-link">Test Text</Link>*/}

		</div>
	</nav>
)

export default Nav
