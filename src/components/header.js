import PropTypes from "prop-types"
import React from "react"
import Logo from '../images/logo.svg';

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
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}



export default Header
