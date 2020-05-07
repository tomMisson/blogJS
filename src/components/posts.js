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
            date
            path
            visible
          }
        }
      }
    }
  }
  `)

  const timeDiff = (postDate) => {
    var currentDate = Date.now()
    var splitDate = postDate.split(/([-\s:])/g)

    postDate = Date.UTC(splitDate[0],parseInt(splitDate[2])-1+"", splitDate[4],splitDate[6],splitDate[8])

    var diff = currentDate - postDate;

    // //Exact
    var secondsDiff = Math.round(diff/1000);
    var minsDiff = Math.round(secondsDiff/60);
    var hoursDiff = Math.round(minsDiff/60);
    var days = Math.round(hoursDiff/24);

    //Relative
    hoursDiff = Math.round(hoursDiff-(days*24))
    minsDiff = Math.round(minsDiff - hoursDiff*60)
    secondsDiff = Math.round(secondsDiff -(minsDiff*60))

    console.log("Difference:" + days + " " + hoursDiff + " " + minsDiff + " " + secondsDiff)
  }

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
              <small>{post.node.frontmatter.theme} - {timeDiff(post.node.frontmatter.date)}</small> 
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
              <small>{timeDiff(post.node.frontmatter.date)}</small>
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
              <small>{post.node.frontmatter.theme} - {timeDiff(post.node.frontmatter.date)}</small> 
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
                <small>{timeDiff(post.node.frontmatter.date)}</small>
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
