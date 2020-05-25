module.exports = {
  siteMetadata: {
    title: `The drink powered blogathon`,
    description: `Welcome to my corner of the internet! This page will detail hacks and bodges I have done with tech, travel, food and drink and just about anything else under the sun that I want to write about.`,
    author: `Tom Misson`,
    theme_color:'#fc9403',
    siteUrl: `https://blog.tommisson.uk`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
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
        name: `Tom Misson Blog`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#fc9403`,
        theme_color: `#fc9403`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-plugin-sharp`,
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                // It's important to specify the maxWidth (in pixels) of
                // the content container as this plugin uses this as the
                // base for generating different widths of each image.
                maxWidth: 590,
              },
            },
          ],
        },
      },
  ],
}
