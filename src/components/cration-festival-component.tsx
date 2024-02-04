import React from 'react'

import PropTypes from 'prop-types'

import './cration-festival-component.css'

function CrationFestivalComponent (props : any){
  return (
    <div
      className={`cration-festival-component-container ${props.rootClassName} `}
    >
      <div className="cration-festival-component-container1">
        <div className="cration-festival-component-container2">
          <h1 className="cration-festival-component-text">{props.heading}</h1>
        </div>
        <div className="cration-festival-component-container3">
          <div className="cration-festival-component-container4">
            <div className="cration-festival-component-container5">
              <span className="cration-festival-component-text1">
                {props.text}
              </span>
              <input
                type="text"
                placeholder={props.textinputPlaceholder}
                className="input"
              />
              <span className="cration-festival-component-text2">
                {props.text1}
              </span>
              <input
                type="text"
                placeholder={props.textinputPlaceholder1}
                className="input"
              />
              <span className="cration-festival-component-text3">
                {props.text2}
              </span>
              <input
                type="text"
                placeholder={props.textinputPlaceholder2}
                className="input"
              />
              <span className="cration-festival-component-text4">
                {props.text3}
              </span>
              <span className="cration-festival-component-text5">
                {props.text4}
              </span>
              <select className="">
                <option value="Lundi" className="">
                  Lundi
                </option>
                <option value="Mardi" className="">
                  Mardi
                </option>
                <option value="Mercredi" className="">
                  Mercredi
                </option>
                <option value="Jeudi" className="">
                  Jeudi
                </option>
                <option value="Vendredi" className="">
                  Vendredi
                </option>
                <option value="Samedi" className="">
                  Samedi
                </option>
                <option value="Dimanche" className="">
                  Dimanche
                </option>
              </select>
              <input
                type="text"
                placeholder={props.textinputPlaceholder4}
                className="input"
              />
              <input
                type="text"
                placeholder={props.textinputPlaceholder44}
                className="input"
              />
              <input
                type="text"
                placeholder={props.textinputPlaceholder43}
                className="input"
              />
              <input
                type="text"
                placeholder={props.textinputPlaceholder42}
                className="input"
              />
              <input
                type="text"
                placeholder={props.textinputPlaceholder41}
                className="input"
              />
              <button
                type="button"
                className="cration-festival-component-button button"
              >
                {props.button}
              </button>
            </div>
          </div>
          <div className="cration-festival-component-container6">
            <div className="cration-festival-component-container7">
              <span className="cration-festival-component-text6">
                {props.text6}
              </span>
              <span className="cration-festival-component-text7">
                {props.text61}
              </span>
              <select className="">
                <option value="Option 1" className="">
                  Option 1
                </option>
                <option value="Option 1" className="">
                  Option 1
                </option>
                <option value="Option 2" className="">
                  Option 2
                </option>
                <option value="Option 2" className="">
                  Option 2
                </option>
                <option value="Option 3" className="">
                  Option 3
                </option>
                <option value="Option 3" className="">
                  Option 3
                </option>
              </select>
              <button
                type="button"
                className="cration-festival-component-button1 button"
              >
                {props.button1}
              </button>
              <span className="cration-festival-component-text8">
                {props.text611}
              </span>
              <input
                type="text"
                placeholder={props.textinputPlaceholder5}
                className="input"
              />
              <input
                type="text"
                placeholder={props.textinputPlaceholder52}
                className="input"
              />
              <input
                type="text"
                placeholder={props.textinputPlaceholder51}
                className="input"
              />
              <button
                type="button"
                className="cration-festival-component-button2 button"
              >
                {props.button2}
              </button>
            </div>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="cration-festival-component-button3 button"
      >
        {props.button3}
      </button>
    </div>
  )
}

CrationFestivalComponent.defaultProps = {
  button1: 'Ajouter le poste',
  textinputPlaceholder51: 'pseudo référent',
  textinputPlaceholder52: 'Détail',
  textinputPlaceholder5: 'Nom',
  text61: 'Postes existant',
  rootClassName: '',
  textinputPlaceholder2: 'yyyy-mm-dd',
  button3: 'Créer le festival',
  textinputPlaceholder42: 'Créneau 4',
  textinputPlaceholder41: 'Créneau 5',
  button: 'Sauvegarder créneaux',
  text3: 'Créneaux',
  text1: 'Date de début',
  text611: 'Créer un poste',
  text4: 'Jour',
  textinputPlaceholder1: 'yyyy-mm-dd',
  textinputPlaceholder43: 'Créneau 3',
  heading: 'Menu de création du festival',
  textinputPlaceholder44: 'Créneau 2',
  text6: 'Postes',
  button2: 'Ajouter le poste',
  textinputPlaceholder4: 'Créneau 1',
  text2: 'Date de fin',
  textinputPlaceholder: 'placeholder',
  text: 'Nom du festival',
}

CrationFestivalComponent.propTypes = {
  button1: PropTypes.string,
  textinputPlaceholder51: PropTypes.string,
  textinputPlaceholder52: PropTypes.string,
  textinputPlaceholder5: PropTypes.string,
  text61: PropTypes.string,
  rootClassName: PropTypes.string,
  textinputPlaceholder2: PropTypes.string,
  button3: PropTypes.string,
  textinputPlaceholder42: PropTypes.string,
  textinputPlaceholder41: PropTypes.string,
  button: PropTypes.string,
  text3: PropTypes.string,
  text1: PropTypes.string,
  text611: PropTypes.string,
  text4: PropTypes.string,
  textinputPlaceholder1: PropTypes.string,
  textinputPlaceholder43: PropTypes.string,
  heading: PropTypes.string,
  textinputPlaceholder44: PropTypes.string,
  text6: PropTypes.string,
  button2: PropTypes.string,
  textinputPlaceholder4: PropTypes.string,
  text2: PropTypes.string,
  textinputPlaceholder: PropTypes.string,
  text: PropTypes.string,
}

export default CrationFestivalComponent
