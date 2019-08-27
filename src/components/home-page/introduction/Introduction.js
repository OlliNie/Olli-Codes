import React, { useState } from 'react'
import Img from 'gatsby-image'
import styles from './introduction.module.css'
import { useStaticQuery, graphql } from "gatsby"
import { aboutMe, title } from '../../../content/aboutMe'
import { desktopContactIcons, contactMe } from '../../../content/contact'
import RenderIcon from '../../render-icon/RenderIcon'
import { FaEnvelope } from 'react-icons/fa';


export default function headShotWithText(){
  const [navState, setNavState] = useState(
    {
      display:'about_me'
    }
  );
  const updateClick = ()=>{
    const textToDisplay = ()=> navState.display === 'about_me' ? 'contact' : 'about_me';
    setNavState({ display: textToDisplay()});
  };


  const iconsWithToggleText = [...desktopContactIcons, {
    icon: <FaEnvelope/>,
    function: updateClick
  }]

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
          {navState.display === 'about_me' ? <h3 className={styles.desktop_title}>{title}</h3> : <h3 className={styles.desktop_title}>{contactMe.title}</h3>}
          <section className={styles.mobile_contact}>
          <RenderIcon iconArray={iconsWithToggleText} direction='row' color='rgba(19, 32, 25, 1)'/>
          </section>
          {navState.display === 'about_me' ? <p>{aboutMe}</p> : <p>{contactMe.content}</p>}
        </section>
      <section className={styles.desktop_contact}>
        <RenderIcon iconArray={iconsWithToggleText} direction='column' color='rgba(19, 32, 25, 1)'/>
      </section>
    </section>
  )
}