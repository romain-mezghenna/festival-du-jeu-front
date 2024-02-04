import React from 'react'

import PropTypes from 'prop-types'

import InfosHebergement from './infos-hebergement'
import './hebergement-component.css'

const HebergementComponent = (props) => {
  return (
    <div className={`hebergement-component-container ${props.rootClassName} `}>
      <div className="hebergement-component-container1">
        <h1 className="hebergement-component-text">{props.heading}</h1>
      </div>
      <InfosHebergement
        rootClassName="infos-hebergement-root-class-name"
        className=""
      ></InfosHebergement>
    </div>
  )
}

HebergementComponent.defaultProps = {
  heading: 'Liste des bénévoles ayant proposé un hébergment',
  rootClassName: '',
}

HebergementComponent.propTypes = {
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default HebergementComponent
