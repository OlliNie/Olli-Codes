import React from 'react';
import RenderIcon from './RenderIcon';
import { contactInfo } from '../content/contact';
import Tab from './Tab';
import { CONTACT } from '../content/titles';

export default function renderContactInfo() {
  return (
    <section css={{ display: 'flex', marginBottom:'30px', width:'100%' }}>
      <Tab title={CONTACT} />
      <section css={{
        display: 'flex',
        flexGrow: 1,
        '@media (min-width: 720px)': {
          display: 'none'
        }
      }}>
        <RenderIcon iconArray={contactInfo} direction='column' />
      </section>

      <section css={{
        display: 'none',
        '@media (min-width: 720px)': {
          display: 'flex',
          flexGrow: 1
        }
      }}>
        <RenderIcon iconArray={contactInfo} direction='row' />
      </section>
    </section >
  )
}
