import React, { useEffect } from 'react'

import PropTypes from 'prop-types'
import TimeTable from './TimeTable'
import { sendRequest } from '../utils/sendRequest';

import './planning-individuel-component.css'
import { RootState } from '../store/store';
import { useSelector } from 'react-redux';

function PlanningIndividuelComponent (props : any) {

  const user = useSelector((state: RootState) => state.user);
  const [festivalsInscrits, setFestivalsInscrits] = React.useState<any[]>([]);
  const [festivalCourrant, setFestivalCourrant] = React.useState<any>(1);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [reloadTable, setReloadTable] = React.useState(false);

  interface Festival {
    idFestival: number;
    nom: string;
    dateDebut: string;
    dateFin: string;
  }

  const [festivals , setFestivals] = React.useState([]);


  React.useEffect(() => {
        if (user.token === null) {
            alert('Vous devez être connecté pour modifier votre profil');
            return;
          }
        //récupère tout les festivals depuis la bd
        sendRequest(
            'festivals',
            'GET',
            {},
            user.token,
            (err, res) => {
                if (err) {
                    alert('Erreur lors de la récupération des festivals');
                    console.log(err);
                } else {
                    console.log("festivals",res);
                    setFestivals(res)
                    res.forEach((element : Festival)=> {
                        sendRequest(
                          "festivals/" +element.idFestival+"/inscription",
                          "GET",
                          {},
                          user.token ?? "",
                          (err, res) => {
                            if (err) {
                              console.log("err", err);
                            } else {
                              console.log("res",res,element.idFestival)
                              setFestivalsInscrits((festivalsInscrits : any) => {
                                let updatedFestivalsInscrits = festivalsInscrits
                                updatedFestivalsInscrits[element.idFestival] = res
                                console.log("updatedFestivalsInscrits",updatedFestivalsInscrits)
                                setIsLoaded(true);
                                return updatedFestivalsInscrits;
                            });
                            }
                          }
                        );
                    });
                }
            }
        )
        // recupère tous les festivals inscrits par l'utilisateur
    }, []);
  return (
    <div
      className={`planning-individuel-component-container ${props.rootClassName} `}
    >
      {isLoaded &&
      <> 
        <div>
          <select
            name="festival"
            id="festival"
            value={festivalCourrant}
            onChange={(e) => {
              setFestivalCourrant(e.target.value);
            }}
          >
            {festivals.map((festival: Festival) => {
              if (festivalsInscrits[festival.idFestival]) {
                return (
                  <option value={festival.idFestival}>{festival.nom}</option>
                );
              }
            })}
          </select>
          {/*Affiche le planning du festival sélectionné*/}
          {festivalsInscrits.length > 0 &&<TimeTable
          idFestival={festivalCourrant}
          cellComponentType='INSCRIPTION_POSTE'
          />}
          {
            festivalsInscrits.length === 0 && <h1>Vous n'êtes inscrit à aucun festival</h1>
          }
        </div>
      </> }
    </div>
  );
}

