import React, { useEffect } from "react";

import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { sendRequest } from "../utils/sendRequest";
import { Navigate } from "react-router-dom";
import "./import-csv.css";
import { text } from "stream/consumers";
import { RootState } from "../store/store";
import axios from 'axios';

function ImportCsv(props: any) {

    
    const [file, setFile] = React.useState();
    const [idPoste, setIdPoste] = React.useState(1);
    const [idFestival, setIdFestival] = React.useState(1);
    const [festivals, setFestivals] = React.useState([]as any[]);
    const [postes, setPostes] = React.useState([]as any[]);
    const user = useSelector((state: RootState) => state.user);
    useEffect(() => {
        if(user.token === null){
            alert('Vous devez être connecté pour accéder à cette page')
            return
        }
        sendRequest(
            "festivals",
            "GET",
            {},
            user.token,
            (err, res) => {
                if (err) {
                    alert("Erreur lors de la récupération des festivals");
                    console.log(err);
                } else {
                    console.log(res);
                    setFestivals(res);
                    setIdFestival(res[0].idFestival);
                    setIdPoste(res[0].FestivalPostes[0].idPoste);
                    let postes : any[] = [];
                    res[0].FestivalPostes.forEach((poste:any) => {
                        postes.push(poste.Poste);
                    });
                    setPostes(postes);
                }
            }
        );
    }, []);
    
    const handleOnChange = (e: any) => {
        console.log(e.target.files[0]);
        setFile(e.target.files[0]);
    }

    const handleOnChangeFestival = (e:any) => {
        setIdFestival(e.target.value);
        let postes : any[] = [];
        let f = festivals.find((festival) => { return festival.idFestival == e.target.value});
        f.FestivalPostes.forEach((poste:any) => {
            postes.push(poste.Poste);
        });
        setPostes(postes);

      };
    
      const handleOnChangePoste = (e:any) => {
        setIdPoste(e.target.value);
      };

    const handleOnClick = (e: any, file: any) => {
        if(user.token === null){
            alert('Vous devez être connecté pour accéder à cette page')
            return
        }
        console.log(file);
        // Create a new FormData object
        const formData = new FormData();
        // Add the file to the formData object
        formData.append('file', file);
        // Add the festival id to the formData object
        formData.append('idFestival', String(idFestival));
        // Add the poste id to the formData object
        formData.append('idPoste', String(idPoste));

        const token = user.token;
        console.log({
          formData: formData.get("idFestival"),
          idFestival: idFestival,
          idPoste: idPoste,
        });

        // Set up the headers with authorization and content type
        const headers = {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
        };

        // Make the POST request
        axios.post('https://festivaldujeuapi.onrender.com/festivaldujeu/api/jeux/import', formData, { headers })
        .then(response => {
          console.log('File uploaded successfully:', response.data.message);
          alert('Import réussi');
          // relaod the page
          window.location.reload();
        })
        .catch(error => {
            console.error('Error during import:', error);
        });
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