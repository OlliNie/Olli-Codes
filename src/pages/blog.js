import React from 'react'

import { Link, graphql, StaticQuery } from 'gatsby'
import styles from './blog.module.css'
import Layout from '../components/layout/layout'
const IndexPage = () => {
  return <StaticQuery
    query={graphql`
    query ListQuery {
      allMarkdownRemark(filter: {fields: {slug: {regex: "/blog/"}}}, sort: {order: ASC, fields: [frontmatter___date]}) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM Do YYYY")
              title
              description
            }
          }
        }
      }
    }
    
  `} render = { data => {
      const postList = data.allMarkdownRemark.edges;
      const individualPost = ({ node }, i) => {
        return (
          <li key={i}>
            <Link to={node.fields.slug} >
              <section className={styles.blogThumbnail}>
                <h3 className={styles.title}>{node.frontmatter.title}</h3>
                <span>{node.frontmatter.date}</span>
                <p className={styles.description}> {node.frontmatter.description}</p>
              </section>
            </Link>
          </li>
        )
      };
      return (
        <Layout>
          <section className={styles.blogContainer}>
            <ul>
              { postList.map(individualPost) }
            </ul>
          </section>
        </Layout>
      )
    }}
  >
  </StaticQuery>
}

export default IndexPage;
