import React, { useEffect } from 'react'

import PropTypes from 'prop-types'

import './detail-jeu-component.css'
import { useLocation } from 'react-router-dom'
import { send } from 'process'
import { sendRequest } from '../utils/sendRequest'
import { RootState } from '../store/store'
import { useSelector } from 'react-redux'

function DetailJeuComponent(props : any){
  const location = useLocation()
  const idJeu = new URLSearchParams(location.search).get('idJeu')
  const [jeu, setJeu] = React.useState({idJeu: '', nom: '', auteur: '', editeur: '', nbJoueurs: '', ageMin: '', duree: '', type: '', notice: '', aAnimer: '', recu: '', themes: '', tags: '', description: '',mecanismes: ''})  
  const user = useSelector((state: RootState) => state.user)
  console.log(idJeu)
  useEffect(() => {
    if(user.token === null){
      alert('Vous devez être connecté pour accéder à cette page')
      return
    }
    sendRequest(
      `jeux/${idJeu}`,
      'GET',
      {},
      user.token,
      (err, res) => {
        if (err) {
          alert('Erreur lors de la récupération des jeux')
          console.log(err)
        } else {
          console.log(res)
          setJeu(res)
        }
      }
    )
  }, [idJeu])
  return (
    <div className={`detail-jeu-component-container ${props.rootClassName} `}>
      <div className="detail-jeu-component-container1">
        <h1 className="detail-jeu-component-text">{props.heading}</h1>
      </div>
      <div className="detail-jeu-component-container2">
        <ul className="detail-jeu-component-ul list">
          <li className="detail-jeu-component-li list-item">
            <span className="detail-jeu-component-text01">
              <span className="">Nom du jeu :</span>
              <br className=""></br>
              {jeu.nom} {/* Replace with the game name */}
            </span>
          </li>
          <li className="detail-jeu-component-li01 list-item">
            <span className="detail-jeu-component-text04">Auteur :</span>
            {jeu.auteur} {/* Replace with the game author */}
          </li>
          <li className="detail-jeu-component-li02 list-item">
            <span className="detail-jeu-component-text05">Editeur :</span>
            {jeu.editeur} {/* Replace with the game publisher */}
          </li>
          <li className="detail-jeu-component-li03 list-item">
            <span className="detail-jeu-component-text06">
              Nombre de joueurs :
            </span>
            {jeu.nbJoueurs} {/* Replace with the number of players */}
          </li>
          <li className="detail-jeu-component-li04 list-item">
            <span className="detail-jeu-component-text07">
              <span className="">âge minimal :</span>
              <br className=""></br>
              {jeu.ageMin} {/* Replace with the minimum age */}
            </span>
          </li>
          <li className="detail-jeu-component-li05 list-item">
            <span className="detail-jeu-component-text10">
              <span className="">Durée :</span>
              <br className=""></br>
              {jeu.duree} {/* Replace with the duration */}
            </span>
          </li>
          <li className="detail-jeu-component-li06 list-item">
            <span className="detail-jeu-component-text13">Type :</span>
            {jeu.type} {/* Replace with the game type */}
          </li>
          <li className="detail-jeu-component-li07 list-item">
            <span className="detail-jeu-component-text14">Notice :</span>
            {jeu.notice} {/* Replace with the game notice */}
          </li>
          <li className="detail-jeu-component-li11 list-item">
            <span className="detail-jeu-component-text18">A animer :</span>
            {jeu.aAnimer} {/* Replace with the animation status */}
          </li>
          <li className="detail-jeu-component-li12 list-item">
            <span className="detail-jeu-component-text19">Reçu :</span>
            {jeu.recu} {/* Replace with the receipt status */}
          </li>
          <li className="detail-jeu-component-li13 list-item">
            <span className="detail-jeu-component-text20">Thèmes :</span>
            {jeu.themes} {/* Replace with the game themes */}
          </li>
          <li className="detail-jeu-component-li14 list-item">
            <span className="detail-jeu-component-text21">Tags :</span>
            {jeu.tags} {/* Replace with the game tags */}
          </li>
          <li className="detail-jeu-component-li15 list-item">
            <span className="detail-jeu-component-text22">Description :</span>
            {jeu.description} {/* Replace with the game description */}
          </li>
        </ul>
      </div>
    </div>
  )
}
DetailJeuComponent.defaultProps = {
  rootClassName: '',
  heading: 'Détail du jeu',
}

DetailJeuComponent.propTypes = {
  rootClassName: PropTypes.string,
  heading: PropTypes.string,
}

export default DetailJeuComponent
