
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
  
  }
  `)
  const timelineArray = [
    {
      img: images.pittsburgh.childImageSharp.fluid,
      allContent: [
        {
          content: `Graduated from the University of Pittsburgh with a Bachelor of Science in Mechanical
        Engineering, and a Minor in Mathematics.  During the school year I worked as a snow board
        instructor, and between semesters I would intern at Tungsten Diversified Industries located in
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
          date: '2010-2013'
        },
        {
          content: `When Guardian relocated their offices from Minneapolis to Wisconsin, I stayed on as
        a remote consultant by starting my own company and moved to Utah.
        I adviced on the design of next generation proprietary
        manufacturing lines, and trained Guardian's employees`,
          title: 'Dunwoody College of Technology',
          subTitle: 'Industrial Controls and Automation',
          date: '2015-2016'
        }
      ]
    },
    {
      img: images.utah.childImageSharp.fluid,
      allContent: [
        {
          content: `When Guardian relocated their offices from Minneapolis to Wisconsin, I stayed on as
          a remote consultant by starting my own company and moved to Utah.
          I adviced on the design of next generation proprietary
          manufacturing lines, and trained Guardian's employees`,
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
          content: `After finishing my projects for Guardian and PDS IG-Holding, I took on an Engineer
             role at Allied Systems.  My core duties included programming and testing of marine equipment.`,
          title: 'Allied Systems',
          subTitle: 'Design Engineer',
          date: '2016-2019'
        }
      ]
    },
  ];
  return timelineArray;
}