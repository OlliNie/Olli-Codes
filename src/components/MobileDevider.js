import React from 'react';

export default function MobileDevider({ title }) {
  return (
    <section css={{
      whiteSpace: 'nowrap',
      margin: '30px 0 30px 0',
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      color: '#99CC00',
      letterSpacing: '8px',
      '@media (min-width: 720px)': {
        display: `none`,
      },
      
    }}>
      <div css={
        {
          borderBottom: '1px solid #99CC00',
          height: '1px',
          width: '100%',
          alignSelf: 'center'
        }
      }></div>
      <div><p css={
        {
          fontFamily: 'georgia',
          fontSize: '20px',
          alignSelf: 'center',
          margin: '0 0 0 8px'
        }
      }>{title}</p></div>
      <div css={
        {
          borderBottom: '1px solid #99CC00',
          height: '1px',
          width: '100%',
          alignSelf: 'center'
        }}></div>
    </section>
  )
}