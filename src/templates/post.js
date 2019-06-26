import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import ShareComponent from "../components/social-share"
import CommentForm from "../components/comment-form"

import decodeHTML from "../functions/decode-html.js"

export default ({ data }) => {
   // console.log('Data!', data);
   const props = {
      title: decodeHTML(data.wordpressPost.title),
      content: data.wordpressPost.content,
      postUrl: data.wordpressPost.link
   }

   // print all query data
   // console.log(data);

   const Comment = (comments, id) => {
      // console.log(comments);
      return comments.map((comment, i) => {
         // console.log(comment.node);
         if (comment.node.post === id) {
            return (
               <div key={i}>
                  <p>{comment.node.author_name}</p>
                  <p>{comment.node.date}</p>
                  <p dangerouslySetInnerHTML={{ __html: comment.node.content}} />
               </div>
            )
         }
      })
   }

   return (
      <Layout title={props.title} postUrl={props.postUrl}>
         <ShareComponent {...props} />
         <h2>{decodeHTML(data.wordpressPost.title)}</h2>
         <div dangerouslySetInnerHTML={{ __html: data.wordpressPost.content}} />
         <ShareComponent {...props} />
         <h3>Comments:</h3>
         {Comment(data.allWordpressWpComments.edges, data.wordpressPost.wordpress_id)}
         <CommentForm title={data.wordpressPost.title} postId={data.wordpressPost.wordpress_id} />
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
         wordpress_id
      }
      allWordpressWpComments(sort: { fields: [date], order: ASC }) {
         edges {
            node {
               author {
                  name
               }
               author_name
               content
               post
               date
            }
         }
       }
   }
`
