import React from 'react'

import PropTypes from 'prop-types'

import './inscription-info.css'

function InscriptionInfo (props : any) {
  return (
    <div className={`inscription-info-container ${props.rootClassName} `}>
      <div className="inscription-info-container1">
        <h3 className="inscription-info-text">{props.posteselecInfo}</h3>
        <button type="button" className="inscription-info-button button">
          {props.animationjeux}
        </button>
        <button type="button" className="inscription-info-button1 button">
          {props.accueil}
        </button>
        <button type="button" className="inscription-info-button2 button">
          {props.venterestauration}
        </button>
        <button type="button" className="inscription-info-button3 button">
          {props.cuisine}
        </button>
        <button type="button" className="inscription-info-button4 button">
          {props.tombola}
        </button>
        <button type="button" className="inscription-info-button5 button">
          {props.forumasso}
        </button>
      </div>
      <div className="inscription-info-container2">
        <button type="button" className="inscription-info-button6 button">
          {props.detailButton}
        </button>
        <button type="button" className="inscription-info-button7 button">
          {props.contactButton}
        </button>
      </div>
    </div>
  )
}

InscriptionInfo.defaultProps = {
  posteselecInfo: 'Sélectionnez un poste',
  animationjeux: 'Animation jeux',
  detailButton: 'Détail du poste',
  tombola: 'Tombola',
  accueil: 'Accueil',
  forumasso: 'Forum associations',
  contactButton: 'Contact référent',
  rootClassName: '',
  venterestauration: 'Vente restauration',
  cuisine: 'Cuisine',
}

InscriptionInfo.propTypes = {
  posteselecInfo: PropTypes.string,
  animationjeux: PropTypes.string,
  detailButton: PropTypes.string,
  tombola: PropTypes.string,
  accueil: PropTypes.string,
  forumasso: PropTypes.string,
  contactButton: PropTypes.string,
  rootClassName: PropTypes.string,
  venterestauration: PropTypes.string,
  cuisine: PropTypes.string,
}

export default InscriptionInfo
