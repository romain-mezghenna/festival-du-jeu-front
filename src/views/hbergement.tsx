import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import HebergementComponent from '../components/hebergement-component'
import Footer from '../components/footer'
import './hbergement.css'

const Hbergement = (props:any) => {
  return (
    <div className="hbergement-container">
      <Helmet>
        <title>Hébergement</title>
        <meta property="og:title" content="Hébergement" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name11"></Navbar>
      <HebergementComponent rootClassName="hebergement-component-root-class-name"></HebergementComponent>
      <Footer rootClassName="footer-root-class-name11"></Footer>
    </div>
  )
}

export default Hbergement
