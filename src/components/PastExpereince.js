import React from 'react';
import { RELATIVE_EXP, EXP_ARRAY } from '../content/relativeExperience';
import Tab from './section-deviders/Tab';
import MobileDevider from './section-deviders/MobileDevider';

export default function PastExperience() {

  const experienceList = EXP_ARRAY.map((exp, i) => {
    return <li key={i}><p>{exp}</p></li>
  })
  return (
    <>
      <MobileDevider title='BACKGROUND' />
      <section css={{ display: 'flex' }}>
        <Tab title='BACKGROUND' />
        <section css={{ color: 'white', padding: '0 20px 0 20px' }}>
          <p css={{
            color: 'white', '@media (min-width: 720px)': {
              color: `#99CC00`,
            },
          }}>{RELATIVE_EXP}</p>
          <ul css={{ listStyle: 'circle', paddingLeft: '20px' }}>
            {experienceList}
          </ul>
        </section>
      </section>
    </>

  )
}