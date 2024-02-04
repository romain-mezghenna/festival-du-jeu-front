import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import ProfilField from '../components/profil-field'
import Footer from '../components/footer'
import './profil.css'

function Profil(props : any){
  return (
    <div className="profil-container">
      <Helmet>
        <title>Profil - Funny Key Herring</title>
        <meta property="og:title" content="Profil - Funny Key Herring" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name5"></Navbar>
      <ProfilField rootClassName="profil-field-root-class-name"></ProfilField>
      <Footer rootClassName="footer-root-class-name4"></Footer>
    </div>
  )
}

export default Profil
