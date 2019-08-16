import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import RenderProjects from '../components/RenderProjects';
import { projects } from '../content/projects';
import Tab from './Tab'
import { PROJECTS } from '../content/titles';
import MobileDevider from '../components/MobileDevider';
import Img from 'gatsby-image';
import styles from './projects.module.css';
import DesktopDevider from './DesktopDevider';



export default () => {
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

  const projects = data.allMarkdownRemark.edges.map(({ node }, i) => {
    console.log('node66666', node.frontmatter.title);
    return <li key={i}>
      <>
        
        <section className={styles.project_container}>
          <h2 className={styles.title}>--{node.frontmatter.title}--</h2>
          <p>{node.frontmatter.description}</p>
          <section className={styles.img_text_container} >
            <Img className={styles.image} fluid={node.frontmatter.image.childImageSharp.fluid}></Img>
            {node.frontmatter.testimonial ?
              <container className={styles.text_container}>
                <p >{node.frontmatter.testimonial}</p>
              </container> :
              <container className={styles.text_container}>
                <div className={styles.text_container} dangerouslySetInnerHTML={{ __html: node.html }} />
              </container>}
          </section>



        </section>
      </>
    </li>
  });

  return (
    <section className={styles.projectsContainer}>
      <DesktopDevider title={'Professional Projects'}/>
    
      <ul className={styles.all_projects}>
        {projects}
      </ul>

    </section>
  )
}