import React, { useEffect } from 'react'

import PropTypes from 'prop-types'

import './gestion-zones-component.css'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { send } from 'process'
import { sendRequest } from '../utils/sendRequest'
import { Navigate } from 'react-router-dom'

function GestionZonesComponent (props : any) {

  const [festivals, setFestivals] = React.useState([] as any[])
  const [postes, setPostes] = React.useState([] as any[])
  const [zones, setZones] = React.useState([] as any[])
  const [nomZoneAdd, setNomZoneAdd] = React.useState('')
  const [nomZoneEdit, setNomZoneEdit] = React.useState('')
  const [idZoneEdit, setSelectedZoneEdit] = React.useState(1)
  const [idZoneDelete, setSelectedZoneDelete] = React.useState(1)
  const [idFestival, setIdFestival] = React.useState(1)
  const [idPoste, setIdPoste] = React.useState(1)
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
          setIdFestival(res[0].idFestival)
          setIdPoste(res[0].FestivalPostes[0].idPoste)
          let festivalPostes : any[] = [];
          res[0].FestivalPostes.forEach((poste:any) => {
            festivalPostes.push(poste.Poste);
          });
          setPostes(festivalPostes)
        }
      }
    )
  }, [])
  const handleChangeFestival = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if(user.token === null){
      alert('Vous devez être connecté pour accéder à cette page')
      return
    }
    console.log("idFestival :" + Number(event.target.value))
    setIdFestival(Number(event.target.value))
    let postesArray : any[] = [];
    let f = festivals.find((festival) => { return festival.idFestival == event.target.value});
    f.FestivalPostes.forEach((poste:any) => {
      postesArray.push(poste.Poste);
    });
    setPostes(postesArray)
  }
  const handleChangePoste = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("idPoste :" + Number(event.target.value))
    setIdPoste(Number(event.target.value))
    if(user.token === null){
      alert('Vous devez être connecté pour accéder à cette page')
      return
    }
    console.log(idPoste)
    sendRequest( 
      `zones/poste/${idPoste}`,
      'GET',
      {},
      user.token,
      (err, res) => {
        if (err) {
          alert('Erreur lors de la récupération des zones')
          console.log(err)
        } else {
          console.log(res)
          let zonesArray : any[] = [];
          res.forEach((zone:any) => {
            zonesArray.push(zone);
          });
          setZones(zonesArray)
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
                { idZone:Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000,
                  nom: nomZoneAdd, idPoste: idPoste, idFestival: idFestival},
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
              setSelectedZoneEdit(Number(e.target.value))
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
              console.log(idZoneEdit)
              sendRequest(
                `zones/${idZoneEdit}`,
                'PUT',
                { nom: nomZoneEdit},
                user.token,
                (err, res) => {
                  if (err) {
                    alert('Erreur lors de la modification de la zone')
                    console.log(err)
                  } else {
                    console.log(res)
                    //Remplacer le bon élément dans le tableau
                    let newZones = zones.map((zone) => {
                      if(zone.idZone === idZoneEdit){
                        zone.nom = nomZoneEdit
                      }
                      return zone
                    })
                    //remplacer le tableau de zones
                    setZones(newZones)
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
              setSelectedZoneDelete(Number(e.target.value))
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
                `zones/${idZoneDelete}`,
                'DELETE',
                {},
                user.token,
                (err, res) => {
                  if (err) {
                    alert('Erreur lors de la suppression de la zone')
                    console.log(err)
                  } else {
                    console.log(res)
                    //supprimer la zone dans le tableau de zones
                    let newZones = zones.filter((zone) => {
                      return zone.idZone !== idZoneDelete
                    })
                    setZones(newZones)
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
  button2: 'Supprimer',
  textinputPlaceholder: 'placeholder',
  textinputPlaceholder1: 'placeholder',
  textinputPlaceholder2: 'placeholder',
  button1: 'Modifier',
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
