import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
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
            github
            url
            image {
              id
              childImageSharp {
                resize(width: 600, height: 350){
                  src
                }
                fluid(maxHeight: 700) {
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
    const github = node.frontmatter.github;
    const url = node.frontmatter.url;
    return <li key={i}>
      <section className={styles.project_container}>
        <h2 className={styles.title}>{node.frontmatter.title}</h2>
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
        <section className={styles.links}>
          {github !== 'none' ? <a href={node.frontmatter.github} target="_blank">See the Code</a> : null}
          {url !== 'none' ? <a href={node.frontmatter.url} target="_blank">Vist the Site</a> : null}
        </section>
      </section>
    </li>
  });

  return (
    <section className={styles.projectsContainer}>
      <DesktopDevider title={'PROFESSIONAL CODE'} />
      <ul className={styles.all_projects}>
        {projects}
      </ul>
    </section>
  )
}