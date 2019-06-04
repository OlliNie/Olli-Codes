import React from 'react';
import RenderProjects from '../components/RenderProjects';
import { projects } from '../content/projects';
import Tab from './Tab'
import { PROJECTS } from '../content/titles';

export default function Projects() {
  return (
    <section css={{ display: 'flex', marginBottom:'30px', alignItems:'center' }}>
      <Tab title={PROJECTS}/>
      <RenderProjects projectArray={projects} />
    </section>
  )
}