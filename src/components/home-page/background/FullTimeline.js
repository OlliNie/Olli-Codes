import React from 'react';
import TimeLineItem from './TimeLineItem'
import styles from './fullTimeLine.module.css'
import Heading from '../../layout/Heading'
import backgroundTimeLineData from '../../../content/backgroundTimeLineData'


export default () => {
  const timeLine = backgroundTimeLineData()

  const list = timeLine.map((instance, i) => {
    return (
      <li key={i}>
        <TimeLineItem timeLineItem={instance} index={i} />
      </li>
    )
  })

  return (
    <section className={styles.main}>
      <Heading heading='Background'/>
      <ul className={styles.ul}>
        {list}
      </ul>
    </section>
  )
}
