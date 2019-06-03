import React from 'react';
import RenderProjects from '../components/RenderProjects';
import {projects} from '../content/projects';

export default function Projects(){
  return (
    <RenderProjects projectArray={projects}/>
  )
}