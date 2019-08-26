import React from 'react'
import Img from 'gatsby-image'
import styles from './headShotWithText.module.css'
import { useStaticQuery, graphql } from "gatsby"
import { aboutMe, title } from '../../../content/aboutMe';

export default function headShotWithText(){
  const images  = useStaticQuery(graphql`
  {
    faceShot: file(relativePath: {eq:"OllieNieminen.png"}){
      childImageSharp{
        fluid(maxWidth:1000){
              ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `)
  return(
    <section className={styles.main}>
      <section className={styles.container_title_text}>
        <h4>{title}</h4>
      </section>
      <div>
        <Img fluid={images.faceShot.childImageSharp.fluid} className={styles.img_headshot} />
      </div>
        <section className={styles.container_text}>
          <h3 className={styles.desktop_title}>{title}</h3>
          <p>{aboutMe}</p>
        </section>
    </section>
  )
}