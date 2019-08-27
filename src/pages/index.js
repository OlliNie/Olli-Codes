import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Layout from "../components/layout/layout";
import Profile from '../components/home-page/introduction/Introduction';
import Projects from '../components/home-page/projects/Projects';
import PastExperience from '../components/home-page/background/Background';
import { Helmet } from 'react-helmet';
import TimeLineProjects from '../components/home-page/projects/TimeLineProjects';



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

    return (
      
      <Layout>
        <Helmet htmlAttributes={{lang: 'en'}}>
          <title>{data.site.siteMetadata.title}</title>
          <meta name="Description" content={data.site.siteMetadata.description}></meta>
          <meta name="keywords" content={data.site.siteMetadata.content}></meta>  
        </Helmet>
        <Profile/>
        <PastExperience />
        {/* <Projects /> */}
        <TimeLineProjects/>
      </Layout> 

    )
  }} />


)

export default IndexPage

