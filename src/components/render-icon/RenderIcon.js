import React from 'react';
import styles from './renderIcon.module.css'
import IconWithContent from './IconWithContent';

export default function RenderIcon({ iconArray, direction, color = 'white', func=null}) {
  const iconList = iconArray.map((icon, i) => {
    return (
      <li key={i} css={{ color: color }}>
          <IconWithContent icon={icon.icon} text={icon.text} link={icon.link} function={func} />
      </li>
    )
  })

  return (
    <ul className={styles.ul} css={{ flexDirection: `${direction}` }}>
      {iconList}
    </ul>
  )
}