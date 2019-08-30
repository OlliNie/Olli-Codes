import React from 'react';
import FullTimeline from '../../time-line/FullTimeline'
import backgroundTimeLineData from '../../../content/backgroundTimeLineData'

export default function PastExperience() {
  const timeline = backgroundTimeLineData()

  return (
      <FullTimeline heading='Background' timeline={timeline}/>
  )
} 