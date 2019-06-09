import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import { useStaticQuery, graphql } from "gatsby";
import Layout from '../components/layout';

const ResumePage = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "pdf" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <h1>Resume</h1>
      <ul>
        {data.allFile.edges.map((file, index) => {
          return (
            <li key={`pdf-${index}`}>
              <img src={file.node.publicURL}/>
              <a href={file.node.publicURL} download>
                {file.node.name}
              </a>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}
export default ResumePage