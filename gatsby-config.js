module.exports = {
  siteMetadata: {
    title: `Olli Nieminen | JavaScript Developer`,
    description: `Olli Nieminen is a software developer located in Portland Oregon specializing in React and Node.js`,
    content: 'java script, web development, full stack, back-end, front-end, node, react, seo',
    author: `Olli Nieminen`,
    siteUrl: `https://www.olli.codes`
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.olli.codes',
 
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
          `gatsby-remark-copy-linked-files`
      ]
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name:'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name:'featured-projects',
        path: `${__dirname}/src/featured-projects`,
      },
    },

    {
      resolve:'gatsby-plugin-postcss',
      options:{
        postCssPlugins: [
          require('postcss-nested')
        ]
      }
    },
    `gatsby-plugin-glamor`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-pdf`,
   
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        verbose: true,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/ 
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
      resolve: 'gatsby-plugin-copy-files',
      options: {
          source: `${__dirname}/src/public`,
          destination: ''
      }
  },
  
  {
      resolve: 'gatsby-plugin-copy-files',
      options: {
          source: `${__dirname}/src/data`,
          destination: '/data'
      }
  }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
