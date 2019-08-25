import React from 'react';
import RenderIcon from '../render-icon/RenderIcon';
import { contactInfo } from '../../content/contact';
import Tab from '../section-deviders/Tab';
import { CONTACT } from '../../content/titles';

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
          flexGrow: 1,
          fontSize: '1.5rem',
          flexWrap: 'wrap'
        }
      }}>
        <RenderIcon iconArray={contactInfo} direction='row' />
      </section>
    </section >
  )
}
