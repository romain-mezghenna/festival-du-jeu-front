import React, { useEffect } from "react";

import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { sendRequest } from "../utils/sendRequest";
import { Navigate } from "react-router-dom";
import "./import-csv.css";
import { text } from "stream/consumers";

function ImportCsv(props: any) {

    
    const [file, setFile] = React.useState();
    const [idPoste, setIdPoste] = React.useState('');
    const [idFestival, setIdFestival] = React.useState('');
    const [festivals, setFestivals] = React.useState([]as any[]);
    const [postes, setPostes] = React.useState([]as any[]);
    useEffect(() => {
        sendRequest(
            "festivals",
            "GET",
            {},
            "",
            (err, res) => {
                if (err) {
                    alert("Erreur lors de la récupération des festivals");
                    console.log(err);
                } else {
                    console.log(res);
                    setFestivals(res);
                }
            }
        );
        sendRequest(
            "postes",
            "GET",
            {},
            "",
            (err, res) => {
                if (err) {
                    alert("Erreur lors de la récupération des postes");
                    console.log(err);
                } else {
                    console.log(res);
                    setPostes(res);
                }
            }
        );
    }, []);
    const handleOnChange = (e: any) => {
        setFile(e.target.files[0]);
    }

    const handleOnChangeFestival = (e:any) => {
        setIdFestival(e.target.value);
      };
    
      const handleOnChangePoste = (e:any) => {
        setIdPoste(e.target.value);
      };

    const handleOnClick = (e: any, file: any) => {
        sendRequest(
            "jeux/import",
            "POST",
            {
                file: file,
                idPoste: idPoste,
                idFestival: idFestival,
            },
            "",
            (err, res) => {
                if (err) {
                    alert("Erreur lors de l'importation");
                    console.log(err);
                } else {
                    alert("Importation réussie");
                    console.log(res);
            }
            }
        );
    }
    return (
        <div className='container'>
          <div className={'container1'}>
          <text className={"textSelect2"}>{props.textS2}</text>
        <select
          className={"selectFestival"}
          onChange={handleOnChangeFestival}
        >
          {festivals.map((festival) => (
            <option key={festival.idFestival} value={festival.idFestival}>
              {festival.nom}
            </option>
          ))}
        </select>
        <text className={"textSelect1"}>{props.textS1}</text>
        <select className={"selectPoste"} onChange={handleOnChangePoste}>
          {postes.map((poste) => (
            <option key={poste.idPoste} value={poste.idPoste}>
              {poste.nom}
            </option>
          ))}
        </select>
            <span className={'text'}>{props.text}</span>
            <input
              type="file"
              placeholder={props.textinputPlaceholder}
              className={` ${'input'} ${'input'} `}
              onChange={handleOnChange}
            />
            <button
              type="button"
              className={` ${'button'} ${'button'} `}
              onClick={(e) => {
                handleOnClick(e, file);
              }}
            >
              {props.button}
            </button>
          </div>
        </div>
      )
    }
    
ImportCsv.defaultProps = {
    rootClassName:'',
    textinputPlaceholder: 'placeholder',
    button: 'Importer les jeux',
    text: 'Importer des jeux et zones au format csv',
    textS1: 'Sélectionnez un poste',
    textS2: 'Sélectionnez un festival',
    selectPoste: 'Poste',
    selectFestival: 'Festival',
}
    
ImportCsv.propTypes = {
    rootClassName: PropTypes.string,
    textinputPlaceholder: PropTypes.string,
    button: PropTypes.string,
    text: PropTypes.string,
    textS1: PropTypes.string,
    textS2: PropTypes.string,
    selectPoste: PropTypes.string,
    selectFestival: PropTypes.string,
}
    
export default ImportCsv