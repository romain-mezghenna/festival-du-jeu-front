import React, { useEffect } from 'react'

import PropTypes from 'prop-types'

import './gestion-zones-component.css'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { send } from 'process'
import { sendRequest } from '../utils/sendRequest'

function GestionZonesComponent (props : any) {
  const [selectedFestival, setSelectedFestival] = React.useState('')
  const [selectedPoste, setSelectedPoste] = React.useState('')
  const [festivals, setFestivals] = React.useState([] as any[])
  const [postes, setPostes] = React.useState([] as any[])
  const [zones, setZones] = React.useState([] as any[])
  const [nomZoneAdd, setNomZoneAdd] = React.useState('')
  const [nomZoneEdit, setNomZoneEdit] = React.useState('')
  const [selectedZoneEdit, setSelectedZoneEdit] = React.useState('')
  const [selectedZoneDelete, setSelectedZoneDelete] = React.useState('')
  const user = useSelector((state: RootState) => state.user)

  useEffect(() => {
    if(user.token === null){
      alert('Vous devez être connecté pour accéder à cette page')
      return
    }
    sendRequest(
      'festivals',
      'GET',
      {},
      user.token,
      (err, res) => {
        if (err) {
          alert('Erreur lors de la récupération des festivals')
          console.log(err)
        } else {
          console.log(res)
          setFestivals(res)
        }
      }
    )
    sendRequest(
      `postes/${selectedFestival}`,
      'GET',
      {},
      user.token,
      (err, res) => {
        if (err) {
          alert('Erreur lors de la récupération des postes')
          console.log(err)
        } else {
          console.log(res)
          setPostes(res)
        }
      }
    )
  }, [])
  const handleChangeFestival = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if(user.token === null){
      alert('Vous devez être connecté pour accéder à cette page')
      return
    }
    setSelectedFestival(event.target.value)
    sendRequest(
      `postes/${event.target.value}`,
      'GET',
      {},
      user.token,
      (err, res) => {
        if (err) {
          alert('Erreur lors de la récupération des postes')
          console.log(err)
        } else {
          console.log(res)
          setPostes(res)
        }
      }
    )
  }
  const handleChangePoste = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPoste(event.target.value)
    if(user.token === null){
      alert('Vous devez être connecté pour accéder à cette page')
      return
    }
    sendRequest( 
      `zones/${event.target.value}`,
      'GET',
      {},
      user.token,
      (err, res) => {
        if (err) {
          alert('Erreur lors de la récupération des zones')
          console.log(err)
        } else {
          console.log(res)
          setZones(res)
        }
      }
    )
  }
  return (
    <div
      className={`gestion-zones-component-container ${props.rootClassName} `}
    >
      <div className="gestion-zones-component-container1">
        <h1 className="gestion-zones-component-text">{props.heading}</h1>
      </div>
      <div className="gestion-zones-component-container2">
        <span className="gestion-zones-component-text1">{props.text4}</span>
        <select className="gestion-zones-component-select" value={props.selectedFestival} onChange={handleChangeFestival}>
          {festivals.map((festival) => (
            <option key={festival.idFestival} value={festival.idFestival} className="">
              {festival.nom}
            </option>
          ))}
        </select>
        <span className="gestion-zones-component-text1">{props.text3}</span>
        <select className="gestion-zones-component-select" value={props.selectedPoste} onChange={handleChangePoste}>
          {postes.map((poste) => (
            <option key={poste.idPoste} value={poste.idPoste} className="">
              {poste.nom}
              </option>
          ))}
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
            onChange={(e) => {
              setNomZoneAdd(e.target.value)
            }
            }
          />
          <button
            type="button"
            className="gestion-zones-component-button button"
            onClick={() => {
              if(user.token === null){
                alert('Vous devez être connecté pour accéder à cette page')
                return
              }
              sendRequest(
                'zones',
                'POST',
                { nom: nomZoneAdd, idPoste: selectedPoste, idFestival: selectedFestival},
                user.token,
                (err, res) => {
                  if (err) {
                    alert('Erreur lors de la création de la zone')
                    console.log(err)
                  } else {
                    console.log(res)
                    setZones([...zones, res])
                  }
                }
              )
            }
            }
          >
            {props.button}
          </button>
        </div>
        <div className="gestion-zones-component-container6">
          <span className="gestion-zones-component-text3">{props.text1}</span>
          <select className="gestion-zones-component-select1" onChange={
            (e) => {
              setSelectedZoneEdit(e.target.value)
            }
          }>
            {zones.map((zone) => (
              <option key={zone.idZone} value={zone.idZone} className="">
                {zone.nom}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder={props.textinputPlaceholder1}
            className="gestion-zones-component-textinput1 input"
            onChange={(e) => {
              setNomZoneEdit(e.target.value)
            }
            }
          />
          <button
            type="button"
            className="gestion-zones-component-button1 button"
            onClick={() => {
              if(user.token === null){
                alert('Vous devez être connecté pour accéder à cette page')
                return
              }
              sendRequest(
                `zones/${selectedZoneEdit}`,
                'PUT',
                { nom: nomZoneEdit},
                user.token,
                (err, res) => {
                  if (err) {
                    alert('Erreur lors de la modification de la zone')
                    console.log(err)
                  } else {
                    console.log(res)
                    setZones([...zones, res])
                  }
                }
              ) 
            }
            }
          >
            {props.button1}
          </button>
        </div>
        <div className="gestion-zones-component-container7">
          <span className="gestion-zones-component-text4">{props.text2}</span>
          <select className="gestion-zones-component-select2" onChange={
            (e) => {
              setSelectedZoneDelete(e.target.value)
            }
          }>
            {zones.map((zone) => (
              <option key={zone.idZone} value={zone.idZone} className="">
                {zone.nom}
              </option>
            ))}
          </select>
          <button
            type="button"
            className="gestion-zones-component-button2 button"
            onClick={() => {
              if(user.token === null){
                alert('Vous devez être connecté pour accéder à cette page')
                return
              }
              sendRequest(
                `zones/${selectedZoneDelete}`,
                'DELETE',
                {},
                user.token,
                (err, res) => {
                  if (err) {
                    alert('Erreur lors de la suppression de la zone')
                    console.log(err)
                  } else {
                    console.log(res)
                    setZones(zones.filter((zone) => zone.idZone !== selectedZoneEdit))
                  }
                }
              )
            }
            }
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
