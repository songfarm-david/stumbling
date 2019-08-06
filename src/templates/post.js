import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import ShareComponent from "../components/social-share"
import CommentForm from "../components/comment-form"

import decodeHTML from "../functions/decode-html.js"

export default ({ data }) => {
   console.log('Data!', data);
   const props = {
      title: decodeHTML(data.wordpressPost.title),
      content: data.wordpressPost.content,
      postUrl: data.wordpressPost.link
   }

   const Comment = (comments, id) => {
      // for more info on formatting: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString#Examples
      let options = {
         weekday: 'short',
         year: 'numeric',
         month: 'long',
         day: 'numeric',
         hour: 'numeric',
         minute: 'numeric'
      }
      return comments.map((comment, i) => {
         console.log(comment.node.date);

         if (comment.node.post === id) {
            return (
               <div className="comment" key={i}>
                  <span className="author">{comment.node.author_name}</span>&nbsp;&mdash;&nbsp;
                  <span className="date">{new Date(comment.node.date).toLocaleDateString(undefined, options)}</span>
                  <p className="comment-body" dangerouslySetInnerHTML={{ __html: comment.node.content}} />
               </div>
            )
         }
      })
   }

   return (
      <Layout title={props.title} postUrl={props.postUrl} className="post">
         {/*<ShareComponent {...props} />*/}
         <div className="post-content">
            <h2>{decodeHTML(data.wordpressPost.title)}</h2>
            <div dangerouslySetInnerHTML={{ __html: data.wordpressPost.content}} />
            <ShareComponent {...props} />
         </div>
         <div className="comments-section">
            <h3>Comments:</h3>
            {Comment(
               data.allWordpressWpComments.edges,
               data.wordpressPost.wordpress_id
            )}
         </div>
         <CommentForm
            title={data.wordpressPost.title}
            postId={data.wordpressPost.wordpress_id} />
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
