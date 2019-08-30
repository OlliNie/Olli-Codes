import React from 'react';
import TimeLineItem from './TimeLineItem'
import styles from './fullTimeLine.module.css'
import Heading from '../layout/Heading'


export default ({heading, timeline}) => {
  const list = timeline.map((instance, i) => {
    return (
      <li className={styles.li} key={i}>
        <TimeLineItem timeLineItem={instance} index={i} />
      </li>
    )
  })

  return (
    <section className={styles.main}>
      <Heading heading={heading}/>
      <ul className={styles.ul}>
        {list}
      </ul>
    </section>
  )
}
