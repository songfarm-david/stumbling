import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ShareComponent from "../components/social-share"

import decodeHTML from "../functions/decode-html.js"

export default ({ data }) => {
   console.log(data.site.siteMetadata.siteUrl)
   return (
      <Layout className="page">
        <SEO
         title="Stumbling Towards Enlightenment - Home"
         description=""
         keywords={[``, ``, ``]}
        />
        {/*<ShareComponent title={data.site.siteMetadata.title} postUrl={data.site.siteMetadata.siteUrl} />*/}
        <hr />
        <h4 className="small-bold-header">All Posts</h4>
        {data.allWordpressPost.edges.map(({ node }, index) => (
           <div key={index}>
               <h3>
                  <Link to={node.slug} state={{ post: node }}>
                     {decodeHTML(node.title)}
                  </Link>
               </h3>
               <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
               <Link to={node.slug} state={{ post: node }}>Read more</Link>
           </div>
        ))}
        <br />
        <hr />
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
