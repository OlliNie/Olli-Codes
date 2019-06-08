import React from 'react'

import { Link, graphql, StaticQuery } from 'gatsby'
// import './post.css';
import Layout from '../components/layout'
const IndexPage = () => {

  return<StaticQuery
  query={graphql`
  query ListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields{
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM Do YYYY")
            title
          }
        }
      }
    }
  }
  `}render={data=>{
    console.log('data in blog page', data);
    const postList = data.allMarkdownRemark;
    console.log('postList', postList);
    return (
      <Layout>
        <div css={{height:'75px'}}></div>
        {postList.edges.map(({ node }, i) => 
     {
       console.log('node', node)
       return   (
        <Link to={node.fields.slug} className="link" >
          <div className="post-list" css={
            {
              border:'2px solid green',
              margin:'30px',
              padding:'10px',
              borderRadius:'20px'

            }}>
            <h1>{node.frontmatter.title}</h1>
            <span>{node.frontmatter.date}</span>
            <p>{node.excerpt}</p>
          </div>
        </Link>
      )
     }
        )}
      </Layout>
    )
  }}
  >
    </StaticQuery>
}


export default IndexPage;
