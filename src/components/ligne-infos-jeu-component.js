import React from 'react'

import PropTypes from 'prop-types'

import './ligne-infos-jeu-component.css'

const LigneInfosJeuComponent = (props) => {
  return (
    <div className="ligne-infos-jeu-component-container">
      <div className="ligne-infos-jeu-component-container01">
        <span>{props.text14}</span>
      </div>
      <div className="ligne-infos-jeu-component-container02">
        <span>{props.text141}</span>
      </div>
      <div className="ligne-infos-jeu-component-container03">
        <span>{props.text142}</span>
      </div>
      <div className="ligne-infos-jeu-component-container04">
        <span>{props.text143}</span>
      </div>
      <div className="ligne-infos-jeu-component-container05">
        <span>{props.text144}</span>
      </div>
      <div className="ligne-infos-jeu-component-container06">
        <span>{props.text145}</span>
      </div>
      <div className="ligne-infos-jeu-component-container07">
        <span>{props.text146}</span>
      </div>
      <div className="ligne-infos-jeu-component-container08">
        <span>{props.text147}</span>
      </div>
      <div className="ligne-infos-jeu-component-container09">
        <button
          type="button"
          className="ligne-infos-jeu-component-button button"
        >
          {props.button}
        </button>
      </div>
    </div>
  )
}

LigneInfosJeuComponent.defaultProps = {
  text143: 'x',
  text141: 'x',
  text142: 'x',
  text147: 'x',
  text144: 'x',
  text145: 'x',
  text146: 'x',
  button: 'Détails',
  text14: 'x',
}

LigneInfosJeuComponent.propTypes = {
  text143: PropTypes.string,
  text141: PropTypes.string,
  text142: PropTypes.string,
  text147: PropTypes.string,
  text144: PropTypes.string,
  text145: PropTypes.string,
  text146: PropTypes.string,
  button: PropTypes.string,
  text14: PropTypes.string,
}

export default LigneInfosJeuComponent
