import React from 'react'

import PropTypes from 'prop-types'

import './infos-hebergement.css'

function InfosHebergement (props : any) {
  return (
    <div className={`infos-hebergement-container ${props.rootClassName} `}>
      <div className="infos-hebergement-container1">
        <span className="infos-hebergement-text">{props.text}</span>
      </div>
      <div className="infos-hebergement-container2">
        <span className="infos-hebergement-text1">{props.text1}</span>
      </div>
      <div className="infos-hebergement-container3">
        <span className="infos-hebergement-text2">{props.text2}</span>
      </div>
    </div>
  )
}

InfosHebergement.defaultProps = {
  text: 'Nom',
  text1: 'Prénom',
  rootClassName: '',
  text2: 'e-mail',
}

InfosHebergement.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
}

export default InfosHebergement
