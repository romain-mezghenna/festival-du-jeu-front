import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import PropTypes from 'prop-types'

import './infos-hebergement.css'
import { sendRequest } from '../utils/sendRequest'

function InfosHebergement (props : any) {
  const user = useSelector((state: RootState) => state.user);
  const [hebergements, setHebergements] = useState(null);
  React.useEffect(() => {
    if (user.token === null) {
      alert('Vous devez être connecté pour consulter les hébergements');
      return;
    }
    // Récupère tous les hébergements depuis la base de données
    sendRequest(
      'hebergement',
      'GET',
      {},
      user.token,
      (err, res)=> {
        if (err) {
          alert('Erreur lors de la récupération des informations');
          console.log(err);
        } else {
          console.log(res);
          setHebergements(res);
        }
      }
    )
  }, []);
  return (
    <div className={`infos-hebergement-container ${props.rootClassName} `}>
      <div className="infos-hebergement-container1">
        <span className="infos-hebergement-text">{props.text}</span>
      </div>
      <div className="infos-hebergement-container2">
        <span className="infos-hebergement-text1">{props.text1}</span>
      </div>
      <div className="infos-hebergement-container3">
        <span className="infos-hebergement-text2">{props.text2}</span>
      </div>
      
      {hebergements && hebergements.map((hebergement, index) => (
        <div className='infos-hebergement-container2'>
        <div className="infos-hebergement-container5" key={index}>
          <span className="infos-hebergement-text">{hebergement.nom}</span>
        </div>
        <div className="infos-hebergement-container6">
        <span className="infos-hebergement-text1">{hebergement.prenom}</span>
      </div>
      <div className="infos-hebergement-container7">
        <span className="infos-hebergement-text2">{hebergement.email}</span>
      </div>
        </div>
      ))}
    </div>
  )
}

InfosHebergement.defaultProps = {
  text: 'Nom',
  text1: 'Prénom',
  rootClassName: '',
  text2: 'e-mail',
}

InfosHebergement.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
}

export default InfosHebergement
