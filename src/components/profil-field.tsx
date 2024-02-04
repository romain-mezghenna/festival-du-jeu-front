import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './profil-field.css'

function ProfilField (props : any) {
  return (
    <div className={`profil-field-container ${props.rootClassName} `}>
      <h3 className="profil-field-text">{props.surname}</h3>
      <input
        type="text"
        placeholder={props.textinputPlaceholder}
        className="input profil-field-textinput"
      />
      <h3 className="profil-field-text01">{props.name}</h3>
      <input
        type="text"
        placeholder={props.textinputPlaceholder1}
        className="input profil-field-textinput1"
      />
      <h3 className="profil-field-text02">{props.pseudo}</h3>
      <input
        type="text"
        placeholder={props.textinputPlaceholder6}
        className="input profil-field-textinput2"
      />
      <h3 className="profil-field-text03">{props.mail}</h3>
      <input
        type="email"
        placeholder={props.textinputPlaceholder2}
        className="input profil-field-textinput3"
      />
      <h3 className="profil-field-text04">{props.vege}</h3>
      <select className="profil-field-select">
        <option value="oui" className="">
          Oui
        </option>
        <option value="non" className="">
          non
        </option>
      </select>
      <h3 className="profil-field-text05">{props.hebergement}</h3>
      <select className="profil-field-select1">
        <option value="Recherche" className="">
          Recherche
        </option>
        <option value="Propose" className="">
          Propose
        </option>
        <option value="Aucun" className="">
          Aucun des deux
        </option>
      </select>
      <h3 className="profil-field-text06">{props.teeshirt}</h3>
      <select className="profil-field-select2">
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
      <h3 className="profil-field-text07">{props.association}</h3>
      <input
        type="text"
        placeholder={props.textinputPlaceholder3}
        className="input profil-field-textinput4"
      />
      <h3 className="profil-field-text08">{props.password}</h3>
      <input
        type="password"
        placeholder={props.textinputPlaceholder4}
        className="input profil-field-textinput5"
      />
      <h3 className="profil-field-text09">{props.passwordConfirm}</h3>
      <input
        type="password"
        placeholder={props.textinputPlaceholder5}
        className="input profil-field-textinput6"
      />
      <Link to="/home-benevole" className="profil-field-navlink button">
        {props.register}
      </Link>
    </div>
  )
}

ProfilField.defaultProps = {
  textinputPlaceholder5: 'Nouveau mot de passe',
  textinputPlaceholder4: 'motdepasse',
  surname: 'Nom actuel',
  textinputPlaceholder2: 'Nouveau e-mail',
  mail: 'Email actuel',
  hebergement: 'Hébergement?',
  textinputPlaceholder3: 'Nouvelle association',
  pseudo: 'Pseudo actuel',
  teeshirt: 'Taille tee-shirt?',
  password: 'Mot de passe actuel',
  passwordConfirm: 'Nouveau mot de passe',
  vege: 'Végétarien?',
  rootClassName: '',
  association: 'Association actuel',
  textinputPlaceholder6: 'Nouveau pseudo',
  name: 'Prénom actuel',
  register: 'Enregistrer les modifications',
  textinputPlaceholder1: 'Nouveau prénom',
  textinputPlaceholder: 'Nouveau nom',
}

ProfilField.propTypes = {
  textinputPlaceholder5: PropTypes.string,
  textinputPlaceholder4: PropTypes.string,
  surname: PropTypes.string,
  textinputPlaceholder2: PropTypes.string,
  mail: PropTypes.string,
  hebergement: PropTypes.string,
  textinputPlaceholder3: PropTypes.string,
  pseudo: PropTypes.string,
  teeshirt: PropTypes.string,
  password: PropTypes.string,
  passwordConfirm: PropTypes.string,
  vege: PropTypes.string,
  rootClassName: PropTypes.string,
  association: PropTypes.string,
  textinputPlaceholder6: PropTypes.string,
  name: PropTypes.string,
  register: PropTypes.string,
  textinputPlaceholder1: PropTypes.string,
  textinputPlaceholder: PropTypes.string,
}

export default ProfilField
