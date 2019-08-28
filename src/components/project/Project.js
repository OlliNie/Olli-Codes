import React from 'react';
import styles from './project.module.css';
import BackgroundImage from 'gatsby-background-image'

export default ({ project }) => {
  console.log('project', project);

  const handleLink = (link) => (<a target="_blank" href={link.link}>{link.title}</a>);
  const linkList = () => {
    if (project.links) {
      return project.links.map((link, i) => {
        return (
          <ul key={i}>
            {handleLink(link)}
          </ul>
        )
      } 
      ) 
    } else {
      return null
    }
    
    }
    const contentList = project.allContent.map((content, i) => (
      <li key={i}>
        <h4>{content.title}</h4>
        <p>{content.content}</p>
      </li>
    ))
    return (

      <section className={styles.main}>

        <div />
        <BackgroundImage className={styles.bubble} fluid={project.img} />
        <h3>{project.title}</h3>
        <section className={styles.center}>
          <div className={styles.text_container}>
            <ul>
              {contentList}
              <li><h4>Links</h4>{linkList()}</li>
            </ul>

          </div>
        </section>
      </section>
    )
  }