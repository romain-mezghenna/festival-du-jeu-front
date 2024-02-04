import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import NavbarInscription from '../components/navbar-inscription'
import PlanningInscription from '../components/planning-inscription'
import Footer from '../components/footer'
import './inscription-gnrale.css'

const InscriptionGnrale = (props) => {
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
