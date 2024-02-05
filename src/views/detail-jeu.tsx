import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import DetailJeuComponent from '../components/detail-jeu-component'
import Footer from '../components/footer'
import './detail-jeu.css'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { Navigate } from 'react-router-dom'

const DetailJeu = (props:any) => {
  const user = useSelector((state: RootState) => state.user);
  
  // Avant de charger la page, on vérifie que l'utilisateur est bien connecté et qu'il a le rôle d'admin
  if (!user.isLoggedIn || user.role !== 4) {
    alert('Vous n\'êtes pas autorisé à accéder à cette page');
    return <Navigate to="/" />;
  }
  return (
    <div className="detail-jeu-container">
      <Helmet>
        <title>Détail du jeu</title>
        <meta property="og:title" content="DetailJeu" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name20"></Navbar>
      <DetailJeuComponent rootClassName="detail-jeu-component-root-class-name"></DetailJeuComponent>
      <Footer rootClassName="footer-root-class-name20"></Footer>
    </div>
  )
}

export default DetailJeu
