import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import NavBarAnimationJeux from '../components/nav-bar-animation-jeux'
import AnimationJeux from '../components/animation-jeux'
import Footer from '../components/footer'
import './planning-animation-jeux.css'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { RootState } from '../store/store'

const PlanningAnimationJeux = (props:any) => {
  const user = useSelector((state: RootState) => state.user);
  
  // Avant de charger la page, on vérifie que l'utilisateur est bien connecté
  if (!user.isLoggedIn) {
    alert('Vous n\'êtes pas autorisé à accéder à cette page');
    return <Navigate to="/" />;
  }
  return (
    <div className="planning-animation-jeux-container">
      <Helmet>
        <title>PlanningAnimationJeux</title>
        <meta
          property="og:title"
          content="PlanningAnimationJeux"
        />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name8"></Navbar>
      <NavBarAnimationJeux rootClassName="nav-bar-animation-jeux-root-class-name1"></NavBarAnimationJeux>
      <AnimationJeux rootClassName="animation-jeux-root-class-name"></AnimationJeux>
      <Footer rootClassName="footer-root-class-name8"></Footer>
    </div>
  )
}

export default PlanningAnimationJeux
