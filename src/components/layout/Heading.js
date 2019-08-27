import React from 'react';
import styles from './heading.module.css'

export default ({heading}) => (
  <section className={styles.main}>
    <div></div>
    <h1>{heading}</h1>
    <div></div>
  </section>
)