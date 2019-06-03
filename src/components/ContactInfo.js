import React from 'react';
import { contactInfo } from '../content/contact';



export default function ContactInfo() {
  const contactList = contactInfo.map((contact, i) => {
    if (contact.link) {
      return <li key={i} css={{alignSelf: 'center'}}>
        <a css={{ display: 'flex',}} href={contact.link}>
          <div css={{ display: 'flex', justifyContent: 'center'}}>
            <p css={{alignSelf: 'center', margin: '0 10px 0 0'}}>{contact.icon}</p>
            <p css={{alignSelf: 'center', margin: '0'}}>{contact.text}</p>
            <p css={{alignSelf: 'center', margin: '0 0 0 10px'}}>{contact.icon}</p>
          </div>
        </a>
      </li>
    }
    return <li key={i} css={{alignSelf: 'center'}}>
      <div css={{ display: 'flex', justifyContent: 'center'}}>
        <p css={{alignSelf: 'center', margin: '0 10px 0 0'}}>{contact.icon}</p>
        <p css={{alignSelf: 'center', margin: '0'}}>{contact.text}</p>
        <p css={{alignSelf: 'center', margin: '0 0 0 10px'}}>{contact.icon}</p>
      </div>
  </li>
  })



  return (
    <ul css={{
      listStyleType: 'none',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',

    }}>
      {contactList}
    </ul>
  )
}