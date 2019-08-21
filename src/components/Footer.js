import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "./footer.module.css"
export default function Footer() {
  const queryResult = useStaticQuery(graphql`
    query DateQuery {
      allFile(sort: { fields: modifiedTime, order: DESC }, limit: 1) {
        nodes {
          changeTime
        }
      }
    }
  `)
  const slicedDate = queryResult.allFile.nodes[0].changeTime.slice(0, 10)
  return (
    <footer className={styles.footer}>
      <p>Last Updated {slicedDate}</p>
    </footer>
  )
}
