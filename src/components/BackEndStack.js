import React from 'react';
import { backEndStack } from '../content/stack';
import RenderIcon from './RenderIcon';

import { BACK_END } from '../content/titles';
import MobileDevider from './MobileDevider';

export default function FrontEndStack({direction}) {
  return (
    <section >
       <p css={{color:'#99CC00', display:'none', '@media (min-width: 720px)': {
        display: `block`,
      }}}>BACK END</p>
      <MobileDevider title={BACK_END} />
      <section css={{ display: 'flex' }}>
       
        <RenderIcon iconArray={backEndStack} direction={direction} />
      </section>
    </section>

  )
}
