import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Layout from "../components/layout/layout";
import Profile from '../components/home-page/introduction/Introduction';
import PastExperience from '../components/home-page/background/Background';
import AllProjects from '../components/project/AllProjects';
import { Helmet } from 'react-helmet';

//testing

import projectsTimeLineData from '../content/projectsTimeLineData';





const IndexPage = () => (

  <StaticQuery query={graphql`
  query metaData {
    site{
        siteMetadata {
          title
          description
          author
          content
        }
      }
    }
    `
  } render={(data) => {
    const stuff=projectsTimeLineData;

    return (
      
      <Layout>
        <Helmet htmlAttributes={{lang: 'en'}}>
          <title>{data.site.siteMetadata.title}</title>
          <meta name="Description" content={data.site.siteMetadata.description}></meta>
          <meta name="keywords" content={data.site.siteMetadata.content}></meta>  
        </Helmet>
        <Profile/>
        <PastExperience />
        <AllProjects/>

      </Layout> 

    )
  }} />


)

export default IndexPage

