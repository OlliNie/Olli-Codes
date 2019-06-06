import React from 'react';
import {UPDATED} from '../content/footer';
export default function Footer(){
  return(
    <footer css={{height:'50px', display:'flex', backgroundColor:'#99cc00', width:'100%', justifyContent:'center'}}>
    <p css={{alignSelf:'center', margin:'0'}}>{UPDATED}</p>
  </footer>
  )
}