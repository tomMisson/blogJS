module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Tom Misson Blog","short_name":"starter","start_url":"/","background_color":"#fc9403","theme_color":"#fc9403","display":"minimal-ui","icon":"src/images/icon.png"},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":590},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
