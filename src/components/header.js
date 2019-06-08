import PropTypes from "prop-types";
import React from "react";
import Logo from '../images/logo.svg';
import { Link } from 'gatsby'


const Header = () => (
  <header
    css={{
      background: '#99CC00',
      display: 'flex',
      flexDirection: 'row',
      position:'fixed',
      zIndex: '75',
      width: '100%',
    }}
  >
    <div>
      <Logo
        css={{
          height: '50px',
          width: '180px'
        }}
      />
    </div>
      <ul className='nav-bar' css={{display:'flex', marginLeft:'auto', alignItems:'center' }}>
        <li css={{margin:'0 15px 0 0 '}}><Link to='/blog'><a>BLOG</a></Link></li>
        <li css={{margin:'0 15px 0 0 '}}><Link to='/'><a>HOME</a></Link></li>
        <li css={{margin:'0 15px 0 0 '}}><Link to='/'><a>RESUME</a></Link></li>
      </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}



export default Header
