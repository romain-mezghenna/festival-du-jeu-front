import React from 'react'

import PropTypes from 'prop-types'
import { useDispatch } from "react-redux";
import {login} from '../features/userSlice/userSlice'
import { sendRequest } from '../utils/sendRequest'

import './loginfield.css'
import { Navigate } from 'react-router-dom';

function Loginfield  (props: any)  {
  const [pseudo , setPseudo] = React.useState('')
  const [mdp , setMdp] = React.useState('')
  const dispatch = useDispatch();
  

  const handleLogin = () => {
    if(pseudo === '' || mdp === ''){
      alert('Veuillez remplir tous les champs')
    }
    else{
      sendRequest(
        "users/login",
        "POST",
        { pseudo: pseudo, mdp: mdp },
        "",
        (err, res) => {
          if (err) {
            alert("Erreur lors de la connexion");
            console.log(err);
          } else {
              alert("Connexion réussie");
              console.log(res);
              dispatch(
                login({
                  pseudo: res.pseudo,
                  token: res.token,
                  role: res.role,
                })
              );
          }
        }
      );
    }
  }


  return (
    <div className={`loginfield-container ${props.rootClassName} `}>
      <h3 className="loginfield-text">{props.mail}</h3>
      <input
        type="email"
        placeholder={props.textinputPlaceholder}
        className="input loginfield-input"
        onChange={(e) => setPseudo(e.target.value)}
      />
      <h3 className="loginfield-text1">{props.password}</h3>
      <input
        type="password"
        placeholder={props.textinputPlaceholder1}
        className="input loginfield-textinput"
        onChange={(e) => setMdp(e.target.value)}
      />
      <button type="button" className="loginfield-button button" onClick={handleLogin}>
        {props.login}
      </button>
    </div>
  )
}

Loginfield.defaultProps = {
  textinputPlaceholder: 'placeholder',
  password: 'Mot de passe',
  mailarea: 'Inscrivez votre email',
  textinputPlaceholder1: 'placeholder',
  mail: 'Email',
  login: 'Se connecter',
  rootClassName: '',
}

Loginfield.propTypes = {
  textinputPlaceholder: PropTypes.string,
  password: PropTypes.string,
  mailarea: PropTypes.string,
  textinputPlaceholder1: PropTypes.string,
  mail: PropTypes.string,
  login: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Loginfield
