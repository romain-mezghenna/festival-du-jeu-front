import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import AttributionPostesComponent from '../components/attribution-postes-component'
import Footer from '../components/footer'
import './attribution-postes.css'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { Navigate } from 'react-router-dom'

const AttributionPostes = (props:any) => {

  const user = useSelector((state: RootState) => state.user);
  
  // Avant de charger la page, on vérifie que l'utilisateur est bien connecté et qu'il a le rôle d'admin
  if (!user.isLoggedIn || user.role !== 4) {
    alert('Vous n\'êtes pas autorisé à accéder à cette page');
    return <Navigate to="/" />;
  }
  return (
    <div className="attribution-postes-container">
      <Helmet>
        <title>Attributions des postes</title>
        <meta
          property="og:title"
          content="AttributionPostes"
        />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name24"></Navbar>
      <AttributionPostesComponent rootClassName="attribution-postes-component-root-class-name"></AttributionPostesComponent>
      <Footer rootClassName="footer-root-class-name24"></Footer>
    </div>
  )
}

export default AttributionPostes
