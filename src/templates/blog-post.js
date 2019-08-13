import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby'
import styles from './blog-post.module.css'
import Img from 'gatsby-image';
function BlogPost(props) {

    const post = props.data.markdownRemark;
    const { title } = post.frontmatter;
    return (
        <Layout>
            <h1 css={{paddingTop:'100px'}}>{title}</h1>
            <div className={styles.div}>
            <Img css={{maxWidth: '60%', margin:'auto'}}fluid={post.frontmatter.image.childImageSharp.fluid} />
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
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