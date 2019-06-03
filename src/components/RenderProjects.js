import React from 'react';

export default function renderProjects({ projectArray }) {
  console.log('array', projectArray);
  const projects = projectArray.map((project, i) => {
    return <li key={i}>
      <section>
        <p css={{color:'#99cc00'}}>{project.title}</p>
        <p css={{color:'white'}}>{project.body}</p>
      </section>
    </li>
  })
  return(
    <ul css={{margin: '20px'}}>
      {projects}
    </ul>
  )
}