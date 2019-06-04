import React from 'react';
import { frontEndStack } from '../content/stack';
import RenderIcon from './RenderIcon';

import { FRONT_END } from '../content/titles';
import MobileDevider from './MobileDevider'

export default function FrontEndStack({direction}) {
  console.log('dir in frontend stack', direction);
  return (
    <section >
      <p css={{color:'#99CC00', display:'none', '@media (min-width: 720px)': {
        display: `block`,
      }}}>FRONT END</p>
      <MobileDevider title={FRONT_END} />
      <section css={{ display: 'flex', flexGrow:1}}>
        <RenderIcon iconArray={frontEndStack} direction={direction} />
      </section>
    </section>
  )
}
