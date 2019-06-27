import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "../style/header.css"

const Header = ({ siteTitle }) => (
  <header>
    <div className="header-inner">
      <Link to="/">
         <button>Home</button>
      </Link>
      <h1>
        <Link to="/">
          STE
        </Link>
      </h1>
      <Link to="/about">About</Link>
      <Link to="/rss.xml">RSS</Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
