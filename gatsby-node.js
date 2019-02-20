/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
	const {createPage} = actions

	return new Promise((resolve, reject) => {
		graphql(`
			{
				allWordpressPost(sort: { fields: [date], order: DESC}) {
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
				}
			}
		`).then(result => {
			result.data.allWordpressPost.edges.forEach(({ node }) => {
				createPage({
					path: node.slug,
					component: path.resolve('./src/templates/post.js'),
					context: {
						slug: node.slug,
						content: node.content
					}
				})
			})
			// console.log(JSON.stringify(result, null, 4))
			resolve()
		})
	})
}

// NOTE: onCreatePages might be needed to replace internal links with Gatsby links
