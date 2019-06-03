import React from 'react';

export default function renderProjects({ projectArray }) {
  console.log('array', projectArray);
  const projects = projectArray.map(project => {
    return <li>
      <section>
        <h2>{project.title}</h2>
        <p>{project.body}</p>
      </section>
    </li>
  })
  return(
    <ul>
      {projects}
    </ul>
  )
}