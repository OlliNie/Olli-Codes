import React from 'react'
import styles from './timeLineItem.module.css'

import BackgroundImage from 'gatsby-background-image'
import { style } from 'glamor';


export default ({ timeLineItem, index }) => {


  
  let main = styles.main;
  let yAxis = styles.y_axis;
  let leader = styles.leader;
  let bubbleContainer = styles.bubble_container_left;
  if (index % 2 === 0) {
    yAxis = styles.y_axis_right
    main = styles.main_right
    leader = styles.leader_right
    bubbleContainer = styles.bubble_container_right
  }

  return (
    <section className={main}>
      <section className={styles.x_axis}>

        <section className={yAxis}>
          <ul className={styles.ul}>
            {
              timeLineItem.allContent.map((content, i) => {
                return (
                  <li  key={i}>
                    <section className={styles.text_container}>
                      <h3>{content.title}</h3>
                      <h4>{content.subTitle}</h4>
                      <h5>{content.date}</h5>
                      {content.content}
                    </section>
                  </li>
                )
              })
            }
          </ul>
        </section>
      </section>

      <section className={bubbleContainer}>
        <section className={leader}></section>
        <BackgroundImage className={styles.bubble} fluid={timeLineItem.img} />
      </section>



    </section>
  )
}
