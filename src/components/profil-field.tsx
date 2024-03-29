import React from 'react'
import PropTypes from 'prop-types';
import { useSelector} from 'react-redux';
import { RootState } from '../store/store';
import { hashPassword } from '../utils/hashPassword';

import './profil-field.css';
import { sendRequest } from '../utils/sendRequest';

function ProfilField (props : any) {
  const user = useSelector((state: RootState) => state.user);
  const [pseudo , setPseudo] = React.useState('');
  const [nom , setNom] = React.useState('');
  const [prenom , setPrenom] = React.useState('');
  const [email , setEmail] = React.useState('');
  const [mdp , setMdp] = React.useState('');
  const [associations , setAssociations] = React.useState('');
  const [vegetarien , setVegetarien] = React.useState(0);
  const [hebergement , setHebergement] = React.useState(0);
  const [tailleTshirt , setTailleTshirt] = React.useState('');
  const [tel , setTel] = React.useState('');
  // avant que le component se charge on recupere les infos de l'utilisateur pour les afficher dans les champs
  React.useEffect(() => {
    if (user.token === null) {
      alert('Vous devez être connecté pour modifier votre profil');
      return;
    }
    sendRequest(
      'users/'+ user.pseudo,
      'GET',
      {},
      user.token,
      (err, res) => {
        if (err) {
          alert('Erreur lors de la récupération des informations');
          console.log(err);
        } else {
          console.log(res);
          setPseudo(res.pseudo);
          setNom(res.nom);
          setPrenom(res.prenom);
          setEmail(res.email);
          setAssociations(res.associations);
          setTailleTshirt(res.tailleTshirt);
          setTel(res.tel);
          if (res.vegetarien === true) {
            setVegetarien(1);
          }else{
            setVegetarien(0);
          }
          if (res.hebergement === true) {
            setHebergement(1);
          }else{
            setHebergement(0);
          }
          
        }
        
      }
    )
  }, [])
  const handleModif = () => {
    if (user.token === null) {
      alert('Vous devez être connecté pour modifier votre profil');
      return;
    }
    if ( mdp === '' || nom === '' || prenom === '' || email === '' ){
    //  alert('Veuillez remplir tous les champs');
    console.log(

      mdp,
      nom,
      prenom,
      email,
      associations,
      tailleTshirt,
      vegetarien,
      hebergement,
      tel,
      user.token
    );
    }
    else{
      sendRequest(
        'users/'+ user.pseudo,
        'PUT',
        { mdp: mdp, nom: nom, prenom: prenom, mail: email, associations: associations, vegetarien: vegetarien, hebergement: hebergement, tailleTshirt: tailleTshirt, tel: tel},
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
        value = {nom}
        onChange={(e) => setNom(e.target.value)}
      />
      <h3 className="profil-field-text01">{props.name}</h3>
      <input
        type="text"
        placeholder={props.textinputPlaceholder1}
        className="input profil-field-textinput1"
        value = {prenom}
        onChange={(e) => setPrenom(e.target.value)}
      />
      <h3 className="profil-field-text02">{props.pseudo}</h3>
      <input
        type="text"
        placeholder={props.textinputPlaceholder6}
        className="input profil-field-textinput2"
        value = {user.pseudo ?? ''} disabled

      />
      <h3 className="profil-field-text03">{props.email}</h3>
      <input
        type="text"
        placeholder={props.textinputPlaceholder2}
        className="input profil-field-textinput3"
        value = {email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <h3 className="profil-field-text04">{props.vege}</h3>
      <select className="profil-field-select" 
      value = {vegetarien.toString()}
      onChange={(e) => setVegetarien(Number(e.target.value))}>
        <option value="1" className="">
          Oui
        </option>
        <option value="0" className="">
          non
        </option>
      </select>
      <h3 className="profil-field-text05">{props.hebergement}</h3>
      <select className="profil-field-select1" 
      value = {hebergement.toString()}
        onChange={(e) => setHebergement(Number(e.target.value))}>
        <option value= "0" className="">
          Recherche
        </option>
        <option value="1" className="">
          Propose
        </option>
        <option value="0" className="">
          Aucun des deux
        </option>
      </select>
      <h3 className="profil-field-text06">{props.tailleTshirt}</h3>
      <select className="profil-field-select2" defaultValue={'XS'}
      value = {tailleTshirt} 
      onChange={(e) => setTailleTshirt(e.target.value)}>
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
        onChange={(e) => setAssociations(e.target.value)}
        value = {associations}
      />
      <h3 className="profil-field-text08">{props.tel}</h3>
      <input
        type="number"
        placeholder={props.textinputPlaceholder4}
        className="input profil-field-textinput5"
        value = {tel}
        onChange={(e) => setTel(e.target.value)}
      />
      <h3 className="profil-field-text09">{props.passwordConfirm}</h3>
      <input
        type="password"
        placeholder={props.textinputPlaceholder5}
        className="input profil-field-textinput6"
        onChange={(e) => setMdp(hashPassword(e.target.value))}
      />
      <button className="profil-field-navlink button" onClick={handleModif}>
        {props.register}
      </button>
    </div>
  )
}

ProfilField.defaultProps = {
  textinputPlaceholder5: 'Nouveau mot de passe',
  surname: 'Nom actuel',
  textinputPlaceholder2: 'Nouveau e-mail',
  email: 'Email actuel',
  hebergement: 'Hébergement?',
  textinputPlaceholder3: 'Nouvelle association',
  pseudo: 'Pseudo actuel',
  tailleTshirt: 'Taille tee-shirt?',
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
  tel : 'numéro de téléphone',
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
