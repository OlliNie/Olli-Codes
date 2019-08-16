import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import Profile from '../components/Profile';
import MobileDevider from '../components/MobileDevider';
import ContactInfo from '../components/ContactInfo';
import Projects from '../components/Projects';
import Stacks from '../components/Stacks';
import PastExperience from '../components/PastExpereince';
import { CONTACT, PROJECTS } from '../content/titles';
import SEO from '../components/seo';
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
        <MobileDevider title={CONTACT} />
        <ContactInfo />
        <Stacks />
        <PastExperience />
        <Projects />
      </Layout> 

    )
  }} />


)

export default IndexPage

