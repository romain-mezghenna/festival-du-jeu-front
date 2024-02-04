import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import NavbarInscription from '../components/navbar-inscription'
import PlanningIndividuelComponent from '../components/planning-individuel-component'
import Footer from '../components/footer'
import './planning-individuel.css'

function PlanningIndividuel(props : any){
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
