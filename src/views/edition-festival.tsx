import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import EditionFestivalComponent from '../components/edition-festival-component'
import Footer from '../components/footer'
import './edition-festival.css'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { RootState } from '../store/store'

const EditionFestival = (props:any) => {
  const user = useSelector((state: RootState) => state.user);
  
  // Avant de charger la page, on vérifie que l'utilisateur est bien connecté et qu'il a le rôle d'admin
  if (!user.isLoggedIn || user.role !== 4) {
    alert('Vous n\'êtes pas autorisé à accéder à cette page');
    return <Navigate to="/" />;
  }
  return (
    <div className="edition-festival-container">
      <Helmet>
        <title>EditionFestival</title>
        <meta
          property="og:title"
          content="EditionFestival"
        />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name21"></Navbar>
      <EditionFestivalComponent rootClassName="edition-festival-component-root-class-name"></EditionFestivalComponent>
      <Footer rootClassName="footer-root-class-name21"></Footer>
    </div>
  )
}

export default EditionFestival
