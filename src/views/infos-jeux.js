import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import InfosJeuxComponent from '../components/infos-jeux-component'
import Footer from '../components/footer'
import './infos-jeux.css'

const InfosJeux = (props) => {
  return (
    <div className="infos-jeux-container">
      <Helmet>
        <title>InfosJeux - Funny Key Herring</title>
        <meta property="og:title" content="InfosJeux - Funny Key Herring" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name14"></Navbar>
      <InfosJeuxComponent rootClassName="infos-jeux-component-root-class-name"></InfosJeuxComponent>
      <button type="button" className="button">
        <span className="infos-jeux-text">
          <span>Ajouter un jeu au format csv</span>
          <br></br>
        </span>
      </button>
      <Footer rootClassName="footer-root-class-name14"></Footer>
    </div>
  )
}

export default InfosJeux
