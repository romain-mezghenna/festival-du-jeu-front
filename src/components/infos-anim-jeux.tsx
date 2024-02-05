import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { sendRequest } from '../utils/sendRequest'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './infos-anim-jeux.css'

function InfosAnimJeux  (props :any)  {
  const user = useSelector((state: RootState) => state.user);
  const [jeux, setJeux] = React.useState<any>([]);
  const [zones, setZones] = React.useState<any>([]);
  const nombreJeux = jeux.length;
  React.useEffect(() => {
    if (user.token === null) {
      alert('Vous devez être connecté pour consulter les jeux');
      return;
    }
    sendRequest(
      'zones',
      'GET',
      {},
      user.token,
      (err, res) => {
        if (err) {
          alert('Erreur lors de la récupération des jeux');
          console.log(err);
        } else {
          //console.log(res);
          setZones(res);
        }
      }
    )
  }
  , []);
 const handleZoneChange = (event: React.ChangeEvent<HTMLSelectElement>)  => {
  if (user.token === null) {
    alert('Vous devez être connecté pour consulter les jeux');
    return;
  }
    const idZone = event.target.value;
    sendRequest(
      `jeux/zone/${idZone}`,
      'GET',
      {},
      user.token,
      (err, res) => {
        if (err) {
          alert('Erreur lors de la récupération des jeux');
          console.log(err);
        } else {
          console.log(res);
          setJeux(res);
        }
      }
    )
  }

 
  return (
    <div className={`infos-anim-jeux-container`}>
      <div className="infos-anim-jeux-container01">
        <span className="infos-anim-jeux-text">{props.text}</span>
      </div>
      <div className="infos-anim-jeux-container02">
        <div className="infos-anim-jeux-container03">
          <select className="infos-anim-jeux-button button" onChange={handleZoneChange} >
            {zones.map((zone: any) => (
              <option key={zone.idZone} value={zone.idZone} >{zone.nom}</option>
            ))}
          </select> 
        </div>
      
        <div className="infos-anim-jeux-container04">
          <div className="infos-anim-jeux-container05">
            <div className="infos-anim-jeux-container06">
              <span className="infos-anim-jeux-text01">{props.text1}</span>
            </div>
            {jeux.map((jeu: any) => (
            <div className="infos-anim-jeux-container16">
              <span className="infos-anim-jeux-text02">{jeu.Jeu.nom}</span>

            </div>
            ))}
          </div>
          <div className="infos-anim-jeux-container14">
            <span className="infos-anim-jeux-text06">{props.text2}</span>
            {jeux.map((jeu: any) => (
            <div className="infos-anim-jeux-container15">
              <div className="infos-anim-jeux-container16">
                <span className="infos-anim-jeux-text07">{jeu.Jeu.recu === true ? props.text410 : props.text41}</span>
              </div>
            </div>
            ))}
          </div>
          <div className="infos-anim-jeux-container23">
            <span className="infos-anim-jeux-text11">{props.text3}</span>
            {jeux.map((jeu: any) => (
            <div className="infos-anim-jeux-container24">
              <div className="infos-anim-jeux-container25">
                <span className="infos-anim-jeux-text12">{jeu.Jeu.video}</span>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
      <div className="infos-anim-jeux-container32">
        <Link to='/infos-jeux' className="">{props.text5}</Link>
      </div>
    </div>
  )
}

InfosAnimJeux.defaultProps = {
  text43: 'lien',
  text45: 'lien',
  text4: 'A',
  button5: 'Espace A2',
  text49: 'Non',
  text1: 'Jeu',
  button3: 'Espace B2',
  rootClassName: '',
  text411: 'B',
  button2: 'Espace B4',
  text3: 'site',
  button1: 'Espace B5',
  text42: 'lien',
  text2: 'Reçu?',
  button4: 'Espace A3',
  text410: 'Non',
  text5: 'Lien répertoire complet',
  text47: 'D',
  text44: 'lien',
  text: 'Nombre jeux à animer : XXX connus, YYY classés en espace, ZZZ reçus',
  text41: 'Oui',
  text46: 'Oui',
  text48: 'C',
  button: 'Espace A1',
}

InfosAnimJeux.propTypes = {
  text43: PropTypes.string,
  text45: PropTypes.string,
  text4: PropTypes.string,
  button5: PropTypes.string,
  text49: PropTypes.string,
  text1: PropTypes.string,
  button3: PropTypes.string,
  rootClassName: PropTypes.string,
  text411: PropTypes.string,
  button2: PropTypes.string,
  text3: PropTypes.string,
  button1: PropTypes.string,
  text42: PropTypes.string,
  text2: PropTypes.string,
  button4: PropTypes.string,
  text410: PropTypes.string,
  text5: PropTypes.string,
  text47: PropTypes.string,
  text44: PropTypes.string,
  text: PropTypes.string,
  text41: PropTypes.string,
  text46: PropTypes.string,
  text48: PropTypes.string,
  button: PropTypes.string,
}

export default InfosAnimJeux
