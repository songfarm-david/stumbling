# TODO: Stumbling Towards Enlightenment

## Todo Items
- Add Title and Meta description to homepage! SEO component!
- Test mailing list sign-up works and flow is good (see/test submission-created.js)
- Add comments flow for blog posts, add email field (see submission-created.js), make sure confirmation page link is correct, better style comments blocks (indenting)
    - plugin for this?
- add a site widget "see something wrong? Let us know!" which sends an email to me
- Make sure spam commments are slighted
- Add a 'popular articles' block at the end of posts (How to decide which posts?) Google Analytics?
- Add search capability
	* plugin: https://github.com/angeloashmore/gatsby-plugin-local-search
- fix link underline with technique for :after underline
- Get PWA working
- Configure [gatsby-source-wordpress](https://www.gatsbyjs.org/packages/gatsby-source-wordpress/) to negate certain URLs

## Website Notable Highlights
- Website done with Gatsby, content hosted on WordPress
- Pull in Post data from WP CMS and dynamically create pages
- Generate dynamic content sharing functionality per post
- Is a PWA

## Plugins to make PWA
- gatsby-plugin-manifest
- gatsby-plugin-offline
- gatsby-plugin-sw: https://www.gatsbyjs.org/packages/gatsby-plugin-sw/

## Continuous Deployment
- https://www.gatsbyjs.org/docs/deploying-to-netlify/

## Adding a 404 page
- https://www.gatsbyjs.org/docs/add-404-page/

## Site search
- Check out Algolia

## Site design
- https://mariohernandez.io/blog/adding-social-share-links-to-gatsby/
- a really great approach for a landing page: https://rachelandrew.co.uk/archives/2017/07/04/is-it-really-safe-to-start-using-css-grid-layout/

## Lambda Functions
bottom of this section: https://css-tricks.com/forms-auth-and-serverless-functions-on-gatsby-and-netlify/#article-header-id-8
More on lamdba functions:https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-handler.html#nodejs-prog-model-handler-callback
Learning about testing lambda functions and Identity: https://www.gatsbyjs.org/blog/2018-12-17-turning-the-static-dynamic/

## Resources
- Adding comments flow: https://css-tricks.com/jamstack-comments/

## Project Notes
This is a [Gatsby site](https://www.gatsbyjs.org/).  To run a gatsby site, run `gatsby-develop` in the command line for local development at [localhost:8000](http://localhost:8000/).
Committing and pushing changes to Github will start a fresh build at [www.stumblingtowardsenlightenment.com](www.stumblingtowardsenlightenment.com)