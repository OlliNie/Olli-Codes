import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Layout from "../components/layout/layout";
import Profile from '../components/home-page/introduction/Introduction';
import MobileDevider from '../components/section-deviders/MobileDevider';
import ContactInfo from '../components/home-page/contact/ContactInfo';
import Projects from '../components/home-page/projects/Projects';
import Stacks from '../components/home-page/stacks/Stacks';
import PastExperience from '../components/home-page/background/Background';
import { CONTACT, PROJECTS } from '../content/titles';
import { Helmet } from 'react-helmet';



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
        <Projects />
      </Layout> 

    )
  }} />


)

export default IndexPage

