import React from 'react'

import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { sendRequest} from '../utils/sendRequest';
import { Navigate } from 'react-router-dom';
import { hashPassword } from '../utils/hashPassword';


import './register-field.css'

function RegisterField (props : any) {
  const [pseudo , setPseudo] = React.useState('')
  const [mdp , setMdp] = React.useState('')
  const [nom , setNom] = React.useState('')
  const [prenom , setPrenom] = React.useState('')
  const [mail , setMail] = React.useState('')
  const [vege , setVege] = React.useState(false)
  const [hebergement , setHebergement] = React.useState(false)
  const [teeshirt , setTeeshirt] = React.useState('')
  const [association , setAssociation] = React.useState('')
  const [mdpConfirm , setMdpConfirm] = React.useState('')
  const [tel , setTel] = React.useState('')
  const [navigate, setNavigate] = React.useState(false);

  const handleRegister = async () => {
    if(pseudo === '' || mdp === '' || nom === '' || prenom === '' || mail === '' ||  teeshirt === '' || mdpConfirm === ''){
      alert('Veuillez remplir tous les champs')
    }
    else{
      if(mdp !== mdpConfirm){
        alert('Les mots de passe ne correspondent pas')
      }
      else{
        setMdp(await hashPassword(mdp));
        sendRequest(
          "users",
          "POST",
          { pseudo: pseudo,nom:nom,prenom:prenom,mdp:mdp,tailleTshirt:teeshirt,vegetarien: vege,hebergement:hebergement,email:mail,tel:tel,associations:association },
          "",
          (err, res) => {
            if (err) {
              alert("Erreur lors de l'inscription");
              console.log(err);
            } else {
                alert("Inscription réussie");
                console.log(res);
                setNavigate(true);
            }
          }
        );
      }
    }
  }
  return (
    
    <div className={`register-field-container ${props.rootClassName} `}>
      <h3 className="register-field-text">{props.surname}</h3>
      <input
        type="text"
        placeholder={props.textinputPlaceholder}
        className="input register-field-textinput"
        onChange={(e) => setNom(e.target.value)}
      />
      <h3 className="register-field-text01">{props.name}</h3>
      <input
        type="text"
        placeholder={props.textinputPlaceholder1}
        className="input register-field-textinput1"
        onChange={(e) => setPrenom(e.target.value)}
      />
      <h3 className="register-field-text02">{props.pseudo}</h3>
      <input
        type="text"
        placeholder={props.textinputPlaceholder6}
        className="input register-field-textinput2"
        onChange={(e) => setPseudo(e.target.value)}
      />
      <h3 className="register-field-text03">{props.mail}</h3>
      <input
        type="email"
        placeholder={props.textinputPlaceholder2}
        className="input register-field-textinput3"
        onChange={(e) => setMail(e.target.value)}
      />
      <h3 className="register-field-text04">{props.vege}</h3>
      <select className="register-field-select" onChange={(e) => setVege(Boolean(e.target.value))}>
        <option value="true" className="">
          Oui
        </option>
        <option value="false" className="">
          non
        </option>
      </select>
      <h3 className="register-field-text05">{props.hebergement}</h3>
      <select className="register-field-select1" onChange={(e) => setHebergement(Boolean(e.target.value))}>
        <option value="true" className="">
          Recherche
        </option>
        <option value="false" className="">
          Propose
        </option>
        <option value="false" className="">
          Aucun des deux
        </option>
      </select>
      <h3 className="register-field-text06">{props.teeshirt}</h3>
      <select className="register-field-select2" onChange={(e) => setTeeshirt(e.target.value)}>
        <option value="XS" className="">
          XS
        </option>
        <option value="S" className="">
          S
        </option>
        <option value="M" className="">
          M
        </option>
        <option value="L" className="">
          L
        </option>
        <option value="XL" className="">
          XL
        </option>
      </select>
      <h3 className="register-field-text07">{props.association}</h3>
      <input
        type="text"
        placeholder={props.textinputPlaceholder3}
        className="input register-field-textinput4"
        onChange={(e) => setAssociation(e.target.value)}
      />
      <h3 className="register-field-text08">{props.password}</h3>
      <input
        type="password"
        placeholder={props.textinputPlaceholder4}
        className="input register-field-textinput5"
        onChange={(e) => setMdp(e.target.value)}
      />
      <h3 className="register-field-text09">{props.passwordConfirm}</h3>
      <input
        type="password"
        placeholder={props.textinputPlaceholder5}
        className="input register-field-textinput6"
        onChange={(e) => setMdpConfirm(e.target.value)}
      />
      <h3 className="register-field-text10">{props.tel}</h3>
      <input
        type="text"
        placeholder={props.textinputPlaceholder6}
        className="input register-field-textinput7"
        onChange={(e) => setTel(e.target.value)}
      />
      <button type="button" className="register-field-button button" onClick={handleRegister}>
        {props.register}
      </button>
      {navigate && <Navigate to="/login" />}
    </div>
  )
}

RegisterField.defaultProps = {
  textinputPlaceholder3: 'placeholder',
  textinputPlaceholder5: 'placeholder',
  textinputPlaceholder: 'placeholder',
  register: "S'inscrire",
  pseudo: 'Pseudo',
  textinputPlaceholder6: 'placeholder',
  textinputPlaceholder2: 'placeholder',
  password: 'Mot de passe',
  teeshirt: 'Taille tee-shirt',
  textinputPlaceholder1: 'placeholder',
  association: 'Association',
  surname: 'Nom',
  linkText: 'https://example.com',
  mail: 'Email',
  hebergement: 'Hébergement',
  vege: 'Végétarien',
  text: 'Link',
  textinputPlaceholder4: 'placeholder',
  rootClassName: '',
  name: 'Prénom',
  passwordConfirm: 'Confirmer le mot de passe',
  tel: 'Téléphone',
}

RegisterField.propTypes = {
  textinputPlaceholder3: PropTypes.string,
  textinputPlaceholder5: PropTypes.string,
  textinputPlaceholder: PropTypes.string,
  register: PropTypes.string,
  pseudo: PropTypes.string,
  textinputPlaceholder6: PropTypes.string,
  textinputPlaceholder2: PropTypes.string,
  password: PropTypes.string,
  teeshirt: PropTypes.string,
  textinputPlaceholder1: PropTypes.string,
  association: PropTypes.string,
  surname: PropTypes.string,
  linkText: PropTypes.string,
  mail: PropTypes.string,
  hebergement: PropTypes.string,
  vege: PropTypes.string,
  text: PropTypes.string,
  textinputPlaceholder4: PropTypes.string,
  rootClassName: PropTypes.string,
  name: PropTypes.string,
  passwordConfirm: PropTypes.string,
  tel: PropTypes.string,
}

export default RegisterField
