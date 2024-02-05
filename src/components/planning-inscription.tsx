import React, { useEffect } from 'react'
import TimeTable from './TimeTable'
import { sendRequest } from '../utils/sendRequest';
import {CircularProgress} from '../utils/circle'
import { RootState } from '../store/store';
import { useSelector } from 'react-redux';

type Poste = {
  idPoste: number;
  nom: string;
  details: string;
  pseudoReferent: string;
};
type PlageHoraire = {
  idPlage: number;
  heureDebut: string; // Format "hh:mm:ss"
  heureFin: string; // Format "hh:mm:ss"
  jour: string;
  idFestival: number;
};
type Zone = {
  idZone: number;
  nom: string;
  idFestival: number;
  idPoste: number;
};
interface TimeTableProps {
  rows: (Poste | Zone)[];
  columns: PlageHoraire[];
  cellComponentType: string;
}

function PlanningInscription (props : any) {
  const user = useSelector((state: RootState) => state.user);


  useEffect(() => {

  }, [])
  return (
    <>
    <TimeTable {...{idFestival : 1,cellComponentType:"SAISIE"}}/>
    </>
  )
}


export default PlanningInscription
