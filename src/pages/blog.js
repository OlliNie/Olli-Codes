import React from 'react'

import { Link, graphql, StaticQuery } from 'gatsby'
import styles from './blog.module.css'
import Layout from '../components/layout'
const IndexPage = () => {

  return <StaticQuery
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
  `} render={data => {
      const postList = data.allMarkdownRemark;
      return (
        <Layout>
          <container>
            <div className={styles.spacer}></div>
            {postList.edges.map(({ node }, i) => {
              return (
                <Link key={i} to={node.fields.slug} className="link" >
                  <div className={styles.blogThumbnail}>
                    <h1>{node.frontmatter.title}</h1>
                    <span>{node.frontmatter.date}</span>
                    <p>{node.excerpt}</p>
                  </div>
                </Link>
              )
            }
            )}
          </container>>
      </Layout>
      )
    }}
  >
  </StaticQuery>
}


export default IndexPage;
