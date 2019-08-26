import React from 'react';

export default function RenderIcon({ iconArray, direction, color='white' }) {
  const iconList = iconArray.map((icon, i) => {
    if (icon.link && icon.text && icon.icon) {
      return <li key={i} css={{ alignSelf:'center', color: color, margin:'1rem'}}>
        <a css={{ display: 'flex' }} href={icon.link}>
          <div css={{ display: 'flex', justifyContent: 'center' }}>
            <p css={{ alignSelf: 'center', margin: '0 10px 0 0' }}>{icon.icon}</p>
            <p css={{ alignSelf: 'center', margin: '0' }}>{icon.text}</p>

          </div>
        </a>
      </li>

    } else if (icon.text && icon.icon) {
      return <li key={i} css={{ alignSelf: 'center', color: color, margin:'1rem'}}>
        <div css={{ display: 'flex', justifyContent: 'center' }}>
          <p css={{ alignSelf: 'center', margin: '0 10px 0 0' }}>{icon.icon}</p>
          <p css={{ alignSelf: 'center', margin: '0' }}>{icon.text}</p>

        </div>
      </li>
    }
    else return <li key={i} css={{ alignSelf: 'center', color: color, fontSize: '32px', margin:'1rem'}}>
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
      flexWrap: 'wrap'

    }}>
      {iconList}
    </ul>
  )
}