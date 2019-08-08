// this (optional) plugin enables Progressive Web App + Offline functionality
// To learn more, visit: https://gatsby.app/offline
// 'gatsby-plugin-offline',
// require('dotenv').config();
module.exports = {
   siteMetadata: {
      title: `Stumbling Towards Enlightenment`,
      description: `Spiritual writings on ...`,
      author: `Mickey Mouse`,
      siteUrl: 'https://stumblingtowardsenlightenment.com'
   },
   plugins: [
      'gatsby-plugin-sass',
      {
         resolve: `gatsby-source-wordpress`,
         options: {
            baseUrl: `wp.stumblingtowardsenlightenment.com`, // NOTE: subdomain must be used here
            protocol: `https`,
            hostingWPCOM: false,
            verboseOutput: true,
            useACF: false
         }
      },
      {
         resolve: `gatsby-plugin-feed`,
         options: {
            query: `
               {
                  site {
                     siteMetadata {
                        title
                        siteUrl
                        site_url: siteUrl
                     }
                  }
               }
            `,
            feeds: [
               {
                  serialize: ({ query: { site, allWordpressPost } }) => {
                     return allWordpressPost.edges.map(edge => {
                        let decodeHtmlEntity = function(str) {
                           return str.replace(/&#(\d+);/g, function(match, dec) {
                              return String.fromCharCode(dec);
                           });
                        };
                        return Object.assign({}, {
                           title: decodeHtmlEntity(edge.node.title),
                           description: decodeHtmlEntity(edge.node.excerpt),
                           url: edge.node.link,
                           guid: edge.node.id,
                           date: edge.node.date,
                        })
                     })
                  },
                  query: `
                     {
                        allWordpressPost(
                           limit: 100,
                           sort: { fields: [date], order: DESC }
                        ) {
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
                                 id
                              }
                           }
                        }
                     }
                  `,
                  output: "/rss.xml",
                  title: "Stumbling Towards Enlightenment Feed"
               },
            ],
        },
      },
      {
         resolve: `gatsby-plugin-google-analytics`,
         options: {
            trackingId: 'UA-134764207-1',
            head: false,
            respectDNT: true,
         },
      },
      {
         resolve: `gatsby-plugin-prefetch-google-fonts`,
         options: {
            fonts: [
               {
                  family: 'Anton'
               },
               {
                  family: 'Open Sans',
                  variants: [
                     '300','300i','400','400i','700','700i','900'
                  ]
               },
               {
                  family: 'Just Another Hand'
               }
            ],
         },
      }
   ]
}
