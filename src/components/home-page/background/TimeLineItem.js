import React from 'react'
import styles from './timeLineItem.module.css'
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'


export default ({timeLineItem, index}) => {

let bubble = styles.bubble;
let main = styles.main;
let yAxis = styles.y_axis;
let leader = styles.leader
if(index % 2 === 0){
  yAxis = styles.y_axis_right
  main = styles.main_right
  bubble = styles.bubble_right
  leader = styles.leader_right
}

return(
  <section className={main}>
    <section className={styles.x_axis}>
      <section className={leader}></section>
      <section className={yAxis}>  
            <section className={styles.text_container}>
              {timeLineItem.content}
            </section> 
      </section>
    </section>
      <BackgroundImage className={bubble} fluid={timeLineItem.img}/>
  </section>
)
}
