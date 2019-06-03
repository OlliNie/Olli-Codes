import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image'
import { aboutMe } from '../content/aboutMe';
// import '../css/mobile.css';

export default function Profile({ data }) {
  return (
    <section className='Profile'>
      <div css={{ height: '54px' }}></div>
      <section className='pcView' css={{
        display: 'none',
        '@media (min-width: 720px)': {
          display: 'block'
        }
      }}>

        <BackgroundImage fluid={data.banner.childImageSharp.fluid}>
          <div css={{
            display: 'flex', flexDirection: 'row', justifyContent: 'center'
          }}>

            <Img fluid={data.faceShot.childImageSharp.fluid} css={{
              width: '600px', height: '290px',
              alignSelf: 'flex-end', zIndex: '2'
            }} />

            <div css={{
              backgroundColor: '8E8686', width: '100%', alignSelf: 'center', textAlign: 'left', padding: '60px'
            }}>

              <p css={{
                fontSize: '22px',
                color: 'white',
                letterSpacing: '1px'
              }}>
                {aboutMe}
              </p>
            </div>


          </div>
        </BackgroundImage>
      </section>
      <section className="mobileView" css={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        '@media (min-width: 720px)': {
          display: 'none'
        }
      }}>
        <Img fluid={data.smallProfile.childImageSharp.fluid} css={{
          width: '100%', height: 'auto',
          zIndex: '2'
        }} />
        <p css={{
          padding: '30px 20px 0 20px',
          color: 'white',   
        }}>{aboutMe}</p>
      </section>
    </section>
  )
}

Profile.propTypes = {
  data: PropTypes.object.isRequired
}