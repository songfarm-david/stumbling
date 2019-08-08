import React from "react"
import { Link } from "gatsby"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRss } from '@fortawesome/free-solid-svg-icons'

// see: https://github.com/FortAwesome/react-fontawesome/issues/134
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

const Nav = () => (
	<>
		<nav>
			<div className="nav-section" id="topbar">
				<a href="/rss.xml" title="RSS Feed"><FontAwesomeIcon fixedWidth size="1x" icon={faRss} /></a>
			</div>
			<div className="nav-section" id="links">
				<Link to="/" className="nav-link">Home</Link>
				<Link to="/about" className="nav-link">About</Link>
			</div>
		</nav>
	</>
)

export default Nav
