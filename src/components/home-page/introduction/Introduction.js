import React from 'react';
import Img from 'gatsby-image';
import styles from './introduction.module.css';
import { aboutMe, title } from '../../../content/aboutMe';
import { StaticQuery, graphql } from "gatsby";
import HeadshotWithText from './HeadShotWithText';


export default function Profile() {
   return (
        <section className={styles.main}>
          <HeadshotWithText/>
        </section>
      )
}

