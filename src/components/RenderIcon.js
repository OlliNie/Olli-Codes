import React from 'react';
// import { contactInfo } from '../content/contact';



export default function RenderIcon({ iconArray, direction }) {
  console.log('direction in render icon', direction);
  
  const iconList = iconArray.map((icon, i) => {
    if (icon.link && icon.text && icon.icon) {
      return <li key={i} css={{ alignSelf:'center', color: 'white'}}>
        <a css={{ display: 'flex', }} href={icon.link}>
          <div css={{ display: 'flex', justifyContent: 'center' }}>
            <p css={{ alignSelf: 'center', margin: '0 10px 0 0' }}>{icon.icon}</p>
            <p css={{ alignSelf: 'center', margin: '0' }}>{icon.text}</p>
            <p css={{ alignSelf: 'center', margin: '0 0 0 10px' }}>{icon.icon}</p>
          </div>
        </a>
      </li>

    } else if (icon.text && icon.icon) {
      return <li key={i} css={{ alignSelf: 'center', color: 'white' }}>
        <div css={{ display: 'flex', justifyContent: 'center' }}>
          <p css={{ alignSelf: 'center', margin: '0 10px 0 0' }}>{icon.icon}</p>
          <p css={{ alignSelf: 'center', margin: '0' }}>{icon.text}</p>
          <p css={{ alignSelf: 'center', margin: '0 0 0 10px' }}>{icon.icon}</p>
        </div>
      </li>
    }
    else return <li key={i} css={{ alignSelf: 'center', color: 'white', fontSize: '32px' }}>
      <div css={{display:'flex'}}>
        <p css={{ alignSelf: 'center', margin: '0 10px 0 0' }}>{icon.icon}</p>
      </div>
    </li>
  })
  return (
    <ul className='test'
      css={{
      listStyleType: 'none',
      display: 'flex',
      flexDirection: `${direction}`,
      justifyContent: 'space-around',
      flexGrow: 1,

    }}>
      {iconList}
    </ul>
  )
}