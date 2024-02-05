import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import InfosJeuxComponent from '../components/infos-jeux-component'
import ImportCsv from '../components/import-csv'
import Footer from '../components/footer'
import './infos-jeux.css'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { RootState } from '../store/store'

const InfosJeux = (props:any) => {
  const user = useSelector((state: RootState) => state.user);
  
  // Avant de charger la page, on vérifie que l'utilisateur est bien connecté et qu'il a le rôle d'admin
  if (!user.isLoggedIn || user.role !== 4) {
    alert('Vous n\'êtes pas autorisé à accéder à cette page');
    return <Navigate to="/" />;
  }
  return (
    <div className="infos-jeux-container">
      <Helmet>
        <title>InfosJeux</title>
        <meta property="og:title" content="InfosJeux" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name14"></Navbar>
      <InfosJeuxComponent rootClassName="infos-jeux-component-root-class-name"></InfosJeuxComponent>
      <ImportCsv rootClassName="import-csv-root-class-name"></ImportCsv>
      <Footer rootClassName="footer-root-class-name14"></Footer>
    </div>
  )
}

export default InfosJeux
