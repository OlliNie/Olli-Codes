import React from 'react';

export default function DesktopDevider({ title }) {
  return (
    <section css={{
      whiteSpace: 'nowrap',
      margin: '30px 0 30px 0',
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      color: '#99CC00',

     
    }}>
      <div css={
        {
          borderBottom: '1px solid #99CC00',
          height: '1px',
          width: '100%',
          alignSelf: 'center'
        }
      }></div>
      <div><h2 css={
        {
          fontFamily: 'georgia',
          alignSelf: 'center',
          margin: '0 6px 0 8px',
          fontWeight: 'normal',
          fontSize: '20px'
          
        }
      }>{title}</h2></div>
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