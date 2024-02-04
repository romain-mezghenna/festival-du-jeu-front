import React from 'react'

import PropTypes from 'prop-types'
import { useDispatch,useSelector } from "react-redux";
import { RootState } from "../store/store";
import {login} from '../features/userSlice/userSlice'
import { sendRequest } from '../utils/sendRequest'
import { Navigate } from 'react-router-dom';
import { hashPassword } from '../utils/hashPassword';

import './loginfield.css'

function Loginfield  (props: any)  {
  const [pseudo , setPseudo] = React.useState('')
  const [mdp , setMdp] = React.useState('')
  const dispatch = useDispatch();
  // routeur
  const [navigate, setNavigate] = React.useState(false);
  

  const handleLogin =() => {
    if(pseudo === '' || mdp === ''){
      alert('Veuillez remplir tous les champs')
    }
    else{
      sendRequest(
        "users/login",
        "POST",
        { pseudo: pseudo, mdp: hashPassword(mdp) },
        "",
        (err, res) => {
          if (err) {
            console.log(err);
            alert("Erreur lors de la connexion");
          } else {
            if (res.error) {
              alert(res.error);
              setMdp("");
              setPseudo("");
            } else {
              alert("Connexion réussie");
              dispatch(
                login({
                  pseudo: res.pseudo,
                  token: res.token,
                  role: res.role,
                })
              );
              setNavigate(true);
            }
          }
        }
      );
    }
  }


  return (
    <div className={`loginfield-container ${props.rootClassName} `}>
      <h3 className="loginfield-text">{props.pseudo}</h3>
      <input
        type="Pseudo"
        placeholder={props.pseudo}
        className="input loginfield-input"
        onChange={(e) => setPseudo(e.target.value)}
        value={pseudo}
      />
      <h3 className="loginfield-text1">{props.password}</h3>
      <input
        type="password"
        placeholder={props.password}
        className="input loginfield-textinput"
        onChange={(e) => setMdp(e.target.value)}
        value={mdp}
      />
      <button
        type="button"
        className="loginfield-button button"
        onClick={handleLogin}
        style={{ cursor: "pointer" }}
      >
        {props.login}
      </button>
      {navigate && <Navigate to="/" />}
    </div>
  );
}

Loginfield.defaultProps = {
  textinputPlaceholder: 'placeholder',
  password: 'Mot de passe',
  mailarea: 'Inscrivez votre email',
  textinputPlaceholder1: 'placeholder',
  pseudo: 'Pseudo',
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
