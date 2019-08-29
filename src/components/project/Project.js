import React from 'react';
import styles from './project.module.css';
import BackgroundImage from 'gatsby-background-image'

export default ({ project }) => {

  const handleLink = (link) => (<a className={styles.link} target="_blank" href={link.link}>{link.title}</a>);
  const linkList = () => {
    if (project.links) {
      return project.links.map((link, i) => {
        return (
          <li className={styles.hyperlink} key={i}>
            {handleLink(link)}
          </li>
        )
      } 
      ) 
    } else {
      return null
    }}
  
    const contentList = project.allContent.map((content, i) => (
      <li key={i}>
        <h4>{content.title}</h4>
        <p>{content.content}</p>
      </li>
    ))
    const headLine=
    <ul className={styles.headLine_items}>
      <li>{project.title}</li>
      {linkList()}
    </ul>
    return (

      <section className={styles.main}>
        <div />
        <BackgroundImage className={styles.bubble} fluid={project.img} />
        <h3 className={styles.headline}>{headLine}</h3>
        <section className={styles.center}>
          <div className={styles.text_container}>
            <ul>
              {contentList}
            </ul>
          </div>
        </section>
      </section>
    )
  }