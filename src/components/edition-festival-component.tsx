import React from 'react'

import PropTypes from 'prop-types'
import TimeTable from './TimeTable'

import './edition-festival-component.css'
import { useLocation } from 'react-router-dom'

function EditionFestivalComponent (props : any) {
  const location = useLocation()
  const idFestival = new URLSearchParams(location.search).get('idFestival')

  return (
    <div
      className={`edition-festival-component-container ${props.rootClassName} `}
    >
    <TimeTable idFestival={Number(idFestival)} cellComponentType='MODIF'></TimeTable>
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
