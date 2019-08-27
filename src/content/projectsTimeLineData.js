
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
 console.log('images', images);
  const timelineArray = [
    {
      img: images.studio_taimela.childImageSharp.fluid,
      allContent: [
        {
          content: `"Olli developed Studio Taimela’s website perfectly
          according to design for all screen resolutions. 
          His enthusiasm towards technology is apparent in 
          his resourcefulness to execute without compromise.
          Olli is easy to talk with and can quickly grasp an
          understanding of the business objectives behind a 
          website, plus his continuously dedication to success
          made working with him a wonderful experience."
          -Studio Taimela 
     `,
          title: `Studio Taimela`,
          subTitle: 'Front End Project',
        }
      ]
    },
  
    {
      img: images.code_for_pdx.childImageSharp.fluid,
      allContent: [
        {
          content: `A project to automate the expungement of qualifying criminal records.
           This project is done in conjunction with the Metropolitan Public Defender's Office`,
          title: 'Code For PDX',
          subTitle: 'Full Stack Project',
        }
      ]
    },
  ];
  return timelineArray;
}