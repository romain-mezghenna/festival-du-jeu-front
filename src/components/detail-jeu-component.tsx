import React from 'react'

import PropTypes from 'prop-types'

import './detail-jeu-component.css'

function DetailJeuComponent(props : any){
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
            </span>
          </li>
          <li className="detail-jeu-component-li01 list-item">
            <span className="detail-jeu-component-text04">Auteur :</span>
          </li>
          <li className="detail-jeu-component-li02 list-item">
            <span className="detail-jeu-component-text05">Editeur :</span>
          </li>
          <li className="detail-jeu-component-li03 list-item">
            <span className="detail-jeu-component-text06">
              Nombre de joueurs :
            </span>
          </li>
          <li className="detail-jeu-component-li04 list-item">
            <span className="detail-jeu-component-text07">
              <span className="">âge minimal :</span>
              <br className=""></br>
            </span>
          </li>
          <li className="detail-jeu-component-li05 list-item">
            <span className="detail-jeu-component-text10">
              <span className="">Durée :</span>
              <br className=""></br>
            </span>
          </li>
          <li className="detail-jeu-component-li06 list-item">
            <span className="detail-jeu-component-text13">Type :</span>
          </li>
          <li className="detail-jeu-component-li07 list-item">
            <span className="detail-jeu-component-text14">Notice :</span>
          </li>
          <li className="detail-jeu-component-li08 list-item">
            <span className="detail-jeu-component-text15">Zone plan :</span>
          </li>
          <li className="detail-jeu-component-li09 list-item">
            <span className="detail-jeu-component-text16">Zone bénévole :</span>
          </li>
          <li className="detail-jeu-component-li10 list-item">
            <span className="detail-jeu-component-text17">idZone :</span>
          </li>
          <li className="detail-jeu-component-li11 list-item">
            <span className="detail-jeu-component-text18">A animer :</span>
          </li>
          <li className="detail-jeu-component-li12 list-item">
            <span className="detail-jeu-component-text19">Reçu :</span>
          </li>
          <li className="detail-jeu-component-li13 list-item">
            <span className="detail-jeu-component-text20">Thèmes :</span>
          </li>
          <li className="detail-jeu-component-li14 list-item">
            <span className="detail-jeu-component-text21">Tags :</span>
          </li>
          <li className="detail-jeu-component-li15 list-item">
            <span className="detail-jeu-component-text22">Description :</span>
          </li>
          <li className="detail-jeu-component-li16 list-item">
            <span className="detail-jeu-component-text23">Image :</span>
          </li>
          <li className="detail-jeu-component-li17 list-item">
            <span className="detail-jeu-component-text24">Logo :</span>
          </li>
          <li className="detail-jeu-component-li18 list-item">
            <span className="detail-jeu-component-text25">
              <span className="">Vidéo</span>
              <br className=""></br>
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}

DetailJeuComponent.defaultProps = {
  rootClassName: '',
  heading: 'Détail du jeu <idJeu>',
}

DetailJeuComponent.propTypes = {
  rootClassName: PropTypes.string,
  heading: PropTypes.string,
}

export default DetailJeuComponent
