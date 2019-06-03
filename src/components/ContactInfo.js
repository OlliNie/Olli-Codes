import React from 'react';
import RenderIcon from './RenderIcon';
import { contactInfo } from '../content/contact';

export default function renderContactInfo(){
 return(
   <RenderIcon iconArray={contactInfo}/>
 )
}
