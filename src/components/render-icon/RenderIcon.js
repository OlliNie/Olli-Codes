import React from 'react';
import styles from './renderIcon.module.css'

export default function RenderIcon({ iconArray, direction, color = 'white' }) {
  const iconList = iconArray.map((icon, i) => {
    if (icon.link && icon.icon) {
      return <li key={i} css={{ color: color }} className={styles.li}>
        <a href={icon.link}>
          <div className={styles.icon_with_content}>
            <p>{icon.icon}</p>
            <p>{icon.text}</p>
          </div>
        </a>
      </li>

    } else if (icon.text && icon.icon) {

      return <li key={i} css={{ color: color }} className={styles.li}>
        <div className={styles.icon_with_content}>
          <p>{icon.icon}</p>
          <p>{icon.text}</p>
        </div>
      </li>
    }
    else return <li key={i} css={{ color: color }} className={styles.li}>
      <div className={styles.icon_with_content}>
          <p>{icon.icon}</p>
        </div>
    </li>
  })
  return (
    <ul className={styles.ul} css={{ flexDirection: `${direction}` }}>
      {iconList}
    </ul>
  )
}