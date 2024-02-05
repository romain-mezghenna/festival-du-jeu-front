import React from 'react'


import TimeTable from './TimeTable'

import './animation-jeux.css'
import { useLocation } from 'react-router-dom'

function CreationCreneau(props : any){
  const location = useLocation();
  const idFestival = new URLSearchParams(location.search).get('idFestival');
  return (
    <TimeTable idFestival={Number(idFestival)} cellComponentType="SAISIE"/>
  )
}

export default CreationCreneau
