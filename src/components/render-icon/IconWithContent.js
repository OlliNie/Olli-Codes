import React from 'react';
import styles from './iconWithContent.module.css'

export default ({ icon, text = null, link = null, func=null }) => {
  console.log('function', func);
  const content =
    <div className={styles.icon_with_content}>
      <p>{icon}</p>
      <p>{text}</p>
    </div>

  const allContent = ()=>{
    if(link && func === null){
     return <a href={link}>{content}</a> 
    }
    else if(func && link === null){
      return <section onClick={func}>{content}</section>
    }
    else{
      return content
    }
  }
 
  return allContent()
}