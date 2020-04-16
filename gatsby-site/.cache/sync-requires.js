const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-post-js": hot(preferDefault(require("/home/tom/Documents/portfolioJS/Blog/gatsby-site/src/templates/post.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/tom/Documents/portfolioJS/Blog/gatsby-site/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/tom/Documents/portfolioJS/Blog/gatsby-site/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/tom/Documents/portfolioJS/Blog/gatsby-site/src/pages/index.js")))
}

