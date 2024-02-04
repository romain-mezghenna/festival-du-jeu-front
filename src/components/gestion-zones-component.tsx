import React from 'react'

import PropTypes from 'prop-types'

import './gestion-zones-component.css'

function GestionZonesComponent (props : any) {
  return (
    <div
      className={`gestion-zones-component-container ${props.rootClassName} `}
    >
      <div className="gestion-zones-component-container1">
        <h1 className="gestion-zones-component-text">{props.heading}</h1>
      </div>
      <div className="gestion-zones-component-container2">
        <span className="gestion-zones-component-text1">{props.text3}</span>
        <select className="gestion-zones-component-select">
          <option value="Option 1" className="">
            Option 1
          </option>
          <option value="Option 2" className="">
            Option 2
          </option>
          <option value="Option 3" className="">
            Option 3
          </option>
        </select>
      </div>
      <div className="gestion-zones-component-container3">
        <div className="gestion-zones-component-container4">
          <div className="gestion-zones-component-container5">
            <span className="gestion-zones-component-text2">{props.text}</span>
          </div>
          <input
            type="text"
            placeholder={props.textinputPlaceholder}
            className="gestion-zones-component-textinput input"
          />
          <button
            type="button"
            className="gestion-zones-component-button button"
          >
            {props.button}
          </button>
        </div>
        <div className="gestion-zones-component-container6">
          <span className="gestion-zones-component-text3">{props.text1}</span>
          <select className="gestion-zones-component-select1">
            <option value="Option 1" className="">
              Option 1
            </option>
            <option value="Option 2" className="">
              Option 2
            </option>
            <option value="Option 3" className="">
              Option 3
            </option>
          </select>
          <input
            type="text"
            placeholder={props.textinputPlaceholder1}
            className="gestion-zones-component-textinput1 input"
          />
          <button
            type="button"
            className="gestion-zones-component-button1 button"
          >
            {props.button1}
          </button>
        </div>
        <div className="gestion-zones-component-container7">
          <span className="gestion-zones-component-text4">{props.text2}</span>
          <select className="gestion-zones-component-select2">
            <option value="Option 1" className="">
              Option 1
            </option>
            <option value="Option 2" className="">
              Option 2
            </option>
            <option value="Option 3" className="">
              Option 3
            </option>
          </select>
          <button
            type="button"
            className="gestion-zones-component-button2 button"
          >
            {props.button2}
          </button>
        </div>
      </div>
    </div>
  )
}

GestionZonesComponent.defaultProps = {
  button2: 'Ajouter',
  textinputPlaceholder: 'placeholder',
  textinputPlaceholder1: 'placeholder',
  textinputPlaceholder2: 'placeholder',
  button1: 'Ajouter',
  text: 'Ajouter une zone',
  text1: 'Editer une zone',
  button: 'Ajouter',
  heading: 'Gestion des zones',
  rootClassName: '',
  text2: 'Supprimer une zone',
  text3: 'Choix du poste',
}

GestionZonesComponent.propTypes = {
  button2: PropTypes.string,
  textinputPlaceholder: PropTypes.string,
  textinputPlaceholder1: PropTypes.string,
  textinputPlaceholder2: PropTypes.string,
  button1: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  button: PropTypes.string,
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
}

export default GestionZonesComponent
