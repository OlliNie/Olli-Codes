import React from 'react';
import './pcStack.css'
import RenderIcon from '../RenderIcon';
import { frontEndStack, backEndStack, aboutFrontEnd, aboutBackEnd } from '../../content/stack';
import { FRONT_END, BACK_END } from '../../content/titles'




export default function PcStacks() {
  return (
    <>
      <PcFrontEnd />
      <PcBackEnd />
    </>
  )
}


export function PcFrontEnd() {
  return (
    <section className='icons'>
      <section>
        <p className='title'>{FRONT_END}</p>
        <section css={{float:'left'}}>
          <RenderIcon iconArray={frontEndStack} direction='row' />
        </section>
        <p>{aboutFrontEnd}</p>
      </section>
    </section>
  )
}

export function PcBackEnd() {
  return (
    <section className='icons'>
      <section>
        <p className='title'>{BACK_END}</p>
        <section css={{float:'left'}}>
          <RenderIcon iconArray={backEndStack} direction='row' />
        </section>
        <p>{aboutBackEnd}</p>
      </section>
    </section>
  )
}