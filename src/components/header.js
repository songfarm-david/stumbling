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
      <Link to="/page-2">About</Link>
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
