import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './listes-festivales.css';
import { sendRequest } from '../utils/sendRequest';
import { useSelector} from 'react-redux';
import { RootState } from '../store/store';
import { formatDate } from '../utils/formatDate';
interface Festival {
    idFestival: number;
    nom: string;
    dateDebut: string;
    dateFin: string;
  }
  
  interface ListesFestivalesProps {
    rootClassName?: string;
    heading7?: string;
    heading8?: string;
    heading9?: string;
    heading10?: string;
    heading13?: string;
    heading14?: string;
    button1?: string;
  }
function ListesFestivales(props:any){
    const user = useSelector((state: RootState) => state.user);
    const [festivals, setFestivals] = React.useState<Festival[]>([]);
    const [festivalsInscrits, setFestivalsInscrits] = React.useState<any[]>([]);
    const [isLoaded, setIsLoaded] = React.useState(false);
    let link = '/edition-festival';
    let button = 'modifier le festival';

    const handleSinscrire = (idFestival :number) => {
        if(festivalsInscrits[idFestival] && festivalsInscrits[idFestival].message){
            alert('Vous êtes déjà inscrit à ce festival');
            return;
        }
        sendRequest("festivals/inscription","POST",
        {idFestival : idFestival},
        user.token?? '',
        (err, res) => {
            if (err) {
                alert('Erreur lors de l\'inscription');
                console.log(err);
            }
            else {
                alert('Inscription réussie');
                console.log(res);
            }
        });
    }

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
                    setFestivals(res);
                    if(user.role !== 4){
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
                                setFestivalsInscrits((festivalsInscrits) => {
                                let updatedFestivalsInscrits = festivalsInscrits
                                updatedFestivalsInscrits[element.idFestival] = res
                                console.log("updatedFestivalsInscrits",updatedFestivalsInscrits)
                                return updatedFestivalsInscrits;
                                
                            });
                            }
                          }
                        );
                    });
                    setIsLoaded(true);
                    }
                }
            }
        )
        // recupère tous les festivals inscrits par l'utilisateur
    }, []);  
  return isLoaded && (
     //fait une fonction pour récupérer tout les festivales depuis la bd et les afficher
    <div className={`listes-festivales-container ${props.rootClassName} `}>
        {festivals.map((festival, index) => (
            <div className="listes-festivales-container1">
                <div className="listes-festivales-container2">
                    <h2 className="listes-festivales-text">{props.heading7}</h2>
                    <h3 className="">{festival.nom}</h3>
                </div>
                <div className="listes-festivales-container3" key={index}>
                    <h2 className="listes-festivales-text2">{props.heading9}</h2>
                    <h3 className="">{formatDate(festival.dateDebut)}</h3>
                </div>
                <div className="listes-festivales-container4">
                    <h2 className="listes-festivales-text4">{props.heading13}</h2>
                    <h3 className="">{formatDate(festival.dateFin)}</h3>
                </div>
                <div className="listes-festivales-container5">
                    {festivalsInscrits[festival.idFestival] && festivalsInscrits[festival.idFestival].message ? (
                        <h3 className="listes-festivales-text5">Vous êtes inscrit à ce festival</h3>) : (
                            <h3 className="listes-festivales-text5">Vous n'êtes pas inscrit à ce festival</h3>)}
                    <Link to={user.role === 4 ? '/edition-festival?idFestival='+festival.idFestival : ''} type="button" className="listes-festivales-button button">
                        {user.role === 4 ? props.button1 : (<button onClick={() => {handleSinscrire(festival.idFestival)}}>
                            {props.button2}
                        </button>)}
                    </Link>
                </div>
            </div>
        ))}
    </div>  
  );
};

ListesFestivales.defaultProps = {
  heading: 'Liste des festivals',
  heading1: 'Nom du festival :',
  heading2: 'Date de début et date de fin',
  heading12: 'Nom du festival :',
  heading3: 'date de début / date de fin',
  heading4: 'Heading',
  heading5: 'exemple',
  heading6: '20/01/2000     22/01/2000',
  button: 'modifier le festival',
  rootClassName: '',
  heading7: 'nom du festival :',
  heading8: 'exemple',
  heading9: 'date de début :',
  heading10: '20/01/2000',
  heading13: 'date de fin :',
  heading14: '22/01/2000',
  button1: 'modifier le festival',
  button2: 's\'inscrire au festival',
};

ListesFestivales.propTypes = {
  heading: PropTypes.string,
  heading1: PropTypes.string,
  heading11: PropTypes.string,
  heading2: PropTypes.string,
  heading12: PropTypes.string,
  heading3: PropTypes.string,
  heading4: PropTypes.string,
  heading5: PropTypes.string,
  heading6: PropTypes.string,
  button: PropTypes.string,
  rootClassName: PropTypes.string,
  heading7: PropTypes.string,
  heading8: PropTypes.string,
  heading9: PropTypes.string,
  heading10: PropTypes.string,
  heading13: PropTypes.string,
  heading14: PropTypes.string,
  button1: PropTypes.string,
};
export default ListesFestivales;
