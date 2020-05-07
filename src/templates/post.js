import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import "../components/styles.css"


export default function Template({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  
  
  return (
    <>
      <Header/>
      <div className="blog-post">
        <div className="sub-header">
          <h1>{frontmatter.title}</h1>
          <p className="desc">{frontmatter.desc}<small className="desc">  -  {frontmatter.date}</small></p>
          <hr/>
        </div>
        <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
      <Footer/>
    </>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        desc
        title
        titleimg
        visible
      }
    }
  }
`
