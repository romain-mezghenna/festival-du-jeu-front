import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import NavbarInscription from '../components/navbar-inscription'
import PlanningIndividuelComponent from '../components/planning-individuel-component'
import Footer from '../components/footer'
import './planning-individuel.css'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { RootState } from '../store/store'

function PlanningIndividuel(props : any){
  const user = useSelector((state: RootState) => state.user);
  
  // Avant de charger la page, on vérifie que l'utilisateur est bien connecté
  if (!user.isLoggedIn) {
    alert('Vous n\'êtes pas autorisé à accéder à cette page');
    return <Navigate to="/" />;
  }
  return (
    <div className="planning-individuel-container">
      <Helmet>
        <title>PlanningIndividuel - Funny Key Herring</title>
        <meta
          property="og:title"
          content="PlanningIndividuel - Funny Key Herring"
        />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name15"></Navbar>
      <NavbarInscription rootClassName="navbar-inscription-root-class-name2"></NavbarInscription>
      <PlanningIndividuelComponent rootClassName="planning-individuel-component-root-class-name"></PlanningIndividuelComponent>
      <Footer rootClassName="footer-root-class-name15"></Footer>
    </div>
  )
}

export default PlanningIndividuel
