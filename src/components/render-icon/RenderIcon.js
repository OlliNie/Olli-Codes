import React from 'react';
import styles from './renderIcon.module.css'
import IconWithContent from './IconWithContent';

export default function RenderIcon({ iconArray, direction, color = 'white'}) {
  const iconList = iconArray.map((icon, i) => {
  
    return (
      <li key={i}>
          <IconWithContent icon={icon.icon} text={icon.text} link={icon.link} func={icon.function ? icon.function : null} />
      </li>
    )
  })

  return (
    <ul className={styles.ul} css={{ flexDirection: `${direction}` }}>
      {iconList}
    </ul>
  )
}