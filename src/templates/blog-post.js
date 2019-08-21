import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby'
import styles from './blog-post.module.css'

function BlogPost(props) {

    const post = props.data.markdownRemark;
    const { title, description } = post.frontmatter;
    return ( 
        <Layout>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.description}>{description}</p>
            <div className={styles.div}>
            <div className={styles.mdHtml} dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </Layout>
    )
}
export default BlogPost;
export const query = graphql`
 query PostQuery($slug: String!) {
     markdownRemark(fields: { slug: { eq: $slug } }) {
       html
       frontmatter {
        title
        description
        image {
            id
            childImageSharp {
              resize(width: 1500, height: 1500) {
                  src
                }
                fluid(maxWidth: 786) {
                  ...GatsbyImageSharpFluid
                }
            }
          }
       }
   }
}`