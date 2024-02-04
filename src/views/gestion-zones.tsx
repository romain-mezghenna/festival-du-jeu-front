import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import GestionZonesComponent from '../components/gestion-zones-component'
import Footer from '../components/footer'
import './gestion-zones.css'

const GestionZones = (props:any) => {
  return (
    <div className="gestion-zones-container">
      <Helmet>
        <title>GestionZones - Funny Key Herring</title>
        <meta property="og:title" content="GestionZones - Funny Key Herring" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name23"></Navbar>
      <GestionZonesComponent rootClassName="gestion-zones-component-root-class-name"></GestionZonesComponent>
      <Footer rootClassName="footer-root-class-name23"></Footer>
    </div>
  )
}

export default GestionZones
