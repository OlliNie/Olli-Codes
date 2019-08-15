import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import RenderProjects from '../components/RenderProjects';
import { projects } from '../content/projects';
import Tab from './Tab'
import { PROJECTS } from '../content/titles';
import MobileDevider from '../components/MobileDevider';
import Img from 'gatsby-image';
import styles from './projects.module.css';



export default ()=>{
  const data = useStaticQuery(graphql`
  query ProjectInfo {
    allMarkdownRemark (filter: {fileAbsolutePath: {regex: "/featured-projects/"}}){
      edges {
        node {
          id
          fields {
            slug
          }
          html
          frontmatter {
            title
            description
            date
            testimonial
            image {
              id
              childImageSharp {
                fluid(maxWidth: 786) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`)

const projects = data.allMarkdownRemark.edges.map(({node}, i) => {
  console.log('node66666', node.frontmatter.title);
    return <li key={i}>
      <section className={styles.container}>
        <h2 className={styles.title}>{node.frontmatter.title}</h2>
        <p>{node.frontmatter.description}</p>
        <Img className={styles.image} fluid={node.frontmatter.image.childImageSharp.fluid}></Img>
        {node.frontmatter.testimonial? <continer><h3 className={styles.testimonialTitle}>Testimonial</h3><p>{node.frontmatter.testimonial}</p></continer>:null} 
      </section>
    </li>
});

  return (
    <>
     <MobileDevider title={PROJECTS} />
     <ul>
       <li>hi</li>
       {projects}
     </ul>
      <section css={{ display: 'flex', marginBottom: '30px', alignItems: 'center', width: '100%' }}>
        <Tab title={PROJECTS} />
      
      </section>
    </>
  )
}