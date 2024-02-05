import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import GestionZonesComponent from '../components/gestion-zones-component'
import Footer from '../components/footer'
import './gestion-zones.css'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { RootState } from '../store/store'

const GestionZones = (props:any) => {
  const user = useSelector((state: RootState) => state.user);
  
  // Avant de charger la page, on vérifie que l'utilisateur est bien connecté et qu'il a le rôle d'admin
  if (!user.isLoggedIn || user.role !== 4) {
    alert('Vous n\'êtes pas autorisé à accéder à cette page');
    return <Navigate to="/" />;
  }
  return (
    <div className="gestion-zones-container">
      <Helmet>
        <title>GestionZones - Funny Key Herring</title>
        <meta property="og:title" content="GestionZones - Funny Key Herring" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name23"></Navbar>
      <GestionZonesComponent rootClassName="gestion-zones-component-root-class-name"></GestionZonesComponent>
      <Footer rootClassName="footer-root-class-name23"></Footer>
    </div>
  )
}

export default GestionZones
