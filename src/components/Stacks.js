import React from 'react';
import {STACK} from '../content/titles';
import FrontEndStack from './FrontEndStack';
import BackEndStack from './BackEndStack';
import Tab from './Tab';

export default function Stacks() {
  console.log('stack', STACK);
  return (
    <section css={{display:'flex', marginBottom:'30px'}}>
      <Tab title={STACK}/>
      <section css={{display:'none',
       flexDirection:'row',
       flexGrow:1,
       justifyContent: 'space-around',
       '@media (min-width: 720px)': {
        display: `flex`,
     
      }
       }}>
        <FrontEndStack direction='column' />
        <BackEndStack direction ='column'/>
      </section>
      <section css={{display:'flex',
       flexDirection:'column',
       width:'100%',
       '@media (min-width: 720px)': {
        display: `none`,
      }
       }}>
        <FrontEndStack direction='row' />
        <BackEndStack direction ='row'/>
      </section>
    </section>

  )
}