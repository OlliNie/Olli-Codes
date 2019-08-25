import React from 'react';
import { frontEndStack, backEndStack } from '../../content/stack';
import RenderIcon from '../RenderIcon';
import './mobileFrontEndStack.css';
import MobileDevider from '../section-deviders/MobileDevider';
import { FRONT_END, BACK_END } from '../../content/titles';
import {aboutFrontEnd, aboutBackEnd } from '../../content/stack';




export default function MobileStacks() {
  return (
    <>
      <MobileFrontEndStack />
      <MobileBackEndStack />
    </>
  )
}
export function MobileFrontEndStack() {
  return (
    <section className='mobile1' >
      <MobileDevider title={FRONT_END} />
      <section className='icons1'>
        <RenderIcon iconArray={frontEndStack} />
      </section>
      <p css={{padding:'30px 20px 0 20px'}}>{aboutFrontEnd}</p>
    </section>
  )
}
export function MobileBackEndStack() {
  return (
    <section className='mobile1' >
      <MobileDevider title={BACK_END} />
      <section className='icons1'>
        <RenderIcon iconArray={backEndStack} />
      </section>
      <p css={{padding:'30px 20px 0 20px'}}>{aboutBackEnd}</p>
    </section>
  )
}
