import React from 'react'
import styles from './timeLineItem.module.css'

import BackgroundImage from 'gatsby-background-image'


export default ({ timeLineItem, index }) => {
  console.log('timeLineItem', timeLineItem.title);

  let bubble = styles.bubble;
  let main = styles.main;
  let yAxis = styles.y_axis;
  let leader = styles.leader
  if (index % 2 === 0) {
    yAxis = styles.y_axis_right
    main = styles.main_right
    bubble = styles.bubble_right
    leader = styles.leader_right
  }

  return (
    <section className={main}>
      <section className={styles.x_axis}>
        <section className={leader}></section>
        <section className={yAxis}>
          <ul className={styles.ul}>
          {
            timeLineItem.allContent.map((content, i) => {
              return (
                <li key={i}>
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
      <BackgroundImage className={bubble} fluid={timeLineItem.img} />
    </section>
  )
}
