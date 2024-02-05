import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { sendRequest } from '../utils/sendRequest'

import PropTypes from 'prop-types'

import './infos-anim-jeux.css'

function InfosAnimJeux  (props :any)  {
  const user = useSelector((state: RootState) => state.user);
  const [jeux, setJeux] = React.useState<any>([]);
  const [zones, setZones] = React.useState<any>([]);
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
  React.useEffect(() => {
    if (user.token === null) {
      alert('Vous devez être connecté pour consulter les jeux');
      return;
    }
    sendRequest(
      'jeux/zone/'+zones.idZone,
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
  , [zones]);

  return (
    <div className={`infos-anim-jeux-container ${props.rootClassName} `}>
      <div className="infos-anim-jeux-container01">
        <span className="infos-anim-jeux-text">{props.text}</span>
      </div>
      <div className="infos-anim-jeux-container02">
      {zones.map((zone, index) => (
        <div className="infos-anim-jeux-container03">
          <button type="button" className="infos-anim-jeux-button button">
            {zone.nom}
          </button>
        </div>
        ))}
        <div className="infos-anim-jeux-container04">
          <div className="infos-anim-jeux-container05">
            <div className="infos-anim-jeux-container06">
              <span className="infos-anim-jeux-text01">{props.text1}</span>
            </div>
            <div className="infos-anim-jeux-container07">
              <span className="infos-anim-jeux-text02">{props.text4}</span>
            </div>
            <div className="infos-anim-jeux-container08">
              <div className="infos-anim-jeux-container09">
                <span className="infos-anim-jeux-text03">{props.text411}</span>
              </div>
            </div>
            <div className="infos-anim-jeux-container10">
              <div className="infos-anim-jeux-container11">
                <span className="infos-anim-jeux-text04">{props.text48}</span>
              </div>
            </div>
            <div className="infos-anim-jeux-container12">
              <div className="infos-anim-jeux-container13">
                <span className="infos-anim-jeux-text05">{props.text47}</span>
              </div>
            </div>
          </div>
          <div className="infos-anim-jeux-container14">
            <span className="infos-anim-jeux-text06">{props.text2}</span>
            <div className="infos-anim-jeux-container15">
              <div className="infos-anim-jeux-container16">
                <span className="infos-anim-jeux-text07">{props.text41}</span>
              </div>
            </div>
            <div className="infos-anim-jeux-container17">
              <div className="infos-anim-jeux-container18">
                <span className="infos-anim-jeux-text08">{props.text410}</span>
              </div>
            </div>
            <div className="infos-anim-jeux-container19">
              <div className="infos-anim-jeux-container20">
                <span className="infos-anim-jeux-text09">{props.text49}</span>
              </div>
            </div>
            <div className="infos-anim-jeux-container21">
              <div className="infos-anim-jeux-container22">
                <span className="infos-anim-jeux-text10">{props.text46}</span>
              </div>
            </div>
          </div>
          <div className="infos-anim-jeux-container23">
            <span className="infos-anim-jeux-text11">{props.text3}</span>
            <div className="infos-anim-jeux-container24">
              <div className="infos-anim-jeux-container25">
                <span className="infos-anim-jeux-text12">{props.text42}</span>
              </div>
            </div>
            <div className="infos-anim-jeux-container26">
              <div className="infos-anim-jeux-container27">
                <span className="infos-anim-jeux-text13">{props.text43}</span>
              </div>
            </div>
            <div className="infos-anim-jeux-container28">
              <div className="infos-anim-jeux-container29">
                <span className="infos-anim-jeux-text14">{props.text44}</span>
              </div>
            </div>
            <div className="infos-anim-jeux-container30">
              <div className="infos-anim-jeux-container31">
                <span className="infos-anim-jeux-text15">{props.text45}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="infos-anim-jeux-container32">
        <span className="">{props.text5}</span>
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
