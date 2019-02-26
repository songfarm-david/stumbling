import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import ShareComponent from "../components/social-share"

export default ({location, data}) => {
   console.log('inside post', location, data);
   // console.log('Yeah!!!', data);
   const post = data.wordpressPost
   // console.log(JSON.stringify(location, null, 4))
   const props = {
      title: post.title,
      content: post.content,
      postUrl: post.link
   }

   return (
      <Layout>
         <h2>{props.title}</h2>
         <div dangerouslySetInnerHTML={{ __html: props.content}} />
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
      }
   }
`

// function htmlDecode(input){
//    var e = document.createElement('div');
//    e.innerHTML = input;
//    // handle case of empty input
//    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
// }
