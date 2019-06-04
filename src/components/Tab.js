import React from 'react';
import 'aos/dist/aos.css'
import './tab.css';
import { Watch } from 'scrollmonitor-react';
import PropTypes from 'prop-types';
import TabIndicator from '../images/bracket.svg';
import Style from '../dynamic-style/Style.js';



function Tab({ title }) {
  return (
    <div className='tab' css={
      {
        width: '100px',
        writingMode: 'vertical-rl',
        textOrientation: 'upright',
        textAlign: 'center',
        display: 'none',
        flexDirection: 'column',
        '@media (min-width: 720px)': {
        display: `flex`,

        marginLeft: '20px'
        }     
      }
    }>
      <TabIndicator css={{
        minHeight: '100px',
        display:'none',
        '@media (min-width: 720px)': {
          display: `flex`,
        },
      }} />   
      <Style>{title}</Style>
  
    </div>
  )

}

Tab.propTypes = {
  title: PropTypes.string.isRequired
}

export default Watch(Tab); 