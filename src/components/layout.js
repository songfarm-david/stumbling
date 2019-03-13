import React from "react"
import { StaticQuery, graphql } from "gatsby"

import "./default-reset.css"
import "../style/layout.css"

import Header from "./header"
import Footer from "./footer"

// NOTE: uses a StaticQuery because components cannot query graphql normally: https://www.gatsbyjs.org/tutorial/part-four/#use-a-staticquery

export default ({ children }) => (
   <>
      <Header />
      <div>
         <main className="content-width">
            {children}
         </main>
      </div>
      <Footer />
   </>

)
