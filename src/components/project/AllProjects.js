import React from 'react';
import Project from './Project';
import projectsTimeLineData from '../../content/projectsTimeLineData';
import styles from './allProjects.module.css';
import Heading from '../layout/Heading';

export default () => {
  const projects = projectsTimeLineData();
  const projectList = projects.map((project, i) => (
    <li key={i}>
      <Project project={project} />
    </li>
  ))
  return (
    <>
      <Heading heading='Latest Projects'/>
      <ul className={styles.ul}>
        {projectList}
      </ul>
    </>
  )
}


