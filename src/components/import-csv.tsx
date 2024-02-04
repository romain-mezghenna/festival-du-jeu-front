import React from "react";

import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { sendRequest } from "../utils/sendRequest";
import { Navigate } from "react-router-dom";
import "./import-csv.css";

function ImportCsv(props: any) {
    const [file, setFile] = React.useState();
    const [idPoste, setIdPoste] = React.useState('');
    const [idFestival, setIdFestival] = React.useState('');

    const handleOnChange = (e: any) => {
        setFile(e.target.files[0]);
    }

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
}
    
ImportCsv.propTypes = {
    rootClassName: PropTypes.string,
    textinputPlaceholder: PropTypes.string,
    button: PropTypes.string,
    text: PropTypes.string,
}
    
export default ImportCsv