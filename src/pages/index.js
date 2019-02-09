import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
   console.log(data)
   return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <h4 className="small-bold-header">All Posts</h4>
        {data.allWordpressPost.edges.map(({ node }, index) => (
           <div key={index}>
               <h3>{node.title}</h3>
               <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
           </div>
        ))}
      </Layout>
   )

}

// export default IndexPage

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
            }
         }
      }
   }
`
