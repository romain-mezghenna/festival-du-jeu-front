import React from 'react'

import PropTypes from 'prop-types'

import './infos-equipe.css'

const InfosEquipe = (props) => {
  return (
    <div className={`infos-equipe-container ${props.rootClassName} `}>
      <div className="infos-equipe-container1">
        <div className="infos-equipe-container2">
          <span className="">{props.text}</span>
        </div>
        <div className="infos-equipe-container3">
          <span className="infos-equipe-text1">{props.text1}</span>
        </div>
        <div className="infos-equipe-container4">
          <span className="infos-equipe-text2">{props.text2}</span>
        </div>
      </div>
    </div>
  )
}

InfosEquipe.defaultProps = {
  rootClassName: '',
  text1: 'Prénom',
  text2: 'e-mail',
  text: 'Nom',
}

InfosEquipe.propTypes = {
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text: PropTypes.string,
}

export default InfosEquipe
