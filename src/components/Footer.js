import React from 'react';
import {UPDATED} from '../content/footer';
import { useStaticQuery, graphql } from "gatsby"
export default function Footer(){
  const updateDate = useStaticQuery(graphql`
  query DateQuery {
    allFile(sort: {fields: modifiedTime, order: DESC}, limit: 1) {
      nodes {
        id
        changeTime
      }
    }
  }
  
  `)
  console.log('last modified time', updateDate.allFile.nodes[0].changeTime.slice(0, 10));
  const dateUpdated = updateDate.allFile.nodes[0].changeTime.slice(0, 10);
  return(
    <footer css={{height:'50px', display:'flex', backgroundColor:'#99cc00', width:'100%', justifyContent:'center'}}>
    <p css={{alignSelf:'center', margin:'0'}}>Last Updated {dateUpdated}</p>
  </footer>
  )
}