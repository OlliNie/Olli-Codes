import React from "react";
import {StaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import Profile from '../components/Profile';
import MobileDevider from '../components/MobileDevider';
import ContactInfo from '../components/ContactInfo';
import FrontEndStack from '../components/FrontEndStack';
import BackEndStack from '../components/BackEndStack';
import Projects from '../components/Projects';



import {CONTACT, FRONT_END, BACK_END, PROJECTS} from '../content/titles';
 


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
          <MobileDevider title={FRONT_END}/>
          <FrontEndStack/>
          <MobileDevider title={BACK_END}/>
          <BackEndStack/>
          <MobileDevider title={PROJECTS}/>
          <Projects/>
        </Layout>
      )
    }} />


)

export default IndexPage
