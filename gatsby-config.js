module.exports = {
   flags: { PRESERVE_WEBPACK_CACHE: true },
   siteMetadata: {
      title: "Tribu",
   },
   plugins: [
      "gatsby-plugin-gatsby-cloud",
      "gatsby-plugin-image",
      "gatsby-plugin-react-helmet",
      "gatsby-plugin-sharp",
      "gatsby-plugin-material-ui",
      "gatsby-transformer-sharp",
      {
         resolve: "gatsby-source-filesystem",
         options: {
            name: "images",
            path: `${__dirname}/src/images/`,
         },
         __key: "images",
      },

      {
         resolve: "gatsby-source-filesystem",
         options: {
            name: `blogs`,
            path: `${__dirname}/src/pages/blogs/`,
         },
      },

      {
         resolve: "gatsby-plugin-mdx",
         options: {
            defaultLayouts: {
               default: require.resolve(`${__dirname}/src/components/blog.js`),
            },
         },
      },
   ],
}
