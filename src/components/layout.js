import React from "react"
// import PropTypes from "prop-types"
// import { StaticQuery, graphql } from "gatsby"

import "./default-reset.css"
import "../style/layout.css"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => (
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
// const Layout = ({ children }) => (
//   <StaticQuery
//     query={graphql`
//       query SiteTitleQuery {
//         site {
//           siteMetadata {
//             title
//           }
//         }
//       }
//     `}
//     render={data => (
//       <>
//       <Header />
//       <div>
//          <main>
//             {children}
//          </main>
//          <footer>
//             © {new Date().getFullYear()}
//          </footer>
//       </div>
//       </>
//     )}
//   />
// )

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
