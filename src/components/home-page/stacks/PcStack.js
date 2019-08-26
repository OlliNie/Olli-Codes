import React from 'react';
import styles from './pcStack.module.css'
import RenderIcon from '../../render-icon/RenderIcon';
import { frontEndStack, backEndStack, aboutFrontEnd, aboutBackEnd } from '../../../content/stack';
import { FRONT_END, BACK_END } from '../../../content/titles'




export default function PcStacks() {
  return (
    <section className={styles.main}>
      <PcFrontEnd />
      <PcBackEnd />
    </section>
  )
}


export function PcFrontEnd() {
  return (
    <section>
      <section>
        <p>{FRONT_END}</p>
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
    <section>
      <section>
        <p>{BACK_END}</p>
        <section css={{float:'left'}}>
          <RenderIcon iconArray={backEndStack} direction='row' />
        </section>
        <p>{aboutBackEnd}</p>
      </section>
    </section>
  )
}