import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links.css'

function NavigationLinks (props : any) {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <Link to="/menu-animation-jeux" className="navigation-links-navlink">
        {props.text}
      </Link>
      <Link to="/planning-animation-jeux" className="navigation-links-navlink1">
        {props.text1}
      </Link>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  text4: 'Blog',
  text2: 'Pricing',
  text: 'Infos',
  text1: 'Planning Animation',
  rootClassName: '',
  text3: 'Team',
}

NavigationLinks.propTypes = {
  text4: PropTypes.string,
  text2: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text3: PropTypes.string,
}

export default NavigationLinks
