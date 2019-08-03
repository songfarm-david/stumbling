import React from "react"

// import "./default-reset.css"
// import "../style/layout.css"

import { dom } from '@fortawesome/fontawesome-svg-core'
dom.css()
import '../style/styles.scss'

import Header from "./header"
import Footer from "./footer"

// NOTE: uses a StaticQuery because components cannot query graphql normally: https://www.gatsbyjs.org/tutorial/part-four/#use-a-staticquery

export default props => {
   return (
      <>
         <Header />
         <main className={props.className}>
            {props.children}
         </main>
         <Footer />
      </>
   )
}