PlanningIndividuelComponent.defaultProps = {
  imageAlt62: 'image',
  text241: 'Espace A3',
  imageAlt512: 'image',
  imageSrc112:
    '/external/capture%20d%C3%A2%C2%80%C2%99%C3%A3%C2%A9cran%202024-02-02%20205518-200h.png',
  text231: 'Espace B2',
  text211: 'Espace B5',
  imageAlt10: 'image',
  imageAlt111: 'image',
  imageSrc31:
    '/external/capture%20d%C3%A2%C2%80%C2%99%C3%A3%C2%A9cran%202024-02-02%20205518-200h.png',
  imageAlt411: 'image',
  text321: '14 - 17',
  imageSrc211:
    '/external/capture%20d%C3%A2%C2%80%C2%99%C3%A3%C2%A9cran%202024-02-02%20205518-200h.png',
  text322: '17 -20',
  imageSrc411:
    '/external/capture%20d%C3%A2%C2%80%C2%99%C3%A3%C2%A9cran%202024-02-02%20205518-200h.png',
  imageSrc213:
    '/external/capture%20d%C3%A2%C2%80%C2%99%C3%A3%C2%A9cran%202024-02-02%20205518-200h.png',
  imageAlt6: 'image',
  imageAlt511: 'image',
  imageSrc5111:
    '/external/capture%20d%C3%A2%C2%80%C2%99%C3%A3%C2%A9cran%202024-02-02%20205518-200h.png',
  imageSrc513:
    '/external/capture%20d%C3%A2%C2%80%C2%99%C3%A3%C2%A9cran%202024-02-02%20205518-200h.png',
  imageAlt113: 'image',
  imageSrc63:
    '/external/capture%20d%C3%A2%C2%80%C2%99%C3%A3%C2%A9cran%202024-02-02%20205518-200h.png',
  imageSrc512:
    '/external/capture%20d%C3%A2%C2%80%C2%99%C3%A3%C2%A9cran%202024-02-02%20205518-200h.png',
  text323: '20 - 22',
  imageAlt211: 'image',
  imageAlt63: 'image',
  imageAlt51: 'image',
  text32: '11 - 14',
  rootClassName: '',
  imageAlt2111: 'image',
  imageSrc413:
    '/external/capture%20d%C3%A2%C2%80%C2%99%C3%A3%C2%A9cran%202024-02-02%20205518-200h.png',
  imageAlt41: 'image',
  imageSrc51:
    '/external/capture%20d%C3%A2%C2%80%C2%99%C3%A3%C2%A9cran%202024-02-02%20205518-200h.png',
  imageSrc3111:
    '/external/capture%20d%C3%A2%C2%80%C2%99%C3%A3%C2%A9cran%202024-02-02%20205518-200h.png',
  imageAlt311: 'image',
  imageSrc311:
    '/external/capture%20d%C3%A2%C2%80%C2%99%C3%A3%C2%A9cran%202024-02-02%20205518-200h.png',
  imageSrc113:
    '/external/capture%20d%C3%A2%C2%80%C2%99%C3%A3%C2%A9cran%202024-02-02%20205518-200h.png',
  text3: '9 - 11',
  imageSrc1111:
    '/external/capture%20d%C3%A2%C2%80%C2%99%C3%A3%C2%A9cran%202024-02-02%20205518-200h.png',
  imageSrc11:
    '/external/capture%20d%C3%A2%C2%80%C2%99%C3%A3%C2%A9cran%202024-02-02%20205518-200h.png',
  text221: 'Espace B4',
  imageAlt61: 'image',
  imageSrc2111:
    '/external/capture%20d%C3%A2%C2%80%C2%99%C3%A3%C2%A9cran%202024-02-02%20205518-200h.png',
  text: 'Choisir le jour :',
  text26: 'Espace A1',
  imageSrc21:
    '/external/capture%20d%C3%A2%C2%80%C2%99%C3%A3%C2%A9cran%202024-02-02%20205518-200h.png',
  imageAlt31: 'image',
  imageAlt5111: 'image',
  imageAlt412: 'image',
  imageAlt1111: 'image',
  imageSrc10:
    '/external/capture%20d%C3%A2%C2%80%C2%99%C3%A3%C2%A9cran%202024-02-02%20205518-200h.png',
  imageAlt513: 'image',
  imageAlt11: 'image',
  imageSrc412:
    '/external/capture%20d%C3%A2%C2%80%C2%99%C3%A3%C2%A9cran%202024-02-02%20205518-200h.png',
  imageSrc313:
    '/external/capture%20d%C3%A2%C2%80%C2%99%C3%A3%C2%A9cran%202024-02-02%20205518-200h.png',
  imageAlt413: 'image',
  imageAlt213: 'image',
  imageAlt212: 'image',
  imageSrc511:
    '/external/capture%20d%C3%A2%C2%80%C2%99%C3%A3%C2%A9cran%202024-02-02%20205518-200h.png',
  imageAlt21: 'image',
  imageAlt313: 'image',
  imageSrc61:
    '/external/capture%20d%C3%A2%C2%80%C2%99%C3%A3%C2%A9cran%202024-02-02%20205518-200h.png',
  imageSrc62:
    '/external/capture%20d%C3%A2%C2%80%C2%99%C3%A3%C2%A9cran%202024-02-02%20205518-200h.png',
  text251: 'Espace A2',
  imageAlt112: 'image',
  imageSrc212:
    '/external/capture%20d%C3%A2%C2%80%C2%99%C3%A3%C2%A9cran%202024-02-02%20205518-200h.png',
  imageSrc6:
    '/external/capture%20d%C3%A2%C2%80%C2%99%C3%A3%C2%A9cran%202024-02-02%20205518-200h.png',
  imageSrc312:
    '/external/capture%20d%C3%A2%C2%80%C2%99%C3%A3%C2%A9cran%202024-02-02%20205518-200h.png',
  imageAlt3111: 'image',
  imageSrc111:
    '/external/capture%20d%C3%A2%C2%80%C2%99%C3%A3%C2%A9cran%202024-02-02%20205518-200h.png',
  imageSrc4111:
    '/external/capture%20d%C3%A2%C2%80%C2%99%C3%A3%C2%A9cran%202024-02-02%20205518-200h.png',
  imageAlt312: 'image',
  imageAlt4111: 'image',
  imageSrc41:
    '/external/capture%20d%C3%A2%C2%80%C2%99%C3%A3%C2%A9cran%202024-02-02%20205518-200h.png',
}


export default PlanningIndividuelComponent
