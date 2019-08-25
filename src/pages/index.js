import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Layout from "../components/layout/layout";
import Profile from '../components/introduction/Introduction';
import MobileDevider from '../components/section-deviders/MobileDevider';
import ContactInfo from '../components/contact/ContactInfo';
import Projects from '../components/projects/Projects';
import Stacks from '../components/stacks/Stacks';
import PastExperience from '../components/background/Background';
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

