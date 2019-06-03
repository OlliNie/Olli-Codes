import React from "react";
import {StaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";


import Profile from '../components/Profile';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {  faCoffee, faPhone } from '@fortawesome/free-solid-svg-icons';



 
library.add(fab, faCoffee, faPhone );


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
        </Layout>
      )
    }} />


)

export default IndexPage
