import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import TimeLineItem from './TimeLineItem'
import styles from './fullTimeLine.module.css'


export default ()=>{
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
      img:images.pittsburgh.childImageSharp.fluid,
      content:`I was born in Pittsburgh and before I had the chance to say my first word "machine",
      I had allready moved back to Finland with my parents and older sister.  I would oce again at the
      age of 10 move back to Pittsburgh and later on I would attend the University of Pittburgh at 
      Johnstown and graduated with a minor in Mathematics, and a B.S degree in Mechanical Engineering.
    `
    },
    {
      img:images.minneapolis.childImageSharp.fluid,
      content:`fadlfj ldfja dlfjadl jfdal jdlkfjadl sfjadslk fjdl adl;kfj ald;kj aldk;jf aldskjf
      fadlfj ldfja dlfjadl jfdal jdlkfjadl sfjadslk fjdl adl;kfj ald;kj aldk;jf aldskjf
      fadlfj ldfja dlfjadl jfdal jdlkfjadl sfjadslk fjdl adl;kfj ald;kj aldk;jf aldskjf
      fadlfj ldfja dlfjadl jfdal jdlkfjadl sfjadslk fjdl adl;kfj ald;kj aldk;jf aldskjf
      fadlfj ldfja dlfjadl jfdal jdlkfjadl sfjadslk fjdl adl;kfj ald;kj aldk;jf aldskjf
      fadlfj ldfja dlfjadl jfdal jdlkfjadl sfjadslk fjdl adl;kfj ald;kj aldk;jf aldskjf
      fadlfj ldfja dlfjadl jfdal jdlkfjadl sfjadslk fjdl adl;kfj ald;kj aldk;jf aldskjf
      fadlfj ldfja dlfjadl jfdal jdlkfjadl sfjadslk fjdl adl;kfj ald;kj aldk;jf aldskjf
      fadlfj ldfja dlfjadl jfdal jdlkfjadl sfjadslk fjdl adl;kfj ald;kj aldk;jf aldskjf
      fadlfj ldfja dlfjadl jfdal jdlkfjadl sfjadslk fjdl adl;kfj ald;kj aldk;jf aldskjf
      fadlfj ldfja dlfjadl jfdal jdlkfjadl sfjadslk fjdl adl;kfj ald;kj aldk;jf aldskjf
      fadlfj ldfja dlfjadl jfdal jdlkfjadl sfjadslk fjdl adl;kfj ald;kj aldk;jf aldskjf
     `
    },
    {
      img:images.utah.childImageSharp.fluid,
      content:`fadlfj ldfja dlfjadl jfdal jdlkfjadl sfjadslk fjdl adl;kfj ald;kj aldk;jf aldskjf
      fadlfj ldfja dlfjadl jfdal jdlkfjadl sfjadslk fjdl adl;kfj ald;kj aldk;jf aldskjf
      fadlfj ldfja dlfjadl jfdal jdlkfjadl sfjadslk fjdl adl;kfj ald;kj aldk;jf aldskjf
      fadlfj ldfja dlfjadl jfdal jdlkfjadl sfjadslk fjdl adl;kfj ald;kj aldk;jf aldskjf `
    },
    {
      img:images.portland.childImageSharp.fluid,
      content:`fadlfj ldfja dlfjadl jfdal jdlkfjadl sfjadslk fjdl adl;kfj ald;kj aldk;jf aldskjf
      fadlfj ldfja dlfjadl jfdal jdlkfjadl sfjadslk fjdl adl;kfj ald;kj aldk;jf aldskjf
      fadlfj ldfja dlfjadl jfdal jdlkfjadl sfjadslk fjdl adl;kfj ald;kj aldk;jf aldskjf
      fadlfj ldfja dlfjadl jfdal jdlkfjadl sfjadslk fjdl adl;kfj ald;kj aldk;jf aldskjf `
    },
  ];
  
  const list = timelineArray.map((instance,i)=>{

    return(
    <li key={i}>
      <TimeLineItem timeLineItem={instance} index={i}/>
    </li>
    )
  })

  return (
    <ul className={styles.ul}>
      {list}
    </ul>

  )

}
