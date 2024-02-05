import React, { useEffect } from 'react'

import PropTypes from 'prop-types'
import { sendRequest } from '../utils/sendRequest'

import './cration-festival-component.css'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'



function CrationFestivalComponent (props : any){

  interface PostesExistants {
    idPoste: number;
    nom: string;
    details: string;
    pseudoReferent: string;
  }




  const [name, setName] = React.useState('')
  const [dateDebut, setDateDebut] = React.useState('')
  const [dateFin, setDateFin] = React.useState('')
  const [creneau1, setCreneau1] = React.useState('9:00-11:00')
  const [creneau2, setCreneau2] = React.useState('11:00-14:00')
  const [creneau3, setCreneau3] = React.useState('14:00-17:00')
  const [creneau4, setCreneau4] = React.useState('17:00-20:00')
  const [creneau5, setCreneau5] = React.useState('20:00-22:00')
  const [newPosteNom, setNewPosteNom] = React.useState('')
  const [newPosteDetails, setNewPosteDetails] = React.useState("");
  const [pseudoReferent, setPseudoReferent] = React.useState("");
  const [postesExistants, setPostesExistants] = React.useState([] as PostesExistants[]);
  const [postesChoisis, setPostesChoisis] = React.useState([] as any[]);

  const [posteExistant , setPosteExistant] = React.useState(1)

  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if(postesExistants.length === 0){
      sendRequest("postes", "GET", "", user.token ?? "", (err, res) => {
      if (err) {
        console.log(err);
      } else {
        setPostesExistants(res);
      }
    });} else {

    }
  }, [user]);


  const handleSubmit = () => {
    if (
      name === "" ||
      dateDebut === "" ||
      dateFin === "" ||
      creneau1 === "" ||
      postesExistants.length === 0
    ) {
      alert("Veuillez remplir tous les champs");
    } 
    // Vérifier que les dates soit au format yyyy-mm-dd
    if(!/^\d{4}-\d{2}-\d{2}$/.test(dateDebut) || !/^\d{4}-\d{2}-\d{2}$/.test(dateFin)){
      alert("Les dates doivent être au format yyyy-mm-dd");
    }
      else {
      // Transforme les données pour coler à
      /**
       * {
        "nom": "Festival du Jour Unique",
        "dateDebut": "2023-07-15",
        "dateFin": "2023-07-15",
        "plageHoraires": [
          {"heureDebut": "08:00", "heureFin": "10:00", "jour": "2023-07-15"},
          {"heureDebut": "10:00", "heureFin": "12:00", "jour": "2023-07-15"},
          {"heureDebut": "12:00", "heureFin": "14:00", "jour": "2023-07-15"},
          {"heureDebut": "14:00", "heureFin": "16:00", "jour": "2023-07-15"},
          {"heureDebut": "16:00", "heureFin": "18:00", "jour": "2023-07-15"}
        ],
        "postes": [
          {"idPoste": 1},
          {"nom": "Buvette", "details": "Vente de boissons et snacks", "pseudoReferent": "userBuvette"},
          {"nom": "Accueil", "details": "Accueil des visiteurs et information", "pseudoReferent": "userAccueil"}
        ]
      }
       */

      let data : any= {
        nom: name,
        dateDebut: dateDebut,
        dateFin: dateFin,
        plageHoraires: [],
        postes: postesChoisis,
      };

      // Pour chaque joue entre dateDebut et dateFin, on ajoute les plages horaires et on les ajoute à data
      let date = new Date(dateDebut);
      let dateFinDate = new Date(dateFin);
      console.log(creneau1.split("-")[1].split(":")[0]);
      while (date <= dateFinDate) {
        if (creneau1 !== "") {
          data.plageHoraires.push({
            heureDebut:
              Number(creneau1.split("-")[0].split(":")[0]) < 10
                ? "0" + creneau1.split("-")[0]
                : creneau1.split("-")[0],
            heureFin:
              Number(creneau1.split("-")[1].split(":")[0]) < 10
                ? "0" + creneau1.split("-")[1]
                : creneau1.split("-")[1],
            jour: date.toISOString().split("T")[0],
          });
        }
        if (creneau2 !== "") {
          data.plageHoraires.push({
            heureDebut:
              Number(creneau2.split("-")[0].split(":")[0]) < 10
                ? "0" + creneau2.split("-")[0]
                : creneau2.split("-")[0],
            heureFin:
              Number(creneau2.split("-")[1].split(":")[0]) < 10
                ? "0" + creneau2.split("-")[1]
                : creneau2.split("-")[1],
            jour: date.toISOString().split("T")[0],
          });
        }
        if (creneau3 !== "") {
          data.plageHoraires.push({
            heureDebut:
              Number(creneau3.split("-")[0].split(":")[0]) < 10
                ? "0" + creneau3.split("-")[0]
                : creneau3.split("-")[0],
            heureFin:
              Number(creneau3.split("-")[1].split(":")[0]) < 10
                ? "0" + creneau3.split("-")[1]
                : creneau3.split("-")[1],
            jour: date.toISOString().split("T")[0],
          });
        }
        if (creneau4 !== "") {
          data.plageHoraires.push({
            heureDebut:
              Number(creneau4.split("-")[0].split(":")[0]) < 10
                ? "0" + creneau4.split("-")[0]
                : creneau4.split("-")[0],
            heureFin:
              Number(creneau4.split("-")[1].split(":")[0]) < 10
                ? "0" + creneau4.split("-")[1]
                : creneau4.split("-")[1],
            jour: date.toISOString().split("T")[0],
          });
        }
        if (creneau5 !== "") {
          data.plageHoraires.push({
            heureDebut:
              Number(creneau5.split("-")[0].split(":")[0]) < 10
                ? "0" + creneau5.split("-")[0]
                : creneau5.split("-")[0],
            heureFin:
              Number(creneau5.split("-")[1].split(":")[0]) < 10
                ? "0" + creneau5.split("-")[1]
                : creneau5.split("-")[1],
            jour: date.toISOString().split("T")[0],
          });
        }
        date.setDate(date.getDate() + 1);
      }
      console.log(data)
      sendRequest("festivals", "POST", data, user.token ?? "", (err, res) => {
        if (err) {
          console.log(err);
          alert("Erreur lors de la création du festival");
        } else {
          alert("Festival créé");
          console.log(res);
        }
      }
      );
    }
  }


  

  return (
    <div
      className={`cration-festival-component-container ${props.rootClassName} `}
    >
      <div className="cration-festival-component-container1">
        <div className="cration-festival-component-container2">
          <h1 className="cration-festival-component-text">{props.heading}</h1>
        </div>
        <div className="cration-festival-component-container3">
          <div className="cration-festival-component-container4">
            <div className="cration-festival-component-container5">
              <span className="cration-festival-component-text1">
                {props.text}
              </span>
              <input
                type="text"
                placeholder={props.textinputPlaceholder}
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <span className="cration-festival-component-text2">
                {props.text1}
              </span>
              <input
                type="text"
                placeholder={props.textinputPlaceholder1}
                className="input"
                value={dateDebut}
                onChange={(e) => setDateDebut(e.target.value)}
              />
              <span className="cration-festival-component-text3">
                {props.text2}
              </span>
              <input
                type="text"
                placeholder={props.textinputPlaceholder2}
                className="input"
                value={dateFin}
                onChange={(e) => setDateFin(e.target.value)}
              />
              <span className="cration-festival-component-text4">
                {props.text3}
              </span>
              <input
                type="text"
                placeholder={props.textinputPlaceholder4}
                className="input"
                value={creneau1}
                onChange={(e) => setCreneau1(e.target.value)}
              />
              <input
                type="text"
                placeholder={props.textinputPlaceholder44}
                className="input"
                value={creneau2}
                onChange={(e) => setCreneau2(e.target.value)}
              />
              <input
                type="text"
                placeholder={props.textinputPlaceholder43}
                className="input"
                value={creneau3}
                onChange={(e) => setCreneau3(e.target.value)}
              />
              <input
                type="text"
                placeholder={props.textinputPlaceholder42}
                className="input"
                value={creneau4}
                onChange={(e) => setCreneau4(e.target.value)}
              />
              <input
                type="text"
                placeholder={props.textinputPlaceholder41}
                className="input"
                value={creneau5}
                onChange={(e) => setCreneau5(e.target.value)}
              />
              <button
                type="button"
                className="cration-festival-component-button button"
              >
                {props.button}
              </button>
            </div>
          </div>
          <div className="cration-festival-component-container6">
            <div className="cration-festival-component-container7">
              <span className="cration-festival-component-text6">
                {props.text6}
              </span>
              <span className="cration-festival-component-text7">
                {props.text61}
              </span>
              <select
                className=""
                onChange={(e) => {
                  setPosteExistant(Number(e.target.value));
                }}
              >
                {postesExistants.map((poste) => {
                  return (
                    <option value={poste.idPoste} className="">
                      {poste.nom}
                    </option>
                  );
                })}
              </select>
              <button
                type="button"
                className="cration-festival-component-button1 button"
                onClick={(e) => {
                  if (
                    postesChoisis.find((p) => p.idPoste === posteExistant) ===
                    undefined
                  ) {
                    setPostesChoisis([
                      ...postesChoisis,
                      { idPoste: posteExistant },
                    ]);
                  } else {
                    alert("Ce poste a déjà été ajouté au festival");
                  }
                }}
              >
                {props.button1}
              </button>
              <span className="cration-festival-component-text8">
                {props.text611}
              </span>
              <input
                type="text"
                placeholder={props.textinputPlaceholder5}
                className="input"
                value={newPosteNom}
                onChange={(e) => setNewPosteNom(e.target.value)}
              />
              <input
                type="text"
                placeholder={props.textinputPlaceholder52}
                className="input"
                value={newPosteDetails}
                onChange={(e) => setNewPosteDetails(e.target.value)}
              />
              <input
                type="text"
                placeholder={props.textinputPlaceholder51}
                className="input"
                value={pseudoReferent}
                onChange={(e) => setPseudoReferent(e.target.value)}
              />
              <button
                type="button"
                className="cration-festival-component-button2 button"
                onClick={() => {
                  if (
                    newPosteNom === "" ||
                    newPosteDetails === "" ||
                    pseudoReferent === ""
                  ) {
                    alert("Veuillez remplir tous les champs");
                  } else {
                    setPostesChoisis([
                      ...postesChoisis,
                      {
                        nom: newPosteNom,
                        details: newPosteDetails,
                        pseudoReferent: pseudoReferent,
                      },
                    ]);
                  }
                }}
              >
                {props.button2}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="presentationFestival cration-festival-component-container3">
        <h1 className="cration-festival-component-text">
          Récapitulatif de la création du festival
        </h1>
        <span className="cration-festival-component-text"> Nom : {name}</span>
        <div className="presentationFestivalDates">
          <h2 className="cration-festival-component-text">Dates</h2>
          <span className="cration-festival-component-text7 datesFestival">
            Date de début : {dateDebut}
          </span>
          <span className="cration-festival-component-text7">
            Date de fin : {dateFin}
          </span>
        </div>
        <div className="presentationFestivalPostes">
          <h2 className="cration-festival-component-text"> Postes </h2>
          {postesChoisis.map((poste) => {
            if (poste.idPoste) {
              poste = postesExistants.find((p) => p.idPoste === poste.idPoste);
            }
            return (
              <div className="poste">
                <span className="cration-festival-component-text7">
                  Nom : {poste.nom}
                </span>
                <span className="cration-festival-component-text7">
                  Details {poste.details}
                </span>
                <span className="cration-festival-component-text7">
                  Réferent : {poste.pseudoReferent}
                </span>
                <button
                  className="cration-festival-component-button2 button"
                  onClick={(e) => {
                    setPostesChoisis(
                      postesChoisis.filter((p) => {
                        if (p.idPoste) {
                          return p.idPoste !== poste.idPoste;
                        } else {
                          return p !== poste;
                        }
                      })
                    );
                  }}
                >
                  Supprimer le poste du festival
                </button>
              </div>
            );
          })}
        </div>
        <div className="presentationFestivalCreneaux">
          <h2 className="cration-festival-component-text"> Créneaux </h2>
          {creneau1 !== "" && (
            <span className="cration-festival-component-text7 spanCreneau">
              Créneau 1 : {creneau1}
            </span>
          )}
          {creneau2 !== "" && (
            <span className="cration-festival-component-text7 spanCreneau">
              Créneau 2 : {creneau2}
            </span>
          )}
          {creneau3 !== "" && (
            <span className="cration-festival-component-text7 spanCreneau">
              Créneau 3 : {creneau3}
            </span>
          )}
          {creneau4 !== "" && (
            <span className="cration-festival-component-text7 spanCreneau">
              Créneau 4 : {creneau4}
            </span>
          )}
          {creneau5 !== "" && (
            <span className="cration-festival-component-text7 spanCreneau">
              Créneau 5 : {creneau5}
            </span>
          )}
        </div>
      </div>
      <button
        type="button"
        className="cration-festival-component-button3 button"
        onClick={handleSubmit}
      >
        {props.button3}
      </button>
    </div>
  );
}

