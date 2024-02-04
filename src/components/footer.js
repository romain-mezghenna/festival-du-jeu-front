import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <div className={`footer-container ${props.rootClassName} `}>
      <footer className="footer-footer">
        <img
          alt="logo"
          src="/external/logofjm-couleur-200h.png"
          className="footer-image"
        />
        <Link to="/contact" className="footer-navlink">
          {props.text}
        </Link>
        <Link to="/faq" className="footer-navlink1">
          {props.text1}
        </Link>
        <span className="footer-text">
          Copyright © 2024 Sortons jouer !. All rights reserved.
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
      </footer>
    </div>
  )
}

Footer.defaultProps = {
  rootClassName: '',
  text: 'Contact',
  linkText: 'https://example.com',
  text1: 'FAQ',
}

Footer.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  linkText: PropTypes.string,
  text1: PropTypes.string,
}

export default Footer
