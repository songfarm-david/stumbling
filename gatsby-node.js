/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

/**
 * will be called by Gatsby whenever a new node is created (or updated)
 */
exports.onCreateNode = ({ node, getNode, actions }) => {
	const { createNodeField } = actions
	if (node.internal.type === 'wordpress__POST') {
		// do something
	}
}

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
				// console.log('creating page', JSON.stringify(node, null, 4))
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
			// console.log(JSON.stringify(result, null, 4))
			resolve()
		}).catch(error => {
			console.log(error)
			reject(error)
		})
	})
}

// NOTE: onCreatePages might be needed to replace internal links with Gatsby links
