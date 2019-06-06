import React from "react";
import {StaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import Profile from '../components/Profile';
import MobileDevider from '../components/MobileDevider';
import ContactInfo from '../components/ContactInfo';
import Projects from '../components/Projects';
import Stacks from '../components/Stacks';




import {CONTACT, PROJECTS} from '../content/titles';
 


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
          <Profile data={data}/>
          <MobileDevider title={CONTACT}/>
          <ContactInfo/>
          <Stacks/>
          <MobileDevider title={PROJECTS}/>
          <Projects/>
        </Layout>
      )
    }} />


)

export default IndexPage
