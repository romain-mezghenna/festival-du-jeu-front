import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import NavbarInscription from '../components/navbar-inscription'
import InscriptionInfo from '../components/inscription-info'
import Footer from '../components/footer'
import './menu-inscription.css'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { RootState } from '../store/store'

const MenuInscription = (props:any) => {
  const user = useSelector((state: RootState) => state.user);
  
  // Avant de charger la page, on vérifie que l'utilisateur est bien connecté
  if (!user.isLoggedIn) {
    alert('Vous n\'êtes pas autorisé à accéder à cette page');
    return <Navigate to="/" />;
  }
  return (
    <div className="menu-inscription-container">
      <Helmet>
        <title>MenuInscription</title>
        <meta
          property="og:title"
          content="MenuInscription"
        />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name4"></Navbar>
      <NavbarInscription rootClassName="navbar-inscription-root-class-name1"></NavbarInscription>
      <InscriptionInfo rootClassName="inscription-info-root-class-name"></InscriptionInfo>
      <Footer rootClassName="footer-root-class-name1"></Footer>
    </div>
  )
}

export default MenuInscription
