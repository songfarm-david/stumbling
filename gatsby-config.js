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
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
         baseUrl: `https://stumblingtowardenlightenment.com`,
         protocol: `https`,
         hostingWPCOM: false,
         verboseOutput: true,
         useACF: false,
         auth: {
            htaccess_user: "bobo",
            htaccess_pass: "mr?8(+JSx7z4",
            htaccess_sendImmediately: false
         },
         // NOTE: here is where you can search and replace content links?
         // searchAndReplaceContentUrls: {
            // sourceUrl: "https://wcldn2018talk.wpengine.com",
            // replacementUrl: "https://wpheadless.indigotree.co.uk",
        // }
      }
   },
   {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-134764207-1",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Enables Google Optimize using your container Id
        optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Any additional create only fields (optional)
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "example.com",
      },
    },
    // `gatsby-plugin-catch-links`,
    // {
    //   resolve: "gatsby-remark-relative-links",
    //   options: {
    //     domainRegex: /http[s]*:\/\/[www.]*stumblingtowardsenlightenment\.com[/blog/]?/,
    //   }
    // }
    {
    resolve: 'gatsby-plugin-sw',
    options: {
      swPath: 'src/utils/service-worker.js', // Default to 'src/sw.js'
    },
  }
  ],
}
