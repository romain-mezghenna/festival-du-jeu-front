import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import NavbarInscription from '../components/navbar-inscription'
import PlanningInscription from '../components/planning-inscription'
import Footer from '../components/footer'
import './inscription-gnrale.css'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { RootState } from '../store/store'

const InscriptionGnrale = (props:any) => {
  const user = useSelector((state: RootState) => state.user);
  
  // Avant de charger la page, on vérifie que l'utilisateur est bien connecté
  if (!user.isLoggedIn) {
    alert('Vous n\'êtes pas autorisé à accéder à cette page');
    return <Navigate to="/" />;
  }
  return (
    <div className="inscription-gnrale-container">
      <Helmet>
        <title>InscriptionGnrale - Funny Key Herring</title>
        <meta
          property="og:title"
          content="InscriptionGnrale - Funny Key Herring"
        />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name3"></Navbar>
      <NavbarInscription rootClassName="navbar-inscription-root-class-name"></NavbarInscription>
      <PlanningInscription rootClassName="planning-inscription-root-class-name"></PlanningInscription>
      <Footer rootClassName="footer-root-class-name6"></Footer>
    </div>
  )
}

export default InscriptionGnrale
