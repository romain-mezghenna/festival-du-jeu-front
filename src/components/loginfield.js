import React from 'react'

import PropTypes from 'prop-types'

import './loginfield.css'

const Loginfield = (props) => {
  return (
    <div className={`loginfield-container ${props.rootClassName} `}>
      <h3 className="loginfield-text">{props.mail}</h3>
      <input
        type="email"
        placeholder={props.textinputPlaceholder}
        className="input loginfield-input"
      />
      <h3 className="loginfield-text1">{props.password}</h3>
      <input
        type="password"
        placeholder={props.textinputPlaceholder1}
        className="input loginfield-textinput"
      />
      <button type="button" className="loginfield-button button">
        {props.login}
      </button>
    </div>
  )
}

Loginfield.defaultProps = {
  textinputPlaceholder: 'placeholder',
  password: 'Mot de passe',
  mailarea: 'Inscrivez votre email',
  textinputPlaceholder1: 'placeholder',
  mail: 'Email',
  login: 'Se connecter',
  rootClassName: '',
}

Loginfield.propTypes = {
  textinputPlaceholder: PropTypes.string,
  password: PropTypes.string,
  mailarea: PropTypes.string,
  textinputPlaceholder1: PropTypes.string,
  mail: PropTypes.string,
  login: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Loginfield
