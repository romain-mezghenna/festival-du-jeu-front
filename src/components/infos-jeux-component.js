import React from 'react'

import PropTypes from 'prop-types'

import LigneInfosJeuComponent from './ligne-infos-jeu-component'
import './infos-jeux-component.css'

const InfosJeuxComponent = (props) => {
  return (
    <div className={`infos-jeux-component-container ${props.rootClassName} `}>
      <div className="infos-jeux-component-container01">
        <h1 className="infos-jeux-component-text">{props.heading}</h1>
      </div>
      <div className="infos-jeux-component-container02">
        <div className="infos-jeux-component-container03">
          <span className="infos-jeux-component-text1">{props.text}</span>
        </div>
        <div className="infos-jeux-component-container04">
          <span className="infos-jeux-component-text2">{props.text1}</span>
        </div>
        <div className="infos-jeux-component-container05">
          <span className="infos-jeux-component-text3">{props.text2}</span>
        </div>
        <div className="infos-jeux-component-container06">
          <span className="infos-jeux-component-text4">{props.text3}</span>
        </div>
        <div className="infos-jeux-component-container07">
          <span className="infos-jeux-component-text5">{props.text4}</span>
        </div>
        <div className="infos-jeux-component-container08">
          <span className="infos-jeux-component-text6">{props.text5}</span>
        </div>
        <div className="infos-jeux-component-container09">
          <span className="infos-jeux-component-text7">{props.text7}</span>
        </div>
        <div className="infos-jeux-component-container10">
          <span className="infos-jeux-component-text8">{props.text8}</span>
        </div>
      </div>
      <LigneInfosJeuComponent className=""></LigneInfosJeuComponent>
    </div>
  )
}

InfosJeuxComponent.defaultProps = {
  rootClassName: '',
  text13: 'Reçu',
  text3: 'Editeur',
  text5: 'âge min',
  text133: 'Reçu',
  text134: 'Reçu',
  text2: 'Auteur',
  text10: 'Zone bénévole',
  text9: 'Zone plan',
  text4: 'nb joueurs',
  text8: 'Notice',
  text: 'idJeu',
  text1: 'Nom du jeu',
  text132: 'Thèmes',
  heading: 'Infos sur les jeux',
  text11: 'idZone',
  text7: 'Type',
  text131: 'Mécanismes',
  text6: 'Durée',
  text12: 'A animer',
}

InfosJeuxComponent.propTypes = {
  rootClassName: PropTypes.string,
  text13: PropTypes.string,
  text3: PropTypes.string,
  text5: PropTypes.string,
  text133: PropTypes.string,
  text134: PropTypes.string,
  text2: PropTypes.string,
  text10: PropTypes.string,
  text9: PropTypes.string,
  text4: PropTypes.string,
  text8: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text132: PropTypes.string,
  heading: PropTypes.string,
  text11: PropTypes.string,
  text7: PropTypes.string,
  text131: PropTypes.string,
  text6: PropTypes.string,
  text12: PropTypes.string,
}

export default InfosJeuxComponent
