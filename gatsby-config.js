// this (optional) plugin enables Progressive Web App + Offline functionality
// To learn more, visit: https://gatsby.app/offline
// 'gatsby-plugin-offline',

module.exports = {
  siteMetadata: {
    title: `Stumbling Towards Enlightenment`,
    description: `Spiritual writings on ...`,
    author: `Mickey Mouse`,
    siteUrl: 'https://stumblingtowardsenlightenment.com'
  },
  plugins: [
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
                   console.log('inside serialize', allWordpressPost);
                   return allWordpressPost.edges.map(edge => {
                      var decodeHtmlEntity = function(str) {
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
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
         baseUrl: `https://stumblingtowardenlightenment.com`,
         protocol: `https`,
         hostingWPCOM: false,
         verboseOutput: true,
         useACF: false,
         auth: {
            htaccess_user: process.env.USERNAME,
            htaccess_pass: process.env.PASSWORD,
            htaccess_sendImmediately: false
         },
         // NOTE: here is where you can search and replace content links?
         // searchAndReplaceContentUrls: {
            // sourceUrl: "https://wcldn2018talk.wpengine.com",
            // replacementUrl: "https://wpheadless.indigotree.co.uk",
        // }
      }
    }, {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_CODE,
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/path/to/**", "/do-not-track/me/too/"],
        // Enables Google Optimize using your container Id
        optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Any additional create only fields (optional)
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "stumblingtowardsenlightenment.com",
      },
    },
   // {
   //    resolve: 'gatsby-plugin-sw',
   //    options: {
   //       swPath: 'src/utils/service-worker.js', // Default to 'src/sw.js'
   //    },
   // }
   ],
}
