import React from 'react'

import PropTypes from 'prop-types'

import './edition-festival-component.css'

const EditionFestivalComponent = (props) => {
  return (
    <div
      className={`edition-festival-component-container ${props.rootClassName} `}
    >
      <div className="edition-festival-component-container1">
        <h1 className="edition-festival-component-text">{props.heading}</h1>
      </div>
      <div className="edition-festival-component-container2">
        <div className="edition-festival-component-container3">
          <span className="edition-festival-component-text1">{props.text}</span>
          <input
            type="text"
            placeholder={props.textinputPlaceholder}
            className="input"
          />
          <span className="edition-festival-component-text2">
            {props.text1}
          </span>
          <input
            type="text"
            placeholder={props.textinputPlaceholder1}
            className="input"
          />
          <span className="edition-festival-component-text3">
            {props.text2}
          </span>
          <input
            type="text"
            placeholder={props.textinputPlaceholder2}
            className="input"
          />
          <span className="edition-festival-component-text4">
            {props.text3}
          </span>
          <span className="edition-festival-component-text5">
            {props.text4}
          </span>
          <select className="edition-festival-component-select">
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
            className="edition-festival-component-button button"
          >
            {props.button}
          </button>
        </div>
        <div className="edition-festival-component-container4">
          <span className="edition-festival-component-text6">
            {props.text6}
          </span>
          <span className="edition-festival-component-text7">
            {props.text61}
          </span>
          <select className="edition-festival-component-select1">
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
            className="edition-festival-component-button1 button"
          >
            {props.button1}
          </button>
          <span className="edition-festival-component-text8">
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
            className="edition-festival-component-button2 button"
          >
            {props.button2}
          </button>
        </div>
      </div>
      <button
        type="button"
        className="edition-festival-component-button3 button"
      >
        {props.button3}
      </button>
    </div>
  )
}

EditionFestivalComponent.defaultProps = {
  text: 'Nom du festival',
  text1: 'Date de début',
  textinputPlaceholder2: 'yyyy-mm-dd',
  textinputPlaceholder44: 'Créneau 2',
  rootClassName: '',
  text611: 'Créer un poste',
  textinputPlaceholder4: 'Créneau 1',
  heading: "Menu d'édition du festival",
  textinputPlaceholder41: 'Créneau 5',
  button: 'Sauvegarder créneaux',
  textinputPlaceholder5: 'Nom',
  textinputPlaceholder52: 'Détail',
  textinputPlaceholder51: 'pseudo référent',
  textinputPlaceholder42: 'Créneau 4',
  textinputPlaceholder1: 'yyyy-mm-dd',
  text5: 'Postes',
  text3: 'Créneaux',
  button3: 'Enregistrer les modifications et quitter',
  button1: 'Ajouter le poste',
  textinputPlaceholder43: 'Créneau 3',
  textinputPlaceholder: 'placeholder',
  textinputPlaceholder3: 'placeholder',
  text2: 'Date de fin',
  text6: 'Postes',
  text4: 'Jour',
  button2: 'Ajouter le poste',
  text61: 'Postes existant',
}

EditionFestivalComponent.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  textinputPlaceholder2: PropTypes.string,
  textinputPlaceholder44: PropTypes.string,
  rootClassName: PropTypes.string,
  text611: PropTypes.string,
  textinputPlaceholder4: PropTypes.string,
  heading: PropTypes.string,
  textinputPlaceholder41: PropTypes.string,
  button: PropTypes.string,
  textinputPlaceholder5: PropTypes.string,
  textinputPlaceholder52: PropTypes.string,
  textinputPlaceholder51: PropTypes.string,
  textinputPlaceholder42: PropTypes.string,
  textinputPlaceholder1: PropTypes.string,
  text5: PropTypes.string,
  text3: PropTypes.string,
  button3: PropTypes.string,
  button1: PropTypes.string,
  textinputPlaceholder43: PropTypes.string,
  textinputPlaceholder: PropTypes.string,
  textinputPlaceholder3: PropTypes.string,
  text2: PropTypes.string,
  text6: PropTypes.string,
  text4: PropTypes.string,
  button2: PropTypes.string,
  text61: PropTypes.string,
}

export default EditionFestivalComponent