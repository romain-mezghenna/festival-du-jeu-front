import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import './inscription-info.css'
import { sendRequest } from '../utils/sendRequest'

function InscriptionInfo (props : any) {
  const user = useSelector((state: RootState) => state.user);
  const [postes, setPostes] = useState(null);
  const [posteSelectionne, setPosteSelectionne] = useState<any>(null);
  const [detail, setDetail] = useState<any>(null);
  const [referent, setReferent] = useState<any>(null);

  React.useEffect(() => {
    if (user.token === null) {
      alert('Vous devez être connecté pour consulter les postes');
      return;
    }
    sendRequest(
      'postes',
      'GET',
      {},
      user.token,
      (err, res) => {
        if (err) {
          alert('Erreur lors de la récupération des postes');
          console.log(err);
        } else {
          console.log(res);
          setPostes(res);
        }
      }
    )
  }, []);
  const handleDetailClick = (poste : any, detail : any, referent : any) => {
    // Mettez en œuvre la logique pour afficher les détails du poste
    console.log('Détails du poste:', poste);
    setPosteSelectionne(poste);
    setDetail(detail);
    setReferent(referent);
    console.log(posteSelectionne);
    console.log('detail : ' + detail); 
    
  };
  return (
    <div className={`inscription-info-container ${props.rootClassName}`}>
      <h3 className="inscription-info-text">Sélectionnez un poste :</h3>
      {postes && Array.isArray(postes) && postes.map((poste, index) => (
        <div key={index} className="inscription-info-container1">
          <button
            type="button"
            className="inscription-info-button button"
            onClick={() => handleDetailClick(poste, poste.details, poste.pseudoReferent)}
          >
            {poste.nom}
          </button>
        </div>
      ))}
      {posteSelectionne && (
        <div className="inscription-info-container2">
          <h3>Détails du poste :</h3>
          <p>{detail}</p>
          <h3>Nom du référent :</h3>
          <p>{referent}</p>
        </div>
      )}
    </div>
  );
}

InscriptionInfo.propTypes = {
  posteselecInfo: PropTypes.string,
  animationjeux: PropTypes.string,
  detailButton: PropTypes.string,
  tombola: PropTypes.string,
  accueil: PropTypes.string,
  forumasso: PropTypes.string,
  contactButton: PropTypes.string,
  rootClassName: PropTypes.string,
  venterestauration: PropTypes.string,
  cuisine: PropTypes.string,
}

export default InscriptionInfo
