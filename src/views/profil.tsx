import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import ProfilField from '../components/profil-field'
import Footer from '../components/footer'
import './profil.css'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { RootState } from '../store/store'

function Profil(props : any){
  const user = useSelector((state: RootState) => state.user);
  
  // Avant de charger la page, on vérifie que l'utilisateur est bien connecté
  if (!user.isLoggedIn) {
    alert('Vous n\'êtes pas autorisé à accéder à cette page');
    return <Navigate to="/" />;
  }
  return (
    <div className="profil-container">
      <Helmet>
        <title>Profil</title>
        <meta property="og:title" content="Profil" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name5"></Navbar>
      <ProfilField rootClassName="profil-field-root-class-name"></ProfilField>
      <Footer rootClassName="footer-root-class-name4"></Footer>
    </div>
  )
}

export default Profil
