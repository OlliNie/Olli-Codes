import React from 'react';
import { frontEndStack } from '../content/stack';
import RenderIcon from './RenderIcon';



export default function FrontEndStack({direction}) {

  return (
    <section classNane='mobile' >
      <p css={{color:'#99CC00', display:'none', '@media (min-width: 720px)': {
        display: `block`,
      }}}>FRONT END</p>
      
      <section css={{ display: 'flex', width:'100vw'}}>
        <RenderIcon iconArray={frontEndStack} direction={direction} />
      </section>

    </section>
  )
}
