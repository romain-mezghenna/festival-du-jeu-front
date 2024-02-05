import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'

import './inscription-info.css'

function InscriptionInfo (props : any) {
  const [posteSelectionne, setPosteSelectionne] = useState(null);

  const handleDetailClick = (poste : any) => {
    setPosteSelectionne(poste);
  };

  const handleContactClick = (poste : any) => {
    // Mettez en œuvre la logique pour contacter le référent du poste
    console.log('Contact référent pour le poste:', poste);
  };
  return (
    <div className={`inscription-info-container ${props.rootClassName} `}>
      <div className="inscription-info-container1">
        <h3 className="inscription-info-text">{props.posteselecInfo}</h3>
        <button type="button" className="inscription-info-button button" onClick={() => handleDetailClick('Animation jeux')}>
          {props.animationjeux}
        </button>
        <button type="button" className="inscription-info-button1 button" onClick={() => handleDetailClick('Accueil')}>
          {props.accueil}
        </button>
        <button type="button" className="inscription-info-button2 button" onClick={() => handleDetailClick('Vente Restauration')}>
          {props.venterestauration}
        </button>
        <button type="button" className="inscription-info-button3 button" onClick={() => handleDetailClick('Cuisine')}>
          {props.cuisine}
        </button>
        <button type="button" className="inscription-info-button4 button" onClick={() => handleDetailClick('Tombola')}>
          {props.tombola}
        </button>
      <button type="button" className="inscription-info-button5 button" onClick={() => handleDetailClick('Forum Associations')}>
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
