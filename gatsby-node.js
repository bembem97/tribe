const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx(sort: { order: ASC, fields: frontmatter___date }) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  // ** Create blog post pages.
  const posts = result.data.allMdx.edges

  // ** you'll call `createPage` for each result
  posts.forEach(({ node }, index) => {
    const next = index === posts.length - 1 ? null : posts[index + 1].node
    const previous = index === 0 ? null : posts[index - 1].node

    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/articles.js`),
      context: {
        slug: node.fields.slug,
        previous,
        next,
      },
    })
  })

  // ** Create blog-list pages
  const postsPerPage = 2
  const numPages = Math.ceil(posts.length / postsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `blog` : `blog/${i + 1}`,
      component: path.resolve("./src/templates/blog-list.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}

// ** CREATE NODE FIELD
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: "slug",
      node,
      value: `/blog${value}`,
    })
  }
}
