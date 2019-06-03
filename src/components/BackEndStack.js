import React from 'react';
import {backEndStack} from '../content/stack';
import RenderIcon from './RenderIcon';

export default function FrontEndStack(){
  return(
    <RenderIcon iconArray={backEndStack}/>
  )
}
