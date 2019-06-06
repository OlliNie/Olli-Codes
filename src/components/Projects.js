import React from 'react';
import RenderProjects from '../components/RenderProjects';
import { projects } from '../content/projects';
import Tab from './Tab'
import { PROJECTS } from '../content/titles';
import MobileDevider from '../components/MobileDevider';

export default function Projects() {
  return (
    <>
      <MobileDevider title={PROJECTS} />
      <section css={{ display: 'flex', marginBottom: '30px', alignItems: 'center', width: '100%' }}>
        <Tab title={PROJECTS} />
        <RenderProjects projectArray={projects} />
      </section>
    </>
  )
}