
import { useStaticQuery, graphql } from "gatsby"

 export default () => {
  const images = useStaticQuery(graphql`
  {
    pittsburgh: file(relativePath: {eq:"pittsburgh.jpg"}){
      childImageSharp{
        fluid(maxWidth:300){
              ...GatsbyImageSharpFluid
        }
      }
    }
    minneapolis: file(relativePath: {eq:"minneapolis.jpg"}){
      childImageSharp{
        fluid(maxWidth:300){
              ...GatsbyImageSharpFluid
        }
      }
    }
    utah: file(relativePath: {eq:"utah.jpg"}){
      childImageSharp{
        fluid(maxWidth:300){
              ...GatsbyImageSharpFluid
        }
      }
    }
    portland: file(relativePath: {eq:"portland.jpg"}){
      childImageSharp{
        fluid(maxWidth:300){
              ...GatsbyImageSharpFluid
        }
      }
    }
    tech: file(relativePath: {eq:"tech.jpg"}){
      childImageSharp{
        fluid(maxWidth:300){
              ...GatsbyImageSharpFluid
        }
      }
    }
  
  }
  `)
  const timelineArray = [
    {
      img: images.pittsburgh.childImageSharp.fluid,
      allContent: [
        {
          content: `Graduated from the University of Pittsburgh with a Bachelor of Science in Mechanical
        Engineering, and a Minor in Mathematics.  I also did an internship at Tungsten Diversified Industries located in
        White Bear Lake, Minnesota. 
      `,
          title: `University of Pittsburgh`,
          subTitle: 'Mechanical Engineer | Minor in Mathematics',
          date: '2006-2010'
        }
      ]
    },
    {
      img: images.minneapolis.childImageSharp.fluid,
      allContent: [
        {
          content: `Moved to Minneapolis to work for Infinite Edge Technologies, a small startup that was
        then purchased by Guardian Industries. 
       `,
          title: 'Guardian Industries',
          subTitle: 'Wearer of Many Hats | Lead Engineer',
          date: '2011-2014'
        },
        {
          content: `While working for Guardian, it became apparent that we needed someone on our team to
          troubleshoot and program the equipment that we were designing.  To fill that gap I enrolled in
          night classes and graduated with a technology degree in Industrial Controls and Automation.`,
          title: 'Dunwoody College of Technology',
          subTitle: 'Industrial Controls and Automation',
          date: '2011-2012'
        }
      ]
    },
    {
      img: images.utah.childImageSharp.fluid,
      allContent: [
        {
          content: `When Guardian relocated their offices from Minneapolis to Wisconsin,
           I stayed on as a remote consultant by starting my own company and moved to Utah.
          I adviced on the design of next-generation proprietary manufacturing lines and
           trained Guardian’s employees.  I also worked with PDS IG Holding,
            a manufacturing firm that was building equipment for Guardian.`,
          title: 'On Engineering',
          subTitle: 'Remote Consultant',
          date: '2014-2016'
        },
      ]
    },
    {
      img: images.portland.childImageSharp.fluid,
      allContent: [
        {
          content: `After finishing my projects for Guardian and PDS IG Holding, I took on an Engineer
             role at Allied Systems.  My core duties included programming and testing of marine equipment.`,
          title: 'Allied Systems',
          subTitle: 'Design Engineer',
          date: '2016-2019'
        }
      ]
    },
    {
      img: images.tech.childImageSharp.fluid,
      allContent: [
        {
          content: `About 2 years ago I started studying the React framework and Javascript development, and
          found myself closing down the local coffee shop on the regular.  Once I realized this is really what
          I want to do, I enrolled in Alchemy Code Lab and graduated with a Full Stack JavaScript Development
          certificate.  Since then I have been enjoying working on numerous projects, and I am hoping to 
          find work as a JavaScript developer with an emphasis on the back-end.
      `,
          title: `Career Change`,
          subTitle: 'JavaScript Developer',
          date: '2017'
        }
      ]
    },
  ];
 
  return timelineArray;
}