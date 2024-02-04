import React from 'react'

import PropTypes from 'prop-types'

import './register-field.css'

function RegisterField (props : any) {
  return (
    <div className={`register-field-container ${props.rootClassName} `}>
      <h3 className="register-field-text">{props.surname}</h3>
      <input
        type="text"
        placeholder={props.textinputPlaceholder}
        className="input register-field-textinput"
      />
      <h3 className="register-field-text01">{props.name}</h3>
      <input
        type="text"
        placeholder={props.textinputPlaceholder1}
        className="input register-field-textinput1"
      />
      <h3 className="register-field-text02">{props.pseudo}</h3>
      <input
        type="text"
        placeholder={props.textinputPlaceholder6}
        className="input register-field-textinput2"
      />
      <h3 className="register-field-text03">{props.mail}</h3>
      <input
        type="email"
        placeholder={props.textinputPlaceholder2}
        className="input register-field-textinput3"
      />
      <h3 className="register-field-text04">{props.vege}</h3>
      <select className="register-field-select">
        <option value="oui" className="">
          Oui
        </option>
        <option value="non" className="">
          non
        </option>
      </select>
      <h3 className="register-field-text05">{props.hebergement}</h3>
      <select className="register-field-select1">
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
      <h3 className="register-field-text06">{props.teeshirt}</h3>
      <select className="register-field-select2">
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
      />
      <h3 className="register-field-text08">{props.password}</h3>
      <input
        type="password"
        placeholder={props.textinputPlaceholder4}
        className="input register-field-textinput5"
      />
      <h3 className="register-field-text09">{props.passwordConfirm}</h3>
      <input
        type="password"
        placeholder={props.textinputPlaceholder5}
        className="input register-field-textinput6"
      />
      <button type="button" className="register-field-button button">
        {props.register}
      </button>
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
}

export default RegisterField
