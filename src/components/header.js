import React from "react"
import { Link } from "gatsby"

import Nav from './nav'

import '../style/header.scss';

const Header = ({ siteTitle }) => (
  <header>
    <div className="header-inner">
      <Nav />
      <h1 id="siteTitle" className="header"><Link to="/">Stumbling Towards Enlightenment</Link></h1>
    </div>
  </header>
)

export default Header
