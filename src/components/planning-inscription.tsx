import React, { useEffect } from 'react'
import TimeTable from './TimeTable'
import { sendRequest } from '../utils/sendRequest';
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
      <div style={{ paddingTop: '50px', paddingBottom: '50px', alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '50%', height: '110%', backgroundColor: 'lightblue', margin: '20px', borderRadius: '25px', borderWidth: '2px', borderColor: 'black' }}>
        <h1 style={{ color: 'black', textAlign: 'center' }}>Planning d'inscription</h1>
        <TimeTable {...{ idFestival: 1, cellComponentType: "INSCRIPTION_POSTE" }} />
      </div>
    </>
  )
}


export default PlanningInscription
