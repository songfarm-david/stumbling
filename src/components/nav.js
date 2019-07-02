import React from "react"
import { Link } from "gatsby"


const Nav = () => (
	<nav>
		<div className="nav-section" id="topbar">
			<Link to="/rss.xml">RSS</Link>
		</div>
		<div className="nav-section" id="links">
			<Link to="/" className="nav-link">Home</Link>
			<Link to="/about" className="nav-link">About</Link>
		</div>
	</nav>
)

export default Nav
