import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import AttributionPostesComponent from '../components/attribution-postes-component'
import Footer from '../components/footer'
import './attribution-postes.css'

const AttributionPostes = (props) => {
  return (
    <div className="attribution-postes-container">
      <Helmet>
        <title>AttributionPostes - Funny Key Herring</title>
        <meta
          property="og:title"
          content="AttributionPostes - Funny Key Herring"
        />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name24"></Navbar>
      <AttributionPostesComponent rootClassName="attribution-postes-component-root-class-name"></AttributionPostesComponent>
      <Footer rootClassName="footer-root-class-name24"></Footer>
    </div>
  )
}

export default AttributionPostes
