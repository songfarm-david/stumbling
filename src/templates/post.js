import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import ShareComponent from "../components/social-share"

import decodeHTML from "../../functions/decode-html.js"

export default ({ data }) => {
   // console.log('Data!', data);
   const props = {
      title: decodeHTML(data.wordpressPost.title),
      content: data.wordpressPost.content,
      postUrl: data.wordpressPost.link
   }
   return (
      <Layout title={props.title} postUrl={props.postUrl}>
         <ShareComponent {...props} />
         <h2>{decodeHTML(data.wordpressPost.title)}</h2>
         <div dangerouslySetInnerHTML={{ __html: data.wordpressPost.content}} />
         <ShareComponent {...props} />
      </Layout>
   )
}

export const query = graphql`
   query($id: String!) {
      wordpressPost(id: {eq: $id}) {
        id
        title
        content
        date
        modified
        slug
        link
      }
   }
`
