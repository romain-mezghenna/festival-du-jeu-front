import React from 'react'

import PropTypes from 'prop-types'

import InfosEquipe from './infos-equipe'
import './detail-poste-equipe-component.css'

function DetailPosteEquipeComponent(props : any){
  return (
    <div className="detail-poste-equipe-component-container">
      <div className="detail-poste-equipe-component-container1">
        <h1 className="detail-poste-equipe-component-text">{props.heading}</h1>
      </div>
      <InfosEquipe rootClassName="infos-equipe-root-class-name"></InfosEquipe>
    </div>
  )
}

DetailPosteEquipeComponent.defaultProps = {
  heading: 'Poste : <nomposte>',
}

DetailPosteEquipeComponent.propTypes = {
  heading: PropTypes.string,
}

export default DetailPosteEquipeComponent
