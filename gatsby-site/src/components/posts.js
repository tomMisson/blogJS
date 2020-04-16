import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import "./styles.css"

const Posts = () => {
  const data = useStaticQuery(graphql`
  query pageData {
    allMarkdownRemark (
      sort: {
        fields: [frontmatter___date]
        order: DESC
      }
    ){
      edges {
        node {
          frontmatter {
            title
            titleimg
            theme
            desc
            date(fromNow: true)
            path
            visible
          }
        }
      }
    }
  }
  `)

  return (
   <>
    {
      data.allMarkdownRemark.edges.map( post => {
      
        if(!post.node.frontmatter.visible)
        {
          return(
            <>
            </>
          )
        }

        if(post.node.frontmatter.theme !== null && post.node.frontmatter.titleimg !== null)
        {
          return (
            <Link className="postLink" to={post.node.frontmatter.path} key={post.node.frontmatter.path}>
            <section className="post">
              <div>
                <img alt="title card" width="100" height="100" src={post.node.frontmatter.titleimg}/>
              </div>
              <h3>{post.node.frontmatter.title}</h3>
              <p>{post.node.frontmatter.desc}</p>
              <small>{post.node.frontmatter.theme} - {post.node.frontmatter.date}</small> 
            </section>
            </Link>
          )
        }
        else if(post.node.frontmatter.titleimg !== null)
        {
          return (
            <Link className="postLink" to={post.node.frontmatter.path} key={post.node.frontmatter.path}>
            <section className="post">
              <div>
                <img alt="title card" width="100" height="100" src={post.node.frontmatter.titleimg}/>
              </div>
              <h3>{post.node.frontmatter.title}</h3>
              <p>{post.node.frontmatter.desc}</p>
              <small>{post.node.frontmatter.date}</small>
            </section>
            </Link>
          )
        }

        else if(post.node.frontmatter.theme !== null)
        {
          return (
            <Link className="postLink" to={post.node.frontmatter.path} key={post.node.frontmatter.path}>
            <section className="post">
              <h3>{post.node.frontmatter.title}</h3>
              <p>{post.node.frontmatter.desc}</p>
              <small>{post.node.frontmatter.theme} - {post.node.frontmatter.date}</small> 
            </section>
            </Link>
          )
        }

        else{
          return (
            <Link className="postLink" to={post.node.frontmatter.path} key={post.node.frontmatter.path}>
              <section className="post">
                <h3 className="lone">{post.node.frontmatter.title}</h3>
                <p>{post.node.frontmatter.desc}</p>
                <small>{post.node.frontmatter.date}</small>
              </section>
            </Link>
          )
        }
      })
    }
   </>
  )
}

export default Posts
