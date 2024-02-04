import React from 'react'
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';

import './profil-field.css';
import { sendRequest } from '../utils/sendRequest';

function ProfilField (props : any) {
  const user = useSelector((state: RootState) => state.user);
  const [pseudo , setPseudo] = React.useState('');
  const [nom , setNom] = React.useState('');
  const [prenom , setPrenom] = React.useState('');
  const [mail , setMail] = React.useState('');
  const [newmdp , setNewmdp] = React.useState('');
  const [association , setAssociation] = React.useState('');
  const [vege , setVege] = React.useState(false);
  const [hebergement , setHebergement] = React.useState(false);
  const [teeshirt , setTeeshirt] = React.useState('');
  const handleModif = () => {
    if (user.token === null) {
      alert('Vous devez être connecté pour modifier votre profil');
      return;
    }
    if (pseudo === '' || newmdp === '' || nom === '' || prenom === '' || mail === '' || association === '' || teeshirt === ''){
    //  alert('Veuillez remplir tous les champs');
    console.log(
      pseudo,
      newmdp,
      nom,
      prenom,
      mail,
      association,
      vege,
      hebergement,
      teeshirt,
      user.token
    );
    }
    else{
      sendRequest(
        'users/:pseudo',
        'PUT',
        { pseudo: pseudo, newmdp: newmdp, nom: nom, prenom: prenom, mail: mail, association: association, vege: vege, hebergement: hebergement, teeshirt: teeshirt},
        user.token,
        (err, res) => {
          if (err) {
            alert('Erreur lors de la mofification');
            console.log(err);
          } else {
            alert('modification réussie');
            console.log(res);
          }
        }
      )
    }
  }
  return (
    <div className={`profil-field-container ${props.rootClassName} `}>
      <h3 className="profil-field-text">{props.surname}</h3>
      <input
        type="text"
        placeholder={props.textinputPlaceholder}
        className="input profil-field-textinput"
        onChange={(e) => setNom(e.target.value)}
      />
      <h3 className="profil-field-text01">{props.name}</h3>
      <input
        type="text"
        placeholder={props.textinputPlaceholder1}
        className="input profil-field-textinput1"
        onChange={(e) => setPrenom(e.target.value)}
      />
      <h3 className="profil-field-text02">{props.pseudo}</h3>
      <input
        type="text"
        placeholder={props.textinputPlaceholder6}
        className="input profil-field-textinput2"
        onChange={(e) => setPseudo(e.target.value)}
      />
      <h3 className="profil-field-text03">{props.mail}</h3>
      <input
        type="email"
        placeholder={props.textinputPlaceholder2}
        className="input profil-field-textinput3"
        onChange={(e) => setMail(e.target.value)}
      />
      <h3 className="profil-field-text04">{props.vege}</h3>
      <select className="profil-field-select" onChange={(e) => setVege(Boolean(e.target.value))}>
        <option value="oui" className="">
          Oui
        </option>
        <option value="non" className="">
          non
        </option>
      </select>
      <h3 className="profil-field-text05">{props.hebergement}</h3>
      <select className="profil-field-select1" onChange={(e) => setHebergement(Boolean(e.target.value))}>
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
      <select className="profil-field-select2" defaultValue={'XS'} onChange={(e) => setTeeshirt(e.target.value)}>
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
        onChange={(e) => setAssociation(e.target.value)}
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
        onChange={(e) => setNewmdp(e.target.value)}
      />
      <button className="profil-field-navlink button" onClick={handleModif}>
        {props.register}
      </button>
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
