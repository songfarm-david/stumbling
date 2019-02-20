import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
   console.log(data)

   function htmlDecode(input){
      var e = document.createElement('div');
      e.innerHTML = input;
      // handle case of empty input
      return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
   }

   return (
      <Layout>
        <SEO title="Home" description="how are you?" keywords={[`gatsby`, `application`, `react`]} />
        <h4 className="small-bold-header">All Posts</h4>
        {data.allWordpressPost.edges.map(({ node }, index) => (
           <div key={index}>
               <h3>
                  <Link to={node.slug} state={{ post: node }}>
                     {htmlDecode(node.title)}
                  </Link>
               </h3>
               <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
               <Link to={node.slug} state={{ post: node }}>Read more</Link>
           </div>
        ))}
      </Layout>
   )

}

export const query = graphql`
   query {
      allWordpressPost(sort: { fields: [date], order: DESC }) {
         edges {
            node {
              title
              date(formatString: "MMMM DD, YYYY")
              modified(formatString: "MMMM DD, YYYY")
              slug
              link
              excerpt
              wordpress_id
              content
            }
         }
      },
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
