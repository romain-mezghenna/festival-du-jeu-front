import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import FAQAdminComponent from '../components/faq-admin-component.tsx'
import Footer from '../components/footer'
import './faq-admin.css'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { RootState } from '../store/store.ts'

const FAQAdmin = (props:any) => {
  const user = useSelector((state: RootState) => state.user);
  
  // Avant de charger la page, on vérifie que l'utilisateur est bien connecté et qu'il a le rôle d'admin
  if (!user.isLoggedIn || user.role !== 4) {
    alert('Vous n\'êtes pas autorisé à accéder à cette page');
    return <Navigate to="/" />;
  }
  return (
    <div className="faq-admin-container">
      <Helmet>
        <title>FAQAdmin</title>
        <meta property="og:title" content="FAQAdmin - Funny Key Herring" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name13"></Navbar>
      <FAQAdminComponent rootClassName="faq-admin-component-root-class-name"></FAQAdminComponent>
      <Footer rootClassName="footer-root-class-name13"></Footer>
    </div>
  )
}

export default FAQAdmin
