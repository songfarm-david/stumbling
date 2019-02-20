import React from "react"
import { graphql } from "gatsby"

import "./default-reset.css"
import "../style/layout.css"
import Header from "./header"
import Footer from "./footer"
import ShareComponent from "./social-share"

const Layout = ({ data, children }) => (
   <>
   <Header />
   <div>
      <main className="content-width">
         <ShareComponent />
         {children}
      </main>
   </div>
   <Footer />
   </>
)

export default Layout

export const query = graphql`
   query {
      site {
         siteMetadata {
            title
            description
            author
            siteUrl
         }
      }
   }
`
