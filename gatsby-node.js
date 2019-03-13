/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions

	return new Promise((resolve, reject) => {
		graphql(`
			{
				allWordpressPost {
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
		`).then(result => {
			result.data.allWordpressPost.edges.forEach(({ node }) => {
				createPage({
					path: node.slug,
					component: path.resolve('./src/templates/post.js'),
					context: {
						id: node.id,
						title: node.slug,
						content: node.content
					}
				})
			})
			resolve()
		}).catch(error => {
			console.log(error)
			reject(error)
		})
	})
}
