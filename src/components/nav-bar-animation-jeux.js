import React from 'react'

import PropTypes from 'prop-types'

import NavigationLinks from './navigation-links'
import './nav-bar-animation-jeux.css'

const NavBarAnimationJeux = (props) => {
  return (
    <div className={`nav-bar-animation-jeux-container ${props.rootClassName} `}>
      <header data-role="Header" className="nav-bar-animation-jeux-header">
        <div className="nav-bar-animation-jeux-container1">
          <div className="nav-bar-animation-jeux-nav">
            <NavigationLinks
              rootClassName="rootClassName12"
              className=""
            ></NavigationLinks>
          </div>
        </div>
      </header>
    </div>
  )
}

NavBarAnimationJeux.defaultProps = {
  rootClassName: '',
}

NavBarAnimationJeux.propTypes = {
  rootClassName: PropTypes.string,
}

export default NavBarAnimationJeux
