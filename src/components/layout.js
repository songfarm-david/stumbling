import React from "react"

import '../style/styles.scss'

import Header from "./header"
import Footer from "./footer"
import Modal from './modal'

// NOTE: uses a StaticQuery because components cannot query graphql normally: https://www.gatsbyjs.org/tutorial/part-four/#use-a-staticquery

export default props => {
   console.log('loggin props', );
   return (
      <>
         <Header />
         <main className={props.className}>
            {props.children}
         </main>
         <Footer slug={props.slug} />
         <Modal path={window.location.search}/>
      </>
   )
}