CrationFestivalComponent.defaultProps = {
  button1: 'Ajouter le poste',
  textinputPlaceholder51: 'pseudo référent',
  textinputPlaceholder52: 'Détail',
  textinputPlaceholder5: 'Nom',
  text61: 'Postes existant',
  rootClassName: '',
  textinputPlaceholder2: 'yyyy-mm-dd',
  button3: 'Créer le festival',
  textinputPlaceholder42: '17:00-20:00',
  textinputPlaceholder41: '20:00-22:00',
  button: 'Sauvegarder créneaux',
  text3: 'Créneaux',
  text1: 'Date de début',
  text611: 'Créer un poste',
  text4: 'Jour',
  textinputPlaceholder1: 'yyyy-mm-dd',
  textinputPlaceholder43: '14:00-17:00',
  heading: 'Menu de création du festival',
  textinputPlaceholder44: '11:00-14:00',
  text6: 'Postes',
  button2: 'Ajouter le poste',
  textinputPlaceholder4: '9:00-11:00',
  text2: 'Date de fin',
  textinputPlaceholder: 'placeholder',
  text: 'Nom du festival',
}

CrationFestivalComponent.propTypes = {
  button1: PropTypes.string,
  textinputPlaceholder51: PropTypes.string,
  textinputPlaceholder52: PropTypes.string,
  textinputPlaceholder5: PropTypes.string,
  text61: PropTypes.string,
  rootClassName: PropTypes.string,
  textinputPlaceholder2: PropTypes.string,
  button3: PropTypes.string,
  textinputPlaceholder42: PropTypes.string,
  textinputPlaceholder41: PropTypes.string,
  button: PropTypes.string,
  text3: PropTypes.string,
  text1: PropTypes.string,
  text611: PropTypes.string,
  text4: PropTypes.string,
  textinputPlaceholder1: PropTypes.string,
  textinputPlaceholder43: PropTypes.string,
  heading: PropTypes.string,
  textinputPlaceholder44: PropTypes.string,
  text6: PropTypes.string,
  button2: PropTypes.string,
  textinputPlaceholder4: PropTypes.string,
  text2: PropTypes.string,
  textinputPlaceholder: PropTypes.string,
  text: PropTypes.string,
}

export default CrationFestivalComponent
