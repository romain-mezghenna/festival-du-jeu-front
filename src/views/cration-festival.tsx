import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import CrationFestivalComponent from '../components/cration-festival-component'
import Footer from '../components/footer'
import './cration-festival.css'

const CrationFestival = (props:any) => {
  return (
    <div className="cration-festival-container">
      <Helmet>
        <title>CrationFestival - Funny Key Herring</title>
        <meta
          property="og:title"
          content="CrationFestival - Funny Key Herring"
        />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name22"></Navbar>
      <CrationFestivalComponent rootClassName="cration-festival-component-root-class-name"></CrationFestivalComponent>
      <Footer rootClassName="footer-root-class-name22"></Footer>
    </div>
  )
}

export default CrationFestival
