import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import NavbarInscription from '../components/navbar-inscription'
import InscriptionInfo from '../components/inscription-info'
import Footer from '../components/footer'
import './menu-inscription.css'

const MenuInscription = (props:any) => {
  return (
    <div className="menu-inscription-container">
      <Helmet>
        <title>MenuInscription - Funny Key Herring</title>
        <meta
          property="og:title"
          content="MenuInscription - Funny Key Herring"
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
