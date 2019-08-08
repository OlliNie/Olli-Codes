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
  {
    faceShot: file(relativePath: {eq:"OllieNieminen.png"}){
          childImageSharp{
            fluid(maxWidth:1600){
              ...GatsbyImageSharpFluid
            }
          }
    }
banner: file(relativePath: {eq:"banner.jpg"}){
  childImageSharp{
    fluid(maxWidth:1400){
      ...GatsbyImageSharpFluid
    }
  }
}
smallProfile: file(relativePath: {eq:"ThumbnailHeadShot.jpg"}){
  childImageSharp{
    fluid(maxWidth:1400){
      ...GatsbyImageSharpFluid
    }
  }
}

  }
    `
  } render={(data) => {
    return (
      
      <Layout>
        <Helmet htmlAttributes={{lang: 'en'}}>
          <title>Olli Nieminen</title>
          <meta name="Description" content="Olli's portfolio site that includes a blog, resume, skills, background, and a projects section."></meta>
         
        </Helmet>
        <Profile data={data} />
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

