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
    var offset = new Date().getTimezoneOffset();

    postDate = Date.UTC(splitDate[0],parseInt(splitDate[2])-1+"", splitDate[4],splitDate[6],splitDate[8])

    var diff = currentDate - postDate;

    //Exact
    var mins = -(offset-Math.round(diff/(1000*60)));
    var hours = -((offset/60)-Math.round(diff/(1000*60*60)));
    var days = -(Math.round(offset/(60*24))-Math.round(diff/(1000*60*60*24)));

    if(days===0)
    {
      if(hours===0)
        if(mins===1||mins===0)
          return "1 min ago"
        else
          return mins + " mins ago"
      else if(hours>days) 
        if(hours===1)
          return "1 hour ago"
        else
          return hours + " hours ago"
    } 
    else
      if(days === 1)
         return "1 day ago"
      if(days<30)
        return days+ " days ago"
      else if(days>=30 && days<=60)
        return "1 month ago"
      else if(days>30 && days<365)
          return days%30 + " months ago"
      else
        if(days/365 === 1)
          return "1 year ago"
        else
          return Math.trunc(days/365) + " years ago"
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
