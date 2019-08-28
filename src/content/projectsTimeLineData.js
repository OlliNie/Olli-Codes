
import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const images = useStaticQuery(graphql`
 {
   studio_taimela: file(relativePath: {eq:"studio_taimela.png"}){
     childImageSharp{
       fluid(maxWidth:300){
             ...GatsbyImageSharpFluid
       }
     }
   }
   code_for_pdx: file(relativePath: {eq:"code_for_pdx.png"}){
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
      img: images.studio_taimela.childImageSharp.fluid,
      title: 'Studio Taimela',
      allContent: [
        {
          title:'Focus',
          content:`Studio Taimela's website built on the React framework with emphasis on SEO, responsive deisign, and performance`

        },
        {
          title:'testimonial',
          content: `"Olli developed Studio Taimela’s website perfectly
          according to design for all screen resolutions. 
          His enthusiasm towards technology is apparent in 
          his resourcefulness to execute without compromise.
          Olli is easy to talk with and can quickly grasp an
          understanding of the business objectives behind a 
          website, plus his continuously dedication to success
          made working with him a wonderful experience."
          -Studio Taimela 
     `
        }
      ]
    },
  
    {
      img: images.code_for_pdx.childImageSharp.fluid,
      title: 'Code For PDX',
      allContent: [
        {
          title: 'Focus',
          content: `A project to automate the expungement of qualifying criminal records.
           This project is done in conjunction with the Metropolitan Public Defender's Office`,
        },
        {
          title: 'Last Contribution',
          content: 'TypeScript enforced API service geared towards communicating with a back end that is operating on a Flask framework'
        },
        {
          title:'Workin On',
          content: 'TypeScript enforced React component that renders search results that is utilizing Redux state managment'
        }
      ]
    },
  ];
  return timelineArray;
}