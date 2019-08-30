import React from 'react';
import FullTimeline from '../../time-line/FullTimeline'
import backgroundTimeLineData from '../../../content/projectsTimeLineData'

export default function PastExperience() {
  const timeline = backgroundTimeLineData()

  return (
      <FullTimeline heading='Projects' timeline={timeline}/>
  )
} 